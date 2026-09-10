import { readFile } from "node:fs/promises";
import path from "node:path";
import { hasAccess } from "@/lib/case-study-access";

export async function GET(_request: Request, context: { params: Promise<{ path: string[] }> }) {
  if (!await hasAccess()) return new Response(null, { status: 401, headers: { "Cache-Control": "no-store" } });
  const parts = (await context.params).path;
  if (parts.length !== 2 || !["manage", "multichannel"].includes(parts[0]) || !/^[a-zA-Z0-9-]+\.(png|jpeg|jpg|webp)$/.test(parts[1])) return new Response(null, { status: 404 });
  try {
    const file = await readFile(path.join(process.cwd(), "private/case-studies", ...parts));
    const ext = path.extname(parts[1]).slice(1);
    return new Response(file, { headers: { "Content-Type": `image/${ext === "jpg" ? "jpeg" : ext}`, "Cache-Control": "private, no-store", "X-Content-Type-Options": "nosniff" } });
  } catch { return new Response(null, { status: 404 }); }
}
