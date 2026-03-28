import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Hikmet Karsen — Flutter Developer & AI Builder",
  description:
    "I bridge the gap between AI potential and production-ready products. Flutter developer, AI builder, and founder of Elpis Software.",
  metadataBase: new URL("https://hikmetkarsen.com"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Hikmet Karsen — Flutter Developer & AI Builder",
    description:
      "Founder of Elpis Software. Building high-performance mobile ecosystems with Flutter and engineering context-aware AI agents.",
    url: "https://hikmetkarsen.com",
    siteName: "Hikmet Karsen",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hikmet Karsen — Flutter Developer & AI Builder",
    description:
      "Founder of Elpis Software. Building high-performance mobile ecosystems with Flutter and engineering context-aware AI agents.",
  },
  alternates: {
    canonical: "https://hikmetkarsen.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
