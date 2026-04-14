import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Max Photo | Cinematic Wedding Photography & Films in Mumbai",
  description: "Max Photo creates cinematic wedding stories, elegant portraits, and premium memories designed to last a lifetime. Specialized in AI-powered guest experiences.",
};

import { Preloader } from "@/components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
