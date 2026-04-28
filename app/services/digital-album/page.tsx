import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { CheckCircle2, Play } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Counter } from "@/components/Counter";

export const metadata: Metadata = {
   title: "Premium Digital Album Printing | Max Photo Mumbai",
   description: "Preserve your memories in high-end, custom-designed digital albums. Exceptional print quality and elegant layouts for your most precious moments.",
};

export default function DigitalAlbumPage() {
   const features = [
      { title: "Premium Paper", desc: "Highest quality archival paper for longevity and vibrant colors." },
      { title: "Custom Layouts", desc: "Expertly designed pages that tell your story beautifully." },
      { title: "Durable Binding", desc: "Precision binding techniques for a lifetime of durability." },
      { title: "Elegant Finishes", desc: "Luxurious covers from leather to fabric with personalized embossing." }
   ];

   return (
      <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
         <Navbar />

         <main className="flex-grow pt-24">
            {/* Heritage Hero */}
            <section className="relative py-12 md:py-20 bg-[#0a0a0b] text-white">
               <div className="absolute inset-0">
                  <Image src="/kristin/Kristine_Page_00.webp" alt="Album Hero" fill className="object-cover opacity-20" priority sizes="100vw" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/80 via-[#0a0a0b] to-[#0a0a0b]"></div>
               </div>

               <div className="container mx-auto px-6 relative z-10 text-center space-y-6">
                  <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Digital Album Printing</span>
                  <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tighter">
                     Digital Album <span className="text-secondary">Printing</span>
                  </h1>
                  <p className="text-sm md:text-base text-white/50 max-w-xl mx-auto font-light leading-relaxed">
                     Premium album design and printing with elegant layouts and durable finishes.
                  </p>
               </div>
            </section>

            {/* Gallery - Material & Design Focus */}
            <section className="py-12 bg-white">
               <div className="container mx-auto px-6 md:px-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     {/* Featured image */}
                     <div className="md:col-span-2 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
                        <Image src="/lalia-album/Lilia%20M.webp" alt="Album Featured" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent pointer-events-none"></div>
                     </div>

                     {/* Side images */}
                     <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
                        <Image src="/lalia-album/Lilia%20Maa.webp" alt="Album 1" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px" />
                     </div>
                     <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
                        <Image src="/lalia-album/Lilia%20Maam.webp" alt="Album 2" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px" />
                     </div>
                     <div className="md:col-span-2 relative aspect-[16/7] rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
                        <Image src="/lalia-album/Lilia%20Maam_Pa.webp" alt="Album 3" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px" />
                     </div>
                  </div>
               </div>
            </section>

            {/* YouTube Video Showcase */}
            <section className="py-12 md:py-16 bg-white">
               <div className="container mx-auto px-6 md:px-12">
                  <div className="relative group rounded-[3rem] overflow-hidden aspect-video max-w-5xl mx-auto shadow-2xl border border-slate-100">
                     {/* Background image */}
                     <Image src="/Rochel.webp" alt="Digital Album Video" fill className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80" sizes="(max-width: 1024px) 100vw, 1024px" />
                     {/* Dark overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                     {/* Play button + text */}
                     <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                        <Link
                           href="https://www.youtube.com/watch?v=gV7bxx1TdVY"
                           target="_blank"
                           className="w-20 h-20 bg-secondary text-white rounded-full flex items-center justify-center shadow-2xl scale-100 hover:scale-110 transition-all"
                        >
                           <Play fill="currentColor" size={32} className="ml-1" />
                        </Link>
                        <div className="mt-8 space-y-2">
                           <h3 className="text-white text-2xl md:text-3xl font-heading font-extrabold tracking-tight">Digital Album Showcase</h3>
                           <p className="text-white/70 text-sm font-medium uppercase tracking-[0.2em]">Premium Printing on YouTube</p>
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
                        <Counter from={0} to={1000} suffix="+" className="text-4xl font-heading font-extrabold text-primary" />
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Albums Printed</p>
                     </div>
                     <div>
                        <Counter from={0} to={100} suffix="%" className="text-4xl font-heading font-extrabold text-primary" />
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Satisfaction</p>
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
                  <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-primary mb-4">Hold Your Memories in Your Hands</h2>
                  <p className="text-sm text-slate-500 mb-8 max-w-lg mx-auto">Get in touch to explore our catalog of premium finishes and design options for your personal album.</p>
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
