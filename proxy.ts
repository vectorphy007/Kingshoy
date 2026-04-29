import { NextRequest, NextResponse } from "next/server";
import { verifySessionTokenEdge } from "@/lib/auth-edge";

const SESSION_COOKIE = "admin_session";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Exclude the login page and auth API from protection
  if (pathname === "/admin/login" || pathname === "/api/admin/auth") {
    return NextResponse.next();
  }

  // Protect /admin/* and /api/admin/* routes
  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    const token = request.cookies.get(SESSION_COOKIE)?.value;

    if (!token) {
      return redirectToLogin(request);
    }

    const { valid } = await verifySessionTokenEdge(token);
    if (!valid) {
      return redirectToLogin(request);
    }
  }

  return NextResponse.next();
}

function redirectToLogin(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;

  // API routes return 401 instead of redirect
  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const loginUrl = new URL("/admin/login", request.url);
  loginUrl.searchParams.set("from", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
