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
  const schema ={
"@context": "https://schema.org",
"@type": "PhotographyBusiness",
"@id": "https://www.maxphotostudio.in/#business",
"name": "Max Photo Studio",
"url": "https://www.maxphotostudio.in/",
"logo": "https://www.maxphotostudio.in/logo.jpeg",
"image": "https://www.maxphotostudio.in/logo.jpeg",
"description": "Max Photo Studio specializes in cinematic wedding photography, event photography, candid photography, videography, pre-wedding shoots, digital albums, photo restoration, and personalized gifting services in Mumbai.",
"telephone": "+91-9820685643",
"email": "info@maxphotostudio.in",
"priceRange": "₹₹",
"address": {
"@type": "PostalAddress",
"streetAddress": "Shop No. 2, Saroj Apartments, Opp. Holy Spirit Hospital, Mahakali Caves Road, Andheri East",
"addressLocality": "Mumbai",
"addressRegion": "Maharashtra",
"postalCode": "400093",
"addressCountry": "IN"
},
"contactPoint": {
"@type": "ContactPoint",
"telephone": "+91-9820685643",
"contactType": "customer service",
"areaServed": "IN",
"availableLanguage": ["English", "Hindi", "Marathi"]
},
"openingHoursSpecification": [
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": [
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
],
"opens": "09:00",
"closes": "20:30"
}
],
"areaServed": {
"@type": "City",
"name": "Mumbai"
},
"sameAs": [
"https://www.facebook.com/profile.php?id=61569262136371",
"https://www.instagram.com/studiomaxdigitalphoto",
"https://www.youtube.com/@maxphotostudio1538",
"https://maps.app.goo.gl/vSAMvQqK6wk8pGoe7"
],
"hasOfferCatalog": {
"@type": "OfferCatalog",
"name": "Photography Services",
"itemListElement": [
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Wedding Photography"
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Cinematic Wedding Films"
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Event Photography"
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Event Videography"
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Candid Photography"
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Pre-Wedding Photography"
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Studio Photography"
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Digital Album Printing"
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Photo Restoration"
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Personalized Photo Gifts"
}
}
]
}
};
  return (
    <html
      lang="en"
      className={`h-full antialiased scroll-smooth ${inter.variable} ${outfit.variable}`}
      data-scroll-behavior="smooth"
    >
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
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
