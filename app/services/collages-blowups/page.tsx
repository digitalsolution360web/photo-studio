import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Image as ImageIcon, CheckCircle2, Maximize, Layout, Frame } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Counter } from "@/components/Counter";

export const metadata: Metadata = {
  title: "Custom Collages & Photo Blow-Ups | Max Photo Mumbai",
  description: "Create stunning wall-ready photo compositions and large-scale blow-ups. Custom designs for gifting, home decor, and professional displays.",
};

export default function CollagesBlowupsPage() {
  const features = [
    { title: "Custom Layouts", desc: "Artistic collage designs that blend multiple memories seamlessly." },
    { title: "Large Format Printing", desc: "High-resolution blow-ups that maintain clarity at any size." },
    { title: "Premium Framing", desc: "Elegant framing options to complement your home or office decor." },
    { title: "Digital Enhancement", desc: "Advanced sharpening and color correction for large prints." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Artistic Hero */}
        <section className="relative py-12 md:py-20 bg-[#0a0a0b] text-white">
          <div className="absolute inset-0">
             <Image src="/col.webp" alt="Collages Hero" fill className="object-cover opacity-20" priority />
             <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/80 via-[#0a0a0b] to-[#0a0a0b]"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center space-y-6">
             <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Collages & Blow-Ups</span>
             <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tighter">
                Collages & <span className="text-secondary">Blow-Ups</span>
             </h1>
             <p className="text-sm md:text-base text-white/50 max-w-xl mx-auto font-light leading-relaxed">
                Custom wall-ready photo compositions for gifting, display, and decor.
              </p>
          </div>
        </section>

        {/* Gallery - Artistic Grid */}
        <section className="py-12 bg-white">
           <div className="container mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {/* Featured image */}
                 <div className="md:col-span-2 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
                    <Image src="/col.webp" alt="Collage Featured" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
                       <div className="flex items-center gap-3 text-white">
                          <Maximize size={20} className="text-secondary" />
                          <span className="font-bold uppercase tracking-widest text-xs">High Resolution Blow-Ups</span>
                       </div>
                    </div>
                 </div>
                 
                 {/* Side images */}
                 <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
                    <Image src="/col1.webp" alt="Collage 1" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>
                 <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
                    <Image src="/col2.webp" alt="Collage 2" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>
                 <div className="md:col-span-2 relative aspect-[16/7] rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
                    <Image src="/col3.webp" alt="Collage 3" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>
              </div>
           </div>
        </section>

        {/* Features & Stats */}
        <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100">
           <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 flex gap-8 justify-center md:justify-start">
                 <div>
                    <Counter from={0} to={1500} suffix="+" className="text-4xl font-heading font-extrabold text-primary" />
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Designs Created</p>
                 </div>
                 <div>
                    <Counter from={0} to={100} suffix="%" className="text-4xl font-heading font-extrabold text-primary" />
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Custom Built</p>
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
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-primary mb-4">Ready to Decorate Your Space?</h2>
              <p className="text-sm text-slate-500 mb-8 max-w-lg mx-auto">Get a personalized design for your collage or a stunning blow-up for your favorite portrait.</p>
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
