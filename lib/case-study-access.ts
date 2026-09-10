import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const ACCESS_COOKIE = "portfolio_access";
export const ACCESS_SECONDS = 60 * 60 * 24 * 7;
export function validSession(token?: string) {
  const secret = process.env.CASE_STUDY_SESSION_SECRET;
  if (!token || !secret || !/^\d{13}\.[a-f0-9]{64}$/.test(token)) return false;
  const [expires, signature, extra] = token.split(".");
  if (extra || !expires || !signature || Number(expires) <= Date.now()) return false;
  const expected = createHmac("sha256", secret).update(expires).digest("hex");
  return signature.length === expected.length && timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}
export function makeSession() {
  const secret = process.env.CASE_STUDY_SESSION_SECRET;
  if (!secret) throw new Error("Case study access is not configured");
  const expires = String(Date.now() + ACCESS_SECONDS * 1000);
  return `${expires}.${createHmac("sha256", secret).update(expires).digest("hex")}`;
}
export async function hasAccess() { return validSession((await cookies()).get(ACCESS_COOKIE)?.value); }
export async function requireAccess(path: string) { if (!await hasAccess()) redirect(`/unlock?next=${encodeURIComponent(path)}`); }
export function safeDestination(value: unknown) {
  return value === "/work/multichannel-selling" ? value : "/work/manage-framework";
}
