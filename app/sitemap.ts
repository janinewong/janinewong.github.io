import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const publicPaths = ["/", "/about", "/work/promotions", "/work/premier-bays", "/work/developer-center", "/work/fut18"];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map((path) => ({ url: `${SITE_URL}${path}`, lastModified: new Date() }));
}
