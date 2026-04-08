import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Max Photo Studio | Cinematic Wedding Films & AI Galleries",
  description: "Specialized in premium wedding storytelling, cinematic films, and AI-powered guest galleries in Mumbai.",
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
