import { createHash, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { ACCESS_COOKIE, ACCESS_SECONDS, makeSession, safeDestination } from "@/lib/case-study-access";

const attempts = new Map<string, { count: number; until: number }>();
export async function POST(request: NextRequest) {
  if (request.headers.get("origin") !== request.nextUrl.origin) return NextResponse.json({ error: "Please try again from this website." }, { status: 403 });
  if (!process.env.CASE_STUDY_PASSWORD || !process.env.CASE_STUDY_SESSION_SECRET) return NextResponse.json({ error: "Access is being configured. Please get in touch." }, { status: 503 });
  const key = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  for (const [id, entry] of attempts) if (entry.until < now) attempts.delete(id);
  const attempt = attempts.get(key) || { count: 0, until: now + 15 * 60 * 1000 };
  if (attempt.count >= 10) return NextResponse.json({ error: "Too many attempts. Please try again in 15 minutes." }, { status: 429 });
  let body;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Enter your password." }, { status: 400 }); }
  if (typeof body.password !== "string" || body.password.length > 256) return NextResponse.json({ error: "Enter your password." }, { status: 400 });
  const hash = (text: string) => createHash("sha256").update(text).digest();
  if (!timingSafeEqual(hash(body.password), hash(process.env.CASE_STUDY_PASSWORD))) {
    attempts.set(key, { ...attempt, count: attempt.count + 1 });
    return NextResponse.json({ error: "That password doesn’t match. Please try again." }, { status: 401 });
  }
  attempts.delete(key);
  const response = NextResponse.json({ next: safeDestination(body.next) });
  response.cookies.set(ACCESS_COOKIE, makeSession(), { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: ACCESS_SECONDS });
  response.headers.set("Cache-Control", "no-store");
  return response;
}
