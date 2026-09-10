import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { GA_ID } from "@/lib/analytics";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Janine Wong — Senior UX Designer",
  description: "Portfolio of Janine Wong, Senior UX Designer.",
  openGraph: {
    title: "Janine Wong — Senior UX Designer",
    description: "Portfolio of Janine Wong, Senior UX Designer.",
    images: "/opengraph-image.png",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
