"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { CheckCircle2, Play, Camera, Film, Users, BookOpen, Star, Trophy, MapPin, Calendar } from "lucide-react";
import Link from "next/link";
import { Counter } from "@/components/Counter";

export default function WorkPage() {
   const categories = [
      {
         title: "Wedding Cinematography",
         desc: "Our narrative films blend high-end production with raw emotion, creating a cinematic legacy for your family.",
         icon: <Film />,
         img: "/wedding/Page%20wed.webp"
      },
      {
         title: "Fine Art Photography",
         desc: "Classic wedding portraiture with a modern, elegant finish. Preserving every look, touch, and tear in high definition.",
         icon: <Camera />,
         img: "/Sam.webp"
      },
      {
         title: "Candid Storytelling",
         desc: "We stay behind the scenes to capture the genuine, unscripted moments that make your celebration unique.",
         icon: <Users />,
         img: "/silver-wedding/Silver%20Wedding.webp"
      }
   ];

   const stories = [
      {
         title: "Samford Wedding Celebration",
         location: "Mumbai",
         date: "December 2023",
         img: "/Same.webp",
         tag: "Cinematic"
      },
      {
         title: "Silver Anniversary Special",
         location: "Mumbai",
         date: "November 2023",
         img: "/silver-wedding/Silver%20Wedding.webp",
         tag: "Romance"
      },
      {
         title: "Kristine's Pre-Wedding Story",
         location: "Mumbai",
         date: "January 2024",
         img: "/kristin/Kristine_Cover.webp",
         tag: "Pre-Wedding"
      }
   ];

   return (
      <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
         <Navbar />

         <main className="flex-grow pt-24">
            {/* Top Banner Section */}
            <section className="relative py-16 md:py-24 bg-[#0a0a0b] text-white overflow-hidden">
               <div className="absolute inset-0 z-0">
                  <Image 
                     src="/wedding/Page%20wed.webp" 
                     alt="Portfolio Banner" 
                     fill 
                     className="object-cover opacity-30"
                     priority
                     sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/90 via-[#0a0a0b]/60 to-[#0a0a0b]"></div>
               </div>
               
               <div className="container mx-auto px-6 relative z-10 text-center space-y-6">
                  <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Mastering The Craft</span>
                  <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tighter">
                     Our <span className="text-secondary">Work</span>
                  </h1>
                  <p className="text-sm md:text-base text-white/50 max-w-xl mx-auto font-light leading-relaxed">
                     Explore our collection of cinematic stories, candid moments, and elegant portraiture crafted over 33 years.
                  </p>
               </div>
            </section>

            {/* Work Hero */}
            <section className="py-12 md:py-16 bg-white overflow-hidden">

               <div className="container mx-auto px-6 md:px-12">
                  <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                     <div className="lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left-5 duration-1000">
                        <span className="text-secondary font-bold uppercase tracking-[0.4em] text-xs">Our Portfolio</span>
                        <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-primary leading-tight tracking-tighter">
                           The Art of <br />
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary italic-none">Visionary Capture</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-lg">
                           For over 33 years, Max Photo has been the trusted name for cinematic excellence. We don't just record events; we weave narrative experiences that last generations.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                           <Link href="/contact" className="px-10 py-4 bg-primary text-white rounded-full font-bold text-sm hover:bg-secondary transition-all shadow-xl shadow-primary/20">
                              Start Your Journey
                           </Link>
                        </div>
                     </div>

                     <div className="lg:w-1/2 relative group">
                        <div className="absolute inset-0 bg-slate-50 rounded-[4rem] translate-x-6 translate-y-6 -z-10 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-700"></div>
                        <div className="relative aspect-[21/9] md:aspect-[2.5/1] rounded-[2rem] overflow-hidden shadow-2xl bg-white border border-slate-100">
                           <Image src="/keith-album/Keith%27s%20Comm.webp" alt="Our Work" fill className="object-contain p-2 md:p-3" sizes="(max-width: 1024px) 100vw, 50vw" />

                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Categories Section */}
            <section className="py-12 bg-slate-50 border-y border-slate-100">

               <div className="container mx-auto px-6 md:px-12">
                  <div className="text-center mb-20 space-y-4">
                     <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary leading-tight">Mastering the Craft</h2>
                     <p className="text-lg text-slate-500 font-light">Diverse expertise for every visual requirement.</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                     {categories.map((cat, i) => (
                        <div key={i} className="bg-white rounded-[3.5rem] overflow-hidden border border-slate-100 shadow-sm group hover:-translate-y-3 transition-all duration-700">
                           <div className="relative h-64 overflow-hidden">
                              <Image src={cat.img} alt={cat.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" sizes="(max-width: 1024px) 100vw, 33vw" />
                              <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-secondary">
                                 {cat.icon}
                              </div>
                           </div>
                           <div className="p-10 space-y-4">
                              <h3 className="text-2xl font-heading font-extrabold text-primary leading-tight">{cat.title}</h3>
                              <p className="text-slate-500 text-sm leading-relaxed font-light">{cat.desc}</p>
                              <div className="pt-4 flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest cursor-pointer group/link">
                                 Explore Gallery <Play size={10} className="fill-secondary group-hover/link:translate-x-1 transition-transform" />
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* Featured Stories - NEW RECENT WORK CONTENT */}
            <section className="py-12 bg-white overflow-hidden">

               <div className="container mx-auto px-6 md:px-12">
                  <div className="flex justify-between items-end mb-16 gap-6">
                     <div className="space-y-4 max-w-2xl">
                        <span className="text-secondary font-bold uppercase tracking-[0.4em] text-xs">Recently Captured</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary leading-tight">Featured Wedding Stories</h2>
                     </div>
                     <Link href="/gallery" className="hidden md:flex px-8 py-3 rounded-full border border-slate-200 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                        View Full Gallery
                     </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                     {stories.map((story, i) => (
                        <div key={i} className="group cursor-pointer">
                           <div className="relative aspect-[16/10] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-8 shadow-lg">
                              <Image src={story.img} alt={story.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" sizes="(max-width: 1024px) 100vw, 33vw" />
                              <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-bold uppercase tracking-widest text-primary shadow-sm">
                                 {story.tag}
                              </div>
                           </div>
                           <div className="space-y-3 px-2">
                              <div className="flex items-center gap-2 text-slate-400 text-[10px] uppercase font-bold tracking-widest">
                                 <MapPin size={12} className="text-secondary" /> {story.location}
                              </div>
                              <h3 className="text-2xl font-heading font-extrabold text-primary leading-tight group-hover:text-secondary transition-colors line-clamp-1">{story.title}</h3>
                              <div className="flex items-center gap-2 text-slate-400 text-[10px] uppercase font-bold tracking-widest">
                                 <Calendar size={12} className="text-secondary" /> {story.date}
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* Process Section */}
            <section className="py-12 bg-slate-50 relative overflow-hidden">

               <div className="container mx-auto px-6 md:px-12">
                  <div className="flex flex-col lg:flex-row gap-24 items-center">
                     <div className="lg:w-1/2 order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-6 relative">
                           <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-[60px] pointer-events-none appearance-none"></div>
                           <div className="rounded-[2.5rem] overflow-hidden aspect-square h-80 relative shadow-2xl border-4 border-white">
                              <Image src="/jassi-album/Jessy%20Album.webp" alt="Process 1" fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
                           </div>
                           <div className="rounded-[2.5rem] overflow-hidden aspect-square h-64 mt-20 relative shadow-2xl border-4 border-white">
                              <Image src="/aeron-album/Aeronalbum.webp" alt="Process 2" fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
                           </div>
                        </div>
                     </div>

                     <div className="lg:w-1/2 order-1 lg:order-2 space-y-12">
                        <div className="space-y-4">
                           <span className="text-secondary font-bold uppercase tracking-[0.4em] text-xs">Our Process</span>
                           <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary leading-tight">Crafting Your Visual Legacy</h2>
                           <p className="text-slate-500 font-light leading-relaxed">We combine high-end technology with artistic intuition to deliver results that feel timeless.</p>
                        </div>

                        <div className="space-y-10">
                           {[
                              { t: "Pre-Production", d: "Vision discovery, location selection, and aesthetic planning sessions to align with your personal style." },
                              { t: "The Capture", d: "Our team uses multiple 4K angles and professional cinema lighting to create a cinematic atmosphere." },
                              { t: "Post-Production", d: "Meticulous color grading and AI-enhanced sorting to ensure every deliverable is a masterpiece." },
                              { t: "The Heirloom", d: "Premium album craftsmanship and secure digital delivery for a legacy that lasts forever." }
                           ].map((step, i) => (
                              <div key={i} className="flex gap-6 items-start group">
                                 <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-secondary font-bold text-base shrink-0 group-hover:bg-secondary group-hover:text-white transition-all transform group-hover:rotate-12">
                                    {i + 1}
                                 </div>
                                 <div className="space-y-2">
                                    <p className="text-xl font-heading font-bold text-primary group-hover:text-secondary transition-colors">{step.t}</p>
                                    <p className="text-sm text-slate-500 font-light leading-relaxed">{step.d}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Global Stats - NEW CONTENT */}
            <section className="py-12 bg-primary text-white overflow-hidden relative">

               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
               <div className="container mx-auto px-6 md:px-12 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                     {[
                        { label: "Successful Weddings", value: 850, suffix: "+", icon: <Star className="text-secondary" /> },
                        { label: "International Awards", value: 24, suffix: "", icon: <Trophy className="text-secondary" /> },
                        { label: "Hours of Footage", value: 5000, suffix: "+", icon: <Film className="text-secondary" /> },
                        { label: "Happy Clients", value: 2000, suffix: "+", icon: <Users className="text-secondary" /> }
                     ].map((stat, i) => (
                        <div key={i} className="space-y-4">
                           <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                              {stat.icon}
                           </div>
                           <Counter
                              from={0}
                              to={stat.value}
                              suffix={stat.suffix}
                              className="text-4xl md:text-5xl font-heading font-extrabold text-secondary tracking-tighter leading-none block"
                           />
                           <p className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-50">{stat.label}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* Trust Logos Banner */}
            <section className="py-8 bg-slate-50 border-b border-slate-100">

               <div className="container mx-auto px-6 overflow-hidden">
                  <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                     <div className="text-xl font-heading font-bold tracking-tighter">CANON CINEMA</div>
                     <div className="text-xl font-heading font-bold tracking-tighter">SONY ALPHA</div>
                     <div className="text-xl font-heading font-bold tracking-tighter">DJI DRONES</div>
                     <div className="text-xl font-heading font-bold tracking-tighter">ADOBE CLOUD</div>
                     <div className="text-xl font-heading font-bold tracking-tighter">AI GALLERY</div>
                  </div>
               </div>
            </section>

            {/* Final CTA */}
            <section className="py-12 bg-white text-center">

               <div className="container mx-auto px-6">
                  <div className="max-w-2xl mx-auto space-y-10 font-heading">
                     <h2 className="text-3xl md:text-6xl font-extrabold text-primary leading-tight tracking-tighter">Experience the Max Photo difference.</h2>
                     <Link href="/contact" className="inline-block px-14 py-6 bg-primary text-white rounded-full font-bold text-xl hover:bg-secondary transition-all shadow-2xl hover:scale-105 active:scale-95 shadow-primary/20">
                        Check Availability
                     </Link>
                  </div>
               </div>
            </section>
         </main>

         <Footer />
      </div>
   );
}
