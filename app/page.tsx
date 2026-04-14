import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSlider } from "@/components/HeroSlider";
import {
  Camera,
  Film,
  Users,
  Sparkles,
  QrCode,
  BookOpen,
  CheckCircle2,
  Gem,
  Video,
  Image as ImageIcon,
  Palette,
  Gift,
  Heart
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
      <Navbar />

      <main className="flex-grow">
        <HeroSlider />

        {/* Hero Content Section */}
        <section className="py-12 bg-white border-b border-slate-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-heading font-extrabold text-primary leading-tight tracking-tight">
                Cinematic Wedding Stories, Captured Beautifully
              </h1>

              <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
                At Max Photo, we turn your most meaningful moments into timeless visual stories. From intimate church weddings to grand celebrations, our work blends emotion, artistry, and precision.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="px-10 py-4 bg-primary text-white rounded-full font-bold text-sm hover:bg-secondary transition-all shadow-lg active:scale-95 flex items-center gap-2"
                >
                  Check My Date
                  <span className="text-xs">→</span>
                </Link>
                <Link
                  href="/films"
                  className="px-10 py-4 bg-white text-primary border border-slate-200 rounded-full font-bold text-sm hover:bg-slate-50 transition-all active:scale-95"
                >
                  View Our Films
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-primary leading-tight">
                  Your wedding deserves more than pictures. It deserves a story.
                </h2>
                <p className="text-base md:text-lg text-slate-500 leading-relaxed font-light">
                  Max Photo specializes in cinematic wedding photography and films for couples who want emotion, elegance, and detail in every frame. With a refined visual style and an AI-powered guest experience, we create memories that feel alive long after the celebration ends.
                </p>
                <div className="flex gap-4 items-center pt-4">
                    <div className="w-12 h-px bg-secondary"></div>
                    <span className="text-xs uppercase tracking-[0.3em] font-bold text-secondary">Premium Storytelling</span>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-12 md:col-span-7">
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative aspect-[4/5] group">
                      <Image src="/p1.webp" alt="Wedding Story" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  </div>
                  <div className="hidden md:block md:col-span-5 space-y-4">
                    <div className="rounded-[1.5rem] overflow-hidden shadow-xl aspect-square relative group">
                      <Image src="/p2.jpg" alt="Candid Moments" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="rounded-[1.5rem] overflow-hidden shadow-xl aspect-square relative group">
                      <Image src="/p3.jpg" alt="Emotional Energy" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-16 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-10 space-y-3">
              <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs block">Services Preview</span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary">What We Do Best</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                { title: "Studio Photography", icon: <Camera size={22} /> },
                { title: "Event Photography", icon: <Users size={22} /> },
                { title: "Candid Photography", icon: <Sparkles size={22} /> },
                { title: "Event Videography & Cinematography", icon: <Video size={22} /> },
                { title: "Pre-Wedding Photo Shoots", icon: <Film size={22} /> },
                { title: "Digital Album Printing", icon: <BookOpen size={22} /> },
                { title: "Collages & Blow-Ups", icon: <ImageIcon size={22} /> },
                { title: "Photo Colouring & Restoration", icon: <Palette size={22} /> },
                { title: "Personalized Gifting", icon: <Gift size={22} /> },
              ].map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group flex items-start gap-6">
                  <div className="w-12 h-12 bg-slate-50 text-secondary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-heading font-bold text-primary group-hover:text-secondary transition-colors leading-tight pt-3">
                    {service.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="lg:w-1/2 lg:order-2 space-y-6">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Why Choose Us</span>
                  <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary leading-tight">Why Couples Trust Max Photo</h2>
                </div>
                
                <div className="space-y-6">
                  {[
                    "Cinematic storytelling with a premium finish",
                    "Experienced team for weddings, events, and portraits",
                    "Elegant albums, films, and curated delivery",
                    "Modern workflow with AI-integrated guest gallery options",
                    "Based in Mumbai, created for unforgettable celebrations"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 items-center group">
                      <div className="w-8 h-8 rounded-full bg-secondary/5 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                        <CheckCircle2 size={16} />
                      </div>
                      <p className="text-base md:text-lg text-slate-600 font-medium group-hover:text-primary transition-colors">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 lg:order-1 relative p-4">
                  <div className="absolute inset-0 bg-slate-50 rounded-[3rem] translate-x-4 translate-y-4"></div>
                  <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-2xl aspect-[4/5] bg-slate-100">
                    <Image src="/p.webp" alt="Why Couples Trust Us" fill className="object-cover" />
                  </div>
                  {/* Years badge */}
                  <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20">
                    <p className="text-4xl font-heading font-extrabold text-secondary leading-none">15+</p>
                    <p className="text-[9px] uppercase tracking-widest font-bold opacity-60 mt-2">Years of Legacy</p>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="py-16 bg-primary text-white relative overflow-hidden mx-6 md:mx-12 rounded-[2.5rem] my-8">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="container mx-auto px-8 md:px-16 relative z-10">
            <div className="max-w-3xl space-y-8">
              <span className="text-secondary font-bold uppercase tracking-[0.4em] text-xs">Premium Experience</span>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight">A Premium Experience for Modern Couples</h2>
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
                From the first consultation to the final album, every part of the Max Photo journey is designed to feel seamless, personal, and elevated.
              </p>
              
              <div className="flex items-center gap-4 pt-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-secondary">
                  <Gem size={24} />
                </div>
                <div>
                   <p className="text-sm font-bold uppercase tracking-widest">Master Storytelling</p>
                   <p className="text-xs text-white/40">Excellence in every frame</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-white text-center">
             <div className="container mx-auto px-6">
                <div className="w-16 h-16 bg-secondary/5 text-secondary rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Heart size={32} />
                </div>
                <h2 className="text-3xl md:text-6xl font-heading font-extrabold text-primary mb-8 tracking-tighter leading-tight">Ready to capture your <br className="hidden md:block"/>story beautifully?</h2>
                <p className="text-base md:text-lg text-slate-500 mb-12 max-w-xl mx-auto font-light leading-relaxed">Check your date and begin your Max Photo experience today.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link href="/contact" className="px-12 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-secondary transition-all shadow-xl shadow-primary/10 active:scale-95">
                    Check Availability
                  </Link>
                  <Link href="https://wa.me/919819509546" className="px-12 py-5 bg-white text-primary border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all active:scale-95 flex items-center justify-center gap-2">
                    WhatsApp Us
                  </Link>
                </div>
             </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
