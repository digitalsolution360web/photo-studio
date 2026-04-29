import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Film, CheckCircle2, Heart, Sparkles, MapPin, Play } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Counter } from "@/components/Counter";

export const metadata: Metadata = {
  title: "Premium Pre-Wedding Photo Shoot | Max Photo Mumbai",
  description: "Romantic, stylized pre-wedding photography sessions in Mumbai and beyond. Capture your love story with cinematic visuals and artistic direction.",
};

export default function PreWeddingPage() {
  const features = [
    { title: "Location Scouting", desc: "Handpicked locations that match your personality and style." },
    { title: "Concept Design", desc: "Creative themes and moodboards tailored to your story." },
    { title: "Styling Guidance", desc: "Professional advice on outfits and aesthetics for the shoot." },
    { title: "Artistic Direction", desc: "Expert posing and direction for natural, romantic results." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Romance Hero */}
        <section className="relative py-12 md:py-20 bg-[#0a0a0b] text-white">
          <div className="container mx-auto px-6 relative z-10 text-center space-y-6">
             <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Pre-Wedding Session</span>
             <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tighter">
                Pre-Wedding <span className="text-secondary">Photo Shoot</span>
             </h1>
             <p className="text-sm md:text-base text-white/50 max-w-xl mx-auto font-light leading-relaxed">
                Stylized couple sessions designed to reflect personality, romance, and chemistry.
              </p>
          </div>
        </section>

        {/* Image Showcase Grid */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                { src: "/pre-wedding/pre-wedding.webp", alt: "Pre-Wedding Shoot 1" },
                { src: "/pre-wedding/Pre-Wedding1.webp", alt: "Pre-Wedding Shoot 2" },
                { src: "/pre-wedding/pre-wedding2.webp", alt: "Pre-Wedding Shoot 3" },
                { src: "/pre-wedding/Prewedding3.webp", alt: "Pre-Wedding Shoot 4" },
              ].map((img, idx) => (
                <div key={idx} className="relative aspect-[4/5] md:aspect-[3/2] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={idx < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
