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
          <div className="absolute inset-0">
             <Image src="/birthday/Dalreenbirthda.webp" alt="Pre-Wedding Hero" fill className="object-cover opacity-20" priority />
             <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/80 via-[#0a0a0b] to-[#0a0a0b]"></div>
          </div>
          
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

        {/* Gallery - Romantic Editorial */}
        <section className="py-12 bg-white">
           <div className="container mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {/* Featured image */}
                 <div className="md:col-span-2 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
                    <Image src="/birthday/Dalreenbirthday.webp" alt="Pre-Wedding Featured" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-6 left-6 z-20">
                       <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                          <MapPin size={14} className="text-secondary" />
                          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Iconic Locations</span>
                       </div>
                    </div>
                 </div>
                 
                 {/* Side images */}
                 <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
                    <Image src="/florines/Florine's%20Comm.webp" alt="Pre-Wedding 1" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>
                 <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
                    <Image src="/florines/Florine's%20Communi.webp" alt="Pre-Wedding 2" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>
                 <div className="md:col-span-2 relative aspect-[16/7] rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
                    <Image src="/florines/Florine's%20Communion.webp" alt="Pre-Wedding 3" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>
              </div>
           </div>
        </section>

        {/* YouTube Video Showcase */}
        <section className="py-12 md:py-16 bg-white">
           <div className="container mx-auto px-6 md:px-12">
              <div className="relative group rounded-[3rem] overflow-hidden aspect-video max-w-5xl mx-auto shadow-2xl border border-slate-100">
                 <Image src="/kristin/Kristine_Cover.webp" alt="Watch Pre-Wedding Video" fill className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80" />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col items-center justify-center p-8 text-center">
                    <Link 
                       href="https://youtu.be/h5UJvhwLh2o?si=f-1R8MkyNa2dGZai" 
                       target="_blank"
                       className="w-20 h-20 bg-secondary text-white rounded-full flex items-center justify-center shadow-2xl scale-100 hover:scale-110 transition-all group/play"
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

        {/* Features & Stats */}
        <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100">
           <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 flex gap-8 justify-center md:justify-start">
                 <div>
                    <Counter from={0} to={300} suffix="+" className="text-4xl font-heading font-extrabold text-primary" />
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Couples Captured</p>
                 </div>
                 <div>
                    <Counter from={0} to={50} suffix="+" className="text-4xl font-heading font-extrabold text-primary" />
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Destinations</p>
                 </div>
              </div>

              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {features.map((f, i) => (
                    <div key={i} className="flex gap-4 items-center bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-secondary/20 transition-colors">
                       <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                          <CheckCircle2 size={16} />
                       </div>
                       <div className="space-y-0.5">
                          <h4 className="text-sm font-bold text-primary">{f.title}</h4>
                          <p className="text-[11px] text-slate-500 font-light">{f.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20 text-center relative overflow-hidden">
           <div className="container mx-auto px-6 relative z-10">
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-primary mb-4">Start Your Forever With Us</h2>
              <p className="text-sm text-slate-500 mb-8 max-w-lg mx-auto">Book your pre-wedding session today and create memories that will last a lifetime.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Link href="/contact" className="px-10 py-4 bg-primary text-white rounded-full font-bold text-sm hover:bg-secondary transition-all shadow-xl shadow-primary/10">
                    Check Availability
                 </Link>
                 <Link href="https://wa.me/919820685643" className="px-10 py-4 bg-white text-primary border border-slate-200 rounded-full font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                    WhatsApp Inquiry
                 </Link>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
