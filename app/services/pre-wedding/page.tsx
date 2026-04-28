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

        {/* YouTube Video Showcase */}
        <section className="py-12 md:py-24 bg-white">
           <div className="container mx-auto px-6 md:px-12">
              <div className="relative group rounded-[3rem] overflow-hidden aspect-video max-w-5xl mx-auto shadow-2xl border border-slate-100">
                 {/* Background image */}
                 <Image
                    src="/kristin/Kristine_Cover.webp"
                    alt="Pre-Wedding Background"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                 />
                 {/* Dark overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                 {/* Play button + text */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                    <Link 
                       href="https://www.youtube.com/watch?v=h5UJvhwLh2o" 
                       target="_blank"
                       className="w-20 h-20 bg-secondary text-white rounded-full flex items-center justify-center shadow-2xl scale-100 hover:scale-110 transition-all"
                    >
                       <Play fill="currentColor" size={32} className="ml-1" />
                    </Link>
                    <div className="mt-8 space-y-2">
                       <h3 className="text-white text-2xl md:text-3xl font-heading font-extrabold tracking-tight">Watch Our Pre-Wedding Film</h3>
                       <p className="text-white/70 text-sm font-medium uppercase tracking-[0.2em]">Romantic Stories on YouTube</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
