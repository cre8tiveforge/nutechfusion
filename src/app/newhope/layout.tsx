import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "New Hope Methodist Church",
  description: "Welcome to New Hope Methodist Church - A beacon of hope sharing the love of Christ through worship, service, and community.",
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="29" y="12" width="6" height="40" fill="%238B0000"/><rect x="18" y="26" width="28" height="6" fill="%238B0000"/><path d="M32 52 C20 50, 12 40, 16 28 C28 30, 36 38, 32 52 Z" fill="%233D9970"/></svg>',
        sizes: 'any',
        type: 'image/svg+xml',
      }
    ],
  },
};

export default function NewHopeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 