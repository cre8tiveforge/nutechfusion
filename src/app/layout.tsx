import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
  title: "NuTech Fusion - AI & VR Solutions",
  description: "Transform your business with cutting-edge AI and Virtual Reality solutions. Custom chatbots, automation, and immersive experiences.",
  keywords: "AI Solutions, Virtual Reality, 3D Production, Technical Solutions, Digital Strategy, Advanced Manufacturing, Custom Chatbots, Process Automation, VR Training",
};

export default function RootLayout({
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
