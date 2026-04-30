import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Max Photo | Cinematic Wedding Photography & Films in Mumbai",
  description: "Max Photo creates cinematic wedding stories, elegant portraits, and premium memories designed to last a lifetime. Specialized in AI-powered guest experiences.",
};

import { Preloader } from "@/components/Preloader";
import { SupportBar } from "@/components/SupportBar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased scroll-smooth ${inter.variable} ${outfit.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col font-sans">
        <Preloader />
        {children}
        <SupportBar />
        <div className="hidden md:block">
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
