import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Camera, CheckCircle2, ArrowRight, Heart, Play } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Counter } from "@/components/Counter";

export const metadata: Metadata = {
   title: "Professional Studio Photography | Max Photo Mumbai",
   description: "Capture your legacy with professional studio photography in Mumbai. From portraits to family sessions and professional headshots.",
};

export default function StudioPhotographyPage() {
   const images = [
      { src: "/stu1.webp", alt: "Studio 1" },
      { src: "/stu.webp", alt: "Studio 2" },
      { src: "/stu3.webp", alt: "Studio 3" },
      { src: "/stud2.webp", alt: "Studio 4" }
   ];

   const features = [
      { title: "Elite Lighting", desc: "Precise control over every highlight." },
      { title: "Curated Sets", desc: "Premium backdrops for every brand." },
      { title: "Professional Posing", desc: "Expert direction for natural looks." },
      { title: "High-End Retouch", desc: "Perfect skin tones and detailing." }
   ];

   return (
      <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
         <Navbar />

         <main className="flex-grow pt-24">
            {/* Simple & Clean Hero */}
            <section className="relative py-12 md:py-20 bg-[#0a0a0b] text-white">
               <div className="absolute inset-0">
                  <Image src="/florines/Florine'scommu.webp" alt="Studio Hero" fill className="object-cover opacity-20" priority />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/80 via-[#0a0a0b] to-[#0a0a0b]"></div>
               </div>

               <div className="container mx-auto px-6 relative z-10 text-center space-y-6">
                  <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Studio Photography</span>
                  <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tighter">
                     Studio <span className="text-secondary">Photography</span>
                  </h1>
                  <p className="text-sm md:text-base text-white/50 max-w-xl mx-auto font-light leading-relaxed">
                     Clean, refined portrait sessions for families, individuals, and professional needs.
                  </p>
               </div>
            </section>

            {/* Improved Gallery - Larger Images (3 Columns) */}

            {/* YouTube Video Showcase */}
            <section className="py-12 md:py-16 bg-white">
               <div className="container mx-auto px-6 md:px-12">
                  <div className="relative group rounded-[3rem] overflow-hidden aspect-video max-w-5xl mx-auto shadow-2xl border border-slate-100 bg-[#0a0a0b]">
                     <Image src="/wedding/Page.webp" alt="Watch Studio Video" fill className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60" />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-40"></div>
                     <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                        <Link
                           href="https://youtu.be/FUZCWJPiygI?si=SnMrsnZscQnzsujp"
                           target="_blank"
                           className="w-20 h-20 bg-secondary text-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,87,123,0.3)] scale-100 hover:scale-110 transition-all duration-500 group/play relative z-20"
                        >
                           <Play fill="currentColor" size={32} className="ml-1" />
                        </Link>
                        <div className="mt-8 space-y-2 relative z-20">
                           <h3 className="text-white text-2xl md:text-3xl font-heading font-extrabold tracking-tight">Watch Our Studio Showcase</h3>
                           <p className="text-white/70 text-sm font-medium uppercase tracking-[0.2em]">Experience the Art of Portraits on YouTube</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Features & Stats - Compact */}
            <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100">
               <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
                  <div className="md:w-1/3 flex gap-8 justify-center md:justify-start">
                     <div>
                        <Counter from={0} to={10} suffix="+" className="text-4xl font-heading font-extrabold text-primary" />
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Unique Sets</p>
                     </div>
                     <div>
                        <Counter from={0} to={33} suffix="+" className="text-4xl font-heading font-extrabold text-primary" />
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Years Mastery</p>
                     </div>
                  </div>

                  <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                     {features.map((f, i) => (
                        <div key={i} className="flex gap-4 items-center bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                           <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-secondary">
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

            {/* Simple CTA */}
            <section className="py-12 md:py-20 text-center">
               <div className="container mx-auto px-6">
                  <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-primary mb-4">Ready to Capture Your Best Look?</h2>
                  <p className="text-sm text-slate-500 mb-8 max-w-lg mx-auto">Book your exclusive session today and get high-end studio portraits.</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                     <Link href="/contact" className="px-10 py-4 bg-primary text-white rounded-full font-bold text-sm hover:bg-secondary transition-all shadow-xl shadow-primary/10">
                        Check Availability
                     </Link>
                     <Link href="https://wa.me/919820685643" className="px-10 py-4 bg-white text-primary border border-slate-200 rounded-full font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
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
