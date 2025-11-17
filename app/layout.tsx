import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FloatingBackground from "@/components/FloatingBackground";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "Reallier Wei | Full-Stack Developer & DevOps Engineer",
  description: "Senior Testing Developer with expertise in Python, DevOps, and full-stack development. Experience at Garena and Lenovo.",
  metadataBase: new URL("https://reallier-wei.dev"),
  keywords: ["Python", "DevOps", "Testing", "Kubernetes", "Docker", "Full-Stack", "Automation"],
  authors: [{ name: "Reallier Wei" }],
  creator: "Reallier Wei",
  publisher: "Reallier Wei",
  openGraph: {
    title: "Reallier Wei | Portfolio",
    description: "Full-Stack Developer & DevOps Engineer Portfolio",
    url: "https://reallier-wei.dev",
    siteName: "Reallier Wei Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Reallier Wei - Full-Stack Developer & DevOps Engineer"
      }
    ],
    locale: "zh_CN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Reallier Wei | Full-Stack Developer & DevOps Engineer",
    description: "Senior Testing Developer with expertise in Python, DevOps, and full-stack development.",
    images: ["/og.png"]
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="bg-page text-text-main antialiased selection:bg-primary-blue/10">
        <FloatingBackground />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
