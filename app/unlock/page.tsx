import { redirect } from "next/navigation";
import { hasAccess, safeDestination } from "@/lib/case-study-access";
import { PasswordGate } from "@/components/PasswordGate";
import { HomeContent } from "@/components/HomeContent";

export const metadata = { title: "Protected work — Janine Wong", robots: { index: false, follow: false } };
export default async function Page({ searchParams }: { searchParams: Promise<{ next?: string; preview?: string }> }) {
  const params = await searchParams;
  const next = safeDestination(params.next);
  if (params.preview !== "1" && await hasAccess()) redirect(next);
  return <><HomeContent /><PasswordGate next={next} /></>;
}
