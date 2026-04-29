import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Camera, CheckCircle2, Heart, Sparkles, Play } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Counter } from "@/components/Counter";

export const metadata: Metadata = {
   title: "Professional Candid Photography | Max Photo Mumbai",
   description: "Capturing natural, unscripted moments with an artistic touch. Experience the best candid photography in Mumbai for weddings and events.",
};

export default function CandidPhotographyPage() {
   const features = [
      { title: "Natural Storytelling", desc: "Unobtrusive coverage that captures true emotions." },
      { title: "Artistic Perspective", desc: "Creative angles that turn moments into fine art." },
      { title: "Candid Expressions", desc: "Focusing on the laughter, tears, and joy as they happen." },
      { title: "Cinematic Editing", desc: "Enhancing the mood and atmosphere of every shot." }
   ];

   return (
      <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
         <Navbar />

         <main className="flex-grow pt-24">
            {/* Luxury Hero */}
            {/* Luxury Hero */}
             <section className="relative py-12 md:py-20 bg-[#0a0a0b] text-white">
                <div className="absolute inset-0">
                   <Image src="/candid/Dalreen-Birthday-Album_Cover.webp" alt="Candid Hero" fill className="object-cover opacity-20" priority sizes="100vw" />
                   <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/80 via-[#0a0a0b] to-[#0a0a0b]"></div>
                </div>

               <div className="container mx-auto px-6 relative z-10 text-center space-y-6">
                  <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Candid Photography</span>
                  <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tighter">
                     Candid <span className="text-secondary">Photography</span>
                  </h1>
                  <p className="text-sm md:text-base text-white/50 max-w-xl mx-auto font-light leading-relaxed">
                     Natural, emotionally driven moments captured without disruption.
                  </p>
               </div>
            </section>

            {/* YouTube Video Showcase */}

            {/* Gallery - Premium Bento Showcase */}
            <section className="py-16 md:py-28 bg-white overflow-hidden">
               <div className="container mx-auto px-6 md:px-12">
                  <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                     <div className="max-w-2xl space-y-4 text-left">
                        <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Visual Storytelling</span>
                        <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-primary tracking-tighter leading-none">
                           The Art of <span className="text-secondary italic">Moments</span>
                        </h2>
                        <p className="text-slate-500 font-light text-lg">Capturing the unseen, the unscripted, and the unforgettable through an artistic lens.</p>
                     </div>
                     <div className="hidden md:block">
                        <div className="w-24 h-px bg-slate-200"></div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
                     {/* Signature Shot - Balanced Height */}
                      <div className="md:col-span-8 md:row-span-2 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border-4 border-slate-50 group">
                         <Image src="/candid/Dalreen-Birthday-Album_Page_001.webp" alt="Signature Candid" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" sizes="(max-width: 1024px) 100vw, 66vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                           <div className="space-y-1">
                              <span className="text-secondary font-bold uppercase tracking-widest text-[10px]">Featured Story</span>
                              <p className="text-white font-heading font-extrabold text-2xl tracking-tight">Emotional Legacy</p>
                           </div>
                        </div>
                     </div>

                     {/* Detail Shots */}
                      <div className="md:col-span-4 relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-slate-50 group">
                         <Image src="/candid/Dalreen-Birthday-Album_Page_002.webp" alt="Candid Detail 1" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 1024px) 50vw, 33vw" />
                     </div>
                      <div className="md:col-span-4 relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-slate-50 group">
                         <Image src="/candid/Dalreen-Birthday-Album_Page_003.webp" alt="Candid Detail 2" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 1024px) 50vw, 33vw" />
                     </div>

                     {/* Cinematic Wides */}
                      <div className="md:col-span-6 relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-slate-50 group">
                         <Image src="/candid/Dalreen-Birthday-Album_Page_004.webp" alt="Cinematic Wide 1" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 1024px) 100vw, 50vw" />
                     </div>
                      <div className="md:col-span-6 relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-slate-50 group">
                         <Image src="/candid/Dalreen-Birthday-Album_Page_005.webp" alt="Cinematic Wide 2" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 1024px) 100vw, 50vw" />
                     </div>
                  </div>
               </div>
            </section>
            <section className="py-12 md:py-16 bg-white">
               <div className="container mx-auto px-6 md:px-12">
                   <div className="relative group rounded-[3rem] overflow-hidden aspect-video max-w-5xl mx-auto shadow-2xl border border-slate-100 bg-[#0a0a0b]">
                      <Image src="/candid/Dalreen-Birthday-Album_Cover.webp" alt="Candid Video" fill className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 1024px" />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-40"></div>
                     <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                        <Link
                           href="https://www.youtube.com/watch?v=FJ1lPq_RfWA"
                           target="_blank"
                           className="w-20 h-20 bg-secondary text-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,87,123,0.3)] scale-100 hover:scale-110 transition-all duration-500 group/play relative z-20"
                        >
                           <Play fill="currentColor" size={32} className="ml-1" />
                        </Link>
                        <div className="mt-8 space-y-2 relative z-20">
                           <h3 className="text-white text-2xl md:text-3xl font-heading font-extrabold tracking-tight">Candid Photography Highlights</h3>
                           <p className="text-white/70 text-sm font-medium uppercase tracking-[0.2em]">Capturing Moments on YouTube</p>
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
                        <Counter from={0} to={500} suffix="+" className="text-4xl font-heading font-extrabold text-primary" />
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Stories Told</p>
                     </div>
                     <div>
                        <Counter from={0} to={12} suffix="+" className="text-4xl font-heading font-extrabold text-primary" />
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Years Experience</p>
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
                  <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-primary mb-4">Let Us Capture Your Real Story</h2>
                  <p className="text-sm text-slate-500 mb-8 max-w-lg mx-auto">Don't just pose. Experience your moments while we preserve them forever.</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                     <Link href="/contact" className="px-10 py-4 bg-primary text-white rounded-full font-bold text-sm hover:bg-secondary transition-all shadow-xl shadow-primary/10">
                        Book Your Session
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
