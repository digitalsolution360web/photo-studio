import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Gift, CheckCircle2, Heart, Sparkles, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Counter } from "@/components/Counter";

export const metadata: Metadata = {
  title: "Personalized Photo Gifting | Max Photo Mumbai",
  description: "Create unique, heartfelt gifts with your favorite photographs. From custom mugs to personalized frames, discover the perfect gift for any occasion.",
};

export default function PersonalizedGiftingPage() {
  const features = [
    { title: "Unique Customization", desc: "Tailoring every gift to reflect your personal message and style." },
    { title: "High-Quality Materials", desc: "Using durable, premium materials for a lasting gifting experience." },
    { title: "Creative Design", desc: "Expert design assistance to make your photo gifts truly stand out." },
    { title: "Fast Turnaround", desc: "Efficient production and delivery for your time-sensitive gifts." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Joyful Hero */}
        <section className="relative py-12 md:py-20 bg-[#0a0a0b] text-white">
          <div className="absolute inset-0">
             <Image src="/wedding/Page%20wed.webp" alt="Gifting Hero" fill className="object-cover opacity-20" priority />
             <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/80 via-[#0a0a0b] to-[#0a0a0b]"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center space-y-6">
             <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Personalized Gifting</span>
             <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tighter">
                Personalized <span className="text-secondary">Gifting</span>
             </h1>
             <p className="text-sm md:text-base text-white/50 max-w-xl mx-auto font-light leading-relaxed">
                Thoughtful photo-based gifts created for weddings and anniversaries.
              </p>
          </div>
        </section>

        {/* Gallery - Product Showcase */}
        <section className="py-12 bg-white">
           <div className="container mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {/* Featured image */}
                 <div className="md:col-span-2 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
                    <Image src="/wedding/Page.webp" alt="Gifting Featured" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-6 left-6 z-20">
                       <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                          <Gift size={14} className="text-secondary" />
                          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Handcrafted with Love</span>
                       </div>
                    </div>
                 </div>
                 
                 {/* Side images */}
                 <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
                    <Image src="/wedding/Page_0.webp" alt="Gift Item 1" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>
                 <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
                    <Image src="/wedding/Page_00.webp" alt="Gift Item 2" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>
                 <div className="md:col-span-2 relative aspect-[16/7] rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
                    <Image src="/aeron-album/Aaron%20Album.webp" alt="Gift Item 3" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>
              </div>
           </div>
        </section>

        {/* Features & Stats */}
        <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100">
           <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 flex gap-8 justify-center md:justify-start">
                 <div>
                    <Counter from={0} to={3000} suffix="+" className="text-4xl font-heading font-extrabold text-primary" />
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Gifts Delivered</p>
                 </div>
                 <div>
                    <Counter from={0} to={50} suffix="+" className="text-4xl font-heading font-extrabold text-primary" />
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Product Types</p>
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
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-primary mb-4">Ready to Create a Special Gift?</h2>
              <p className="text-sm text-slate-500 mb-8 max-w-lg mx-auto">Explore our range of personalized gifting options and find the perfect way to say you care.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Link href="/contact" className="px-10 py-4 bg-primary text-white rounded-full font-bold text-sm hover:bg-secondary transition-all shadow-xl shadow-primary/10 flex items-center justify-center gap-2">
                    Order Now <ShoppingBag size={16} />
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
