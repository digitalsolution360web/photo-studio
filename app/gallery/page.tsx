"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Camera, Sparkles, Heart, Film } from "lucide-react";
import { useState, useEffect } from "react";

function AnimatedCounter({ target, duration = 2000 }: { target: number, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    let totalFrames = Math.min(target, 60);
    let frameDuration = duration / totalFrames;
    let increment = end / totalFrames;

    let timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count}</>;
}

export default function GalleryPage() {
  const images = [
    { src: "/p1.webp", title: "The Royal Entrance", category: "Weddings" },
    { src: "/p2.jpg", title: "Candid Joy", category: "Moments" },
    { src: "/p3.jpg", title: "Eternal Vows", category: "Ceremony" },
    { src: "/p4.jpg", title: "Sangeet Night", category: "Events" },
    { src: "/p.webp", title: "The Beautiful Bride", category: "Portraits" },
    { src: "/p5.webp", title: "Groom's Squad", category: "Portraits" },
    { src: "/b1.webp", title: "Cinematic Scene", category: "Films" },
    { src: "/b3.webp", title: "Golden Hour", category: "Pre-Wedding" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Luxury Hero */}
        <section className="relative py-24 md:py-40 bg-[#0a0a0b] text-white overflow-hidden">
           <div className="absolute inset-0">
             <Image src="/b1.webp" alt="Gallery Hero" fill className="object-cover opacity-30" sizes="100vw" />
             <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/80 via-[#0a0a0b] to-[#0a0a0b]"></div>
           </div>
           
           <div className="container mx-auto px-6 relative z-10 text-center">
              <span className="text-secondary font-bold uppercase tracking-[0.6em] text-xs mb-8 block">Preserved Perfection</span>
              <h1 className="text-4xl md:text-7xl font-heading font-extrabold mb-8 tracking-tighter leading-tight">
                Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">Gallery</span>
              </h1>
              <p className="text-lg md:text-2xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                A curated selection of our finest work. From grand celebrations to intimate emotions, every frame tells a unique story.
              </p>
           </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-24 bg-white">
           <div className="container mx-auto px-6 md:px-12">
              {/* Category Filter Pills (Static for UI) */}
              <div className="flex flex-wrap justify-center gap-4 mb-20">
                {["All", "Weddings", "Films", "Pre-Wedding", "Events", "Cinematic"].map((cat, i) => (
                  <button key={i} className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${i === 0 ? 'bg-primary text-white shadow-xl' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}>
                    {cat}
                  </button>
                ))}
              </div>

              <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 animate-in fade-in slide-in-from-bottom-5 duration-1000">
                 {images.map((img, i) => (
                    <div key={i} className="group relative break-inside-avoid rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-sm transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10">
                        <div className="relative w-full aspect-square overflow-hidden">
                           <Image 
                              src={img.src} 
                              alt={img.title} 
                              fill 
                              className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                           <span className="text-secondary font-bold uppercase tracking-widest text-[9px] mb-1 block">{img.category}</span>
                           <h3 className="text-white text-base font-heading font-extrabold mb-3 line-clamp-1">{img.title}</h3>
                           <div className="w-8 h-8 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                              <Sparkles size={14} />
                           </div>
                        </div>
                    </div>
                 ))}
              </div>

              {/* Showcase Stats */}
              <div className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-8">
                 {[
                   { label: "Wedding Stories", value: 500, icon: <Heart className="text-secondary" /> },
                   { label: "Cinematic Films", value: 200, icon: <Film className="text-secondary" /> },
                   { label: "Happy Couples", value: 1200, icon: <Camera className="text-secondary" /> },
                   { label: "Legacy Years", value: 15, icon: <Sparkles className="text-secondary" /> },
                 ].map((stat, i) => (
                   <div key={i} className="bg-slate-50 p-10 rounded-[3rem] text-center space-y-4 border border-slate-100">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                        {stat.icon}
                      </div>
                      <div>
                        <p className="text-3xl font-heading font-extrabold text-primary">
                          <AnimatedCounter target={stat.value} />+
                        </p>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">{stat.label}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary text-white text-center mx-6 md:mx-12 rounded-[3.5rem] mb-12 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
           <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tighter">Ready for your own masterpiece?</h2>
              <p className="text-lg text-white/50 max-w-xl mx-auto font-light">Book your consultation today and let's start planning how to capture your most valuable moments.</p>
              <div className="flex justify-center pt-4">
                 <button className="px-12 py-5 bg-secondary text-white rounded-full font-extrabold text-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all">
                    Inquire for Date
                 </button>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
