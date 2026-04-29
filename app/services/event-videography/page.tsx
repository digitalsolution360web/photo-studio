import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Video, CheckCircle2, Play, Film } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Counter } from "@/components/Counter";

export const metadata: Metadata = {
   title: "Professional Event Videography & Cinematography | Max Photo Mumbai",
   description: "Cinematic storytelling for your events. From wedding films to corporate highlights, we bring your vision to life with professional videography in Mumbai.",
};

export default function EventVideographyPage() {
   const features = [
      { title: "4K Cinematic Quality", desc: "Ultra-high-definition visuals with cinematic color grading." },
      { title: "Multi-Cam Setup", desc: "Comprehensive coverage from multiple professional angles." },
      { title: "Professional Audio", desc: "Crystal clear sound recording for speeches and atmosphere." },
      { title: "Dynamic Editing", desc: "Expert post-production that crafts a compelling narrative." }
   ];

   return (
      <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
         <Navbar />

         <main className="flex-grow pt-24">
            {/* Luxury Hero */}
            {/* YouTube Video Showcase */}
            <section className="py-12 md:py-16 bg-white">
               <div className="container mx-auto px-6 md:px-12">
                  <div className="relative group rounded-[3rem] overflow-hidden aspect-video max-w-5xl mx-auto shadow-2xl border border-slate-100 bg-[#0a0a0b]">
                     <Image src="/wedding/Page.webp" alt="Videography Showreel" fill className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-40"></div>
                     <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                        <Link
                           href="https://www.youtube.com/watch?v=mqOBsqfErlA"
                           target="_blank"
                           className="w-20 h-20 bg-secondary text-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,87,123,0.3)] scale-100 hover:scale-110 transition-all duration-500 group/play relative z-20"
                        >
                           <Play fill="currentColor" size={32} className="ml-1" />
                        </Link>
                        <div className="mt-8 space-y-2 relative z-20">
                           <h3 className="text-white text-2xl md:text-3xl font-heading font-extrabold tracking-tight">Watch Our Cinematic Showreel</h3>
                           <p className="text-white/70 text-sm font-medium uppercase tracking-[0.2em]">High-End Cinematography on YouTube</p>
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
                        <Counter from={0} to={200} suffix="+" className="text-4xl font-heading font-extrabold text-primary" />
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Films Created</p>
                     </div>
                     <div>
                        <Counter from={0} to={8} suffix="+" className="text-4xl font-heading font-extrabold text-primary" />
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Pro Filmmakers</p>
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
                  <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-primary mb-4">Bring Your Event to Life on Screen</h2>
                  <p className="text-sm text-slate-500 mb-8 max-w-lg mx-auto">Contact us for custom cinematography packages that capture the essence of your brand or celebration.</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                     <Link href="/contact" className="px-10 py-4 bg-primary text-white rounded-full font-bold text-sm hover:bg-secondary transition-all shadow-xl shadow-primary/10">
                        Get a Quote
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
