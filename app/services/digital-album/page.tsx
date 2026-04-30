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

            {/* Digital Album Showcase - Premium Grid */}
            <section className="py-12 md:py-24 bg-white">
               <div className="container mx-auto px-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-7xl mx-auto">
                     {[
                        "/digital-album/Cassandra_Page_001.webp",
                        "/digital-album/Cassandra_Page_002.webp",
                        "/digital-album/Cassandra_Page_003.webp",
                        "/digital-album/Cassandra_Page_015.webp",
                        "/digital-album/Cassandra_Page_016.webp",
                        "/digital-album/Cassandra_Page_017.webp",
                     ].map((src, idx) => (
                        <div key={idx} className="group relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 bg-[#f8f9fa] transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
                           <div className="relative w-full aspect-[16/9] md:aspect-[21/10] lg:aspect-[21/9]">
                              <Image
                                 src={src}
                                 alt={`Cassandra Album Spread ${idx + 1}`}
                                 fill
                                 className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                 sizes="(max-width: 768px) 100vw, 50vw"
                                 priority={idx < 2}
                              />
                           </div>
                           <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                        </div>
                     ))}
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
            <section className="py-12 md:py-16 text-center relative overflow-hidden">
               <div className="container mx-auto px-6 relative z-10 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-primary">Hold Your Memories in Your Hands</h2>
                  <p className="text-sm text-slate-500 max-w-lg mx-auto font-light">Explore our range of premium finishes and design options for your personal album.</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                     <Link href="/contact" className="px-10 py-3.5 bg-primary text-white rounded-full font-bold text-sm hover:bg-secondary transition-all shadow-xl shadow-primary/10">
                        Get a Quote
                     </Link>
                     <Link href="https://wa.me/919820685643" className="px-10 py-3.5 bg-white text-primary border border-slate-200 rounded-full font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
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
