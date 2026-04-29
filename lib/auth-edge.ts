/**
 * Edge Runtime-compatible auth utilities.
 * Uses the Web Crypto API (SubtleCrypto) which works in both
 * Edge Runtime (middleware) and Node.js environments.
 */

const DEFAULT_SECRET = "kingshot-admin-default-secret-change-in-production";

function getSecret(): string {
  return process.env.ADMIN_SECRET || DEFAULT_SECRET;
}

function hexToBytes(hex: string): ArrayBuffer {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  return bytes.buffer as ArrayBuffer;
}

function decodeBase64Url(str: string): string {
  // base64url → base64
  str = str.replace(/-/g, "+").replace(/_/g, "/");
  while (str.length % 4 !== 0) str += "=";
  return atob(str);
}

async function importHmacKey(secret: string): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"]
  );
}

export async function verifySessionTokenEdge(token: string): Promise<{ valid: boolean; username?: string }> {
  try {
    const secret = getSecret();
    const decoded = decodeBase64Url(token);

    const lastColon = decoded.lastIndexOf(":");
    if (lastColon === -1) return { valid: false };

    const payloadPart = decoded.slice(0, lastColon);
    const signature = decoded.slice(lastColon + 1);

    const key = await importHmacKey(secret);
    const encoder = new TextEncoder();
    const sigBytes = hexToBytes(signature);
    const valid = await crypto.subtle.verify("HMAC", key, sigBytes, encoder.encode(payloadPart));

    if (!valid) return { valid: false };

    const colonIdx = payloadPart.indexOf(":");
    if (colonIdx === -1) return { valid: false };
    const username = payloadPart.slice(0, colonIdx);
    const timestamp = parseInt(payloadPart.slice(colonIdx + 1), 10);

    // 24-hour expiry
    if (Date.now() - timestamp > 24 * 60 * 60 * 1000) {
      return { valid: false };
    }

    return { valid: true, username };
  } catch {
    return { valid: false };
  }
}
