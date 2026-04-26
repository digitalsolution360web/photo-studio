import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Palette, CheckCircle2, History, Wand2, Shield } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Counter } from "@/components/Counter";

export const metadata: Metadata = {
  title: "Photo Colouring & Restoration | Max Photo Mumbai",
  description: "Restore old, damaged, or black-and-white photographs. Professional color enhancement and restoration services to preserve your family's legacy.",
};

export default function PhotoRestorationPage() {
  const features = [
    { title: "Advanced Restoration", desc: "Repairing scratches, tears, and water damage with precision." },
    { title: "Realistic Colouring", desc: "Adding natural, historically accurate colors to B&W photos." },
    { title: "Detail Enhancement", desc: "Sharpening blurred details and improving overall image clarity." },
    { title: "Digital Archiving", desc: "Preserving your restored photos in high-resolution digital formats." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Legacy Hero */}
        <section className="relative py-12 md:py-20 bg-[#0a0a0b] text-white">
          <div className="absolute inset-0">
             <Image src="/aeron-album/Aaron%20Album%60_Page_024.jpg" alt="Restoration Hero" fill className="object-cover opacity-20" priority />
             <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/80 via-[#0a0a0b] to-[#0a0a0b]"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center space-y-6">
             <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Photo Restoration & Colouring</span>
             <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tighter">
                Photo Colouring & <span className="text-secondary">Restoration</span>
             </h1>
             <p className="text-sm md:text-base text-white/50 max-w-xl mx-auto font-light leading-relaxed">
                Breathing new life into old or damaged photographs with color enhancement.
              </p>
          </div>
        </section>

        {/* Gallery - Cinematic History Gallery */}
        <section className="py-16 md:py-24 bg-[#fafafa] overflow-hidden">
           <div className="container mx-auto px-6 md:px-12">
              <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                 <div className="md:w-1/2 space-y-4">
                    <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">The Restoration Archive</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary tracking-tight leading-tight">
                       Preserving <span className="text-secondary italic">Legacies</span>
                    </h2>
                 </div>
                 <div className="md:w-1/2">
                    <p className="text-slate-500 font-light leading-relaxed max-w-md">Our specialized process combines historical accuracy with modern digital artistry to bring your most precious memories back to life.</p>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                 {/* Main Story Item */}
                 <div className="md:col-span-2 group relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/50 aspect-[4/3] md:aspect-auto md:h-[500px]">
                    <Image src="/coloursing/Colouring-restoration-1.webp" alt="Master Restoration" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                       <h3 className="text-white text-2xl font-heading font-bold mb-2">Master Color Reconstruction</h3>
                       <p className="text-white/70 text-sm">Historically accurate colorization process.</p>
                    </div>
                 </div>

                 {/* Side Item */}
                 <div className="group relative rounded-[2.5rem] overflow-hidden shadow-xl border border-white/50 aspect-square md:aspect-auto">
                    <Image src="/aeron-album/Aeron%20Album.webp" alt="Restoration 1" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>

                 {/* Bottom Row */}
                 <div className="group relative rounded-[2.5rem] overflow-hidden shadow-xl border border-white/50 aspect-square">
                    <Image src="/coloursing/Colouring-restoration-2.webp" alt="Restoration 2" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>
                 <div className="group relative rounded-[2.5rem] overflow-hidden shadow-xl border border-white/50 aspect-square">
                    <Image src="/aeron-album/Aeronalbum.webp" alt="Restoration 3" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>
                 <div className="group relative rounded-[2.5rem] overflow-hidden shadow-xl border border-white/50 aspect-square">
                    <Image src="/coloursing/Colouring-restoration-3.webp" alt="Restoration 4" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>

                 {/* Extra Items for Breadth */}
                 <div className="group relative rounded-[2.5rem] overflow-hidden shadow-xl border border-white/50 aspect-square">
                    <Image src="/birthday/Dalreen%20Birthda.webp" alt="Restoration 5" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>
                 <div className="group relative rounded-[2.5rem] overflow-hidden shadow-xl border border-white/50 aspect-square">
                    <Image src="/coloursing/Colouring-restoration-4.webp" alt="Restoration 6" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>
                 <div className="group relative rounded-[2.5rem] overflow-hidden shadow-xl border border-white/50 aspect-square">
                    <Image src="/birthday/Dalreen%20Birthday.webp" alt="Restoration 7" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>

                 {/* Final Wide Shot */}
                 <div className="md:col-span-3 group relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/50 aspect-[21/9]">
                    <Image src="/coloursing/Colouring-restoration-5.webp" alt="Restoration Wide" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                 </div>
              </div>
           </div>
        </section>

        {/* Features & Stats */}

        {/* Features & Stats */}
        <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100">
           <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 flex gap-8 justify-center md:justify-start">
                 <div>
                    <Counter from={0} to={2000} suffix="+" className="text-4xl font-heading font-extrabold text-primary" />
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Photos Restored</p>
                 </div>
                 <div>
                    <Counter from={0} to={25} suffix="+" className="text-4xl font-heading font-extrabold text-primary" />
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Years Mastery</p>
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
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-primary mb-4">Preserve Your Family Legacy</h2>
              <p className="text-sm text-slate-500 mb-8 max-w-lg mx-auto">Don't let your memories fade away. Bring your old photographs to us for a professional restoration consultation.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Link href="/contact" className="px-10 py-4 bg-primary text-white rounded-full font-bold text-sm hover:bg-secondary transition-all shadow-xl shadow-primary/10">
                    Get an Estimate
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
