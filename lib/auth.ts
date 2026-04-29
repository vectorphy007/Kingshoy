import crypto from "crypto";

const DEFAULT_SECRET = "kingshot-admin-default-secret-change-in-production";

function getSecret(): string {
  return process.env.ADMIN_SECRET || DEFAULT_SECRET;
}

export function createSessionToken(username: string): string {
  const secret = getSecret();
  const payload = `${username}:${Date.now()}`;
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(payload);
  const signature = hmac.digest("hex");
  // base64url encode: btoa equivalent using Buffer
  return Buffer.from(`${payload}:${signature}`).toString("base64url");
}

export function verifySessionToken(token: string): { valid: boolean; username?: string } {
  try {
    const secret = getSecret();
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const lastColon = decoded.lastIndexOf(":");
    if (lastColon === -1) return { valid: false };

    const payloadPart = decoded.slice(0, lastColon);
    const signature = decoded.slice(lastColon + 1);

    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(payloadPart);
    const expectedSig = hmac.digest("hex");

    // signature lengths must match before timingSafeEqual
    if (signature.length !== expectedSig.length) return { valid: false };

    if (!crypto.timingSafeEqual(Buffer.from(signature, "hex"), Buffer.from(expectedSig, "hex"))) {
      return { valid: false };
    }

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

export function verifyCredentials(username: string, password: string): boolean {
  const expectedUsername = process.env.ADMIN_USERNAME || "admin";
  const expectedPassword = process.env.ADMIN_PASSWORD || "";

  if (!expectedPassword) return false;

  const usernameMatch = username === expectedUsername;
  const passwordMatch = password === expectedPassword;
  return usernameMatch && passwordMatch;
}

export const SESSION_COOKIE = "admin_session";
