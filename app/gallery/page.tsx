"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Camera, Sparkles, Heart, Film, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
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
      if (start >= end) { setCount(end); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, frameDuration);
    return () => clearInterval(timer);
  }, [target, duration]);
  return <>{count}</>;
}

const allImages = [
  // Pre-Wedding
  { src: "/pre-wedding/pre-wedding.webp", title: "Timeless Romance", category: "Pre-Wedding" },
  { src: "/pre-wedding/Pre-Wedding1.webp", title: "Golden Hour", category: "Pre-Wedding" },
  { src: "/pre-wedding/pre-wedding2.webp", title: "Stylized Story", category: "Pre-Wedding" },
  { src: "/pre-wedding/Prewedding3.webp", title: "Modern Love", category: "Pre-Wedding" },

  // Events
  { src: "/florines/Florine%27s%20Communion.webp", title: "Sacred Communion", category: "Events" },
  { src: "/florines/Florine%27s%20Communi.webp", title: "Divine Joy", category: "Events" },
  { src: "/keith-album/Keith%27s%20Communion.webp", title: "Family Legacy", category: "Events" },
  { src: "/keith-album/Keith%27s%20Communio.webp", title: "Solemn Ceremony", category: "Events" },
  { src: "/birthday/Dalreen%20Birthday.webp", title: "Celebration Spirit", category: "Events" },
  { src: "/birthday/Dalreenbirthday.webp", title: "Joyful Gathering", category: "Events" },

  // Weddings
  { src: "/wedding/Page%20wed.webp", title: "Royal Union", category: "Weddings" },
  { src: "/wedding/Page.webp", title: "The Grand Celebration", category: "Weddings" },
  { src: "/wedding/Page_0.webp", title: "Eternal Vows", category: "Weddings" },
  { src: "/wedding/Page_00.webp", title: "Golden Moments", category: "Weddings" },
  { src: "/sam-wedding/Samford%20Weddin.webp", title: "Sacred Bond", category: "Weddings" },
  { src: "/silver-wedding/Silver%20Wedding.webp", title: "Silver Jubilee", category: "Weddings" },

  // Cinematic / Albums
  { src: "/aeron-album/Aaron%20Album.webp", title: "Storybook Legacy", category: "Cinematic" },
  { src: "/aeron-album/Aeronalbum.webp", title: "Visual Narrative", category: "Cinematic" },
  { src: "/jassi-album/Jessy%20Album.webp", title: "Signature Style", category: "Cinematic" },
  { src: "/jassi-album/Jessy%20Al.webp", title: "Candid Essence", category: "Cinematic" },
  { src: "/samford-album/Samford%20Roce.webp", title: "Cinematic Frame", category: "Cinematic" },
  { src: "/samford-album/Samford%20Roc.webp", title: "Dynamic Shot", category: "Cinematic" },
];

const categories = ["All", "Weddings", "Pre-Wedding", "Events", "Cinematic"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? allImages
    : allImages.filter(img => img.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Luxury Hero */}
        <section className="relative py-24 md:py-40 bg-[#0a0a0b] text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/wedding/Page%20wed.webp" alt="Gallery Hero" fill className="object-cover opacity-30" sizes="100vw" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/80 via-[#0a0a0b]/60 to-[#0a0a0b]"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-secondary font-bold uppercase tracking-[0.6em] text-xs mb-8 block">Official Portfolio</span>
              <h1 className="text-4xl md:text-7xl font-heading font-extrabold mb-8 tracking-tighter leading-tight">
                Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">Masterpieces</span>
              </h1>
              <p className="text-lg md:text-2xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                A visual journey through grand celebrations, intimate emotions, and timeless stories captured by Max Photo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">

            {/* Filter Navigation */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${activeCategory === cat
                    ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105"
                    : "bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-primary"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Masonry Style Grid - No Cropping */}
            <motion.div
              layout
              className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((img, i) => (
                  <motion.div
                    layout
                    key={img.src}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="group relative break-inside-avoid rounded-3xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-700 hover:shadow-2xl"
                  >
                    <div className="relative w-full bg-slate-50">
                      <Image
                        src={img.src}
                        alt={img.title}
                        width={800}
                        height={1000}
                        className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-6 left-6">
                           <p className="text-white font-heading font-bold text-lg tracking-tight">{img.title}</p>
                           <p className="text-secondary font-bold text-[10px] uppercase tracking-widest mt-1">{img.category}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Showcase Stats */}
            <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Wedding Stories", value: 500, icon: <Heart className="text-secondary" size={24} /> },
                { label: "Cinematic Films", value: 200, icon: <Film className="text-secondary" size={24} /> },
                { label: "Happy Couples", value: 1200, icon: <Camera className="text-secondary" size={24} /> },
                { label: "Legacy Years", value: 33, icon: <Sparkles className="text-secondary" size={24} /> },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 p-10 rounded-[3rem] text-center space-y-4 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm">
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

        {/* Final Call to Action */}
        <section className="py-12 bg-primary text-white text-center mx-6 md:mx-12 rounded-[3.5rem] mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10 container mx-auto px-6 space-y-4">
            <h2 className="text-2xl md:text-4xl font-heading font-extrabold tracking-tighter">Ready to tell your story?</h2>
            <p className="text-base text-white/50 max-w-lg mx-auto font-light leading-relaxed">
              Book your consultation today and let's start planning how to capture your most valuable moments.
            </p>
            <div className="flex justify-center pt-4">
              <Link href="/contact" className="group px-10 py-4 bg-secondary text-white rounded-full font-extrabold text-base hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                Inquire for Date
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
