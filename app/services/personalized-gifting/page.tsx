import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Gift, CheckCircle2, Heart, Sparkles, ShoppingBag, Play } from "lucide-react";
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

            {/* YouTube Video Showcase */}


            {/* Gallery - Luxury Lookbook */}
            <section className="py-16 md:py-24 bg-white overflow-hidden">
               <div className="container mx-auto px-6 md:px-12">
                  <div className="flex flex-col items-center text-center mb-20 space-y-4">
                     <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">The Gifting Suite</span>
                     <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-primary tracking-tight">
                        Heartfelt <span className="text-secondary">Keep-sakes</span>
                     </h2>
                     <div className="w-12 h-1 bg-secondary rounded-full mt-4"></div>
                  </div>

                  <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                     {[
                        { src: "/personlized/personalized-gifting-1.webp", title: "Custom Photo Mugs & Sets", tag: "Premium Choice" },
                        { src: "/personlized/personalized-gifting-2.webp", title: "Personalized Keepsakes", tag: "Handcrafted" },
                        { src: "/personlized/personalized-gifting-3.webp", title: "Custom Photo Prints", tag: "Vivid Quality" },
                        { src: "/personlized/personalized-gifting-6.webp", title: "Gift Sets", tag: "Exclusive" },
                        { src: "/personlized/personalized-gifting-4.webp", title: "Unique Gifts", tag: "Creative" },
                        { src: "/personlized/personalized-gifting-5.webp", title: "Customized Frames", tag: "Timeless" }
                     ].map((item, i) => (
                        <div key={i} className="break-inside-avoid group relative rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 bg-white">
                           <Image 
                              src={item.src} 
                              alt={item.title} 
                              width={600} 
                              height={800} 
                              className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105" 
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              <div className="space-y-2">
                                 <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest">{item.tag}</span>
                                 <h3 className="text-white text-xl font-heading font-bold">{item.title}</h3>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>
            <section className="py-12 md:py-16 bg-white">
               <div className="container mx-auto px-6 md:px-12">
                  <div className="relative group rounded-[3rem] overflow-hidden aspect-video max-w-5xl mx-auto shadow-2xl border border-slate-100 bg-[#0a0a0b]">
                     <Image src="/personlized/personalized-gifting-6.webp" alt="Gifting Showcase" fill className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-40"></div>
                     <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                        <Link
                           href="https://youtu.be/FUZCWJPiygI?si=ujrb_dYKSLMP_OwA"
                           target="_blank"
                           className="w-20 h-20 bg-secondary text-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,87,123,0.3)] scale-100 hover:scale-110 transition-all duration-500 group/play relative z-20"
                        >
                           <Play fill="currentColor" size={32} className="ml-1" />
                        </Link>
                        <div className="mt-8 space-y-2 relative z-20">
                           <h3 className="text-white text-2xl md:text-3xl font-heading font-extrabold tracking-tight">Personalized Gifting Showcase</h3>
                           <p className="text-white/70 text-sm font-medium uppercase tracking-[0.2em]">Custom Keepsakes on YouTube</p>
                        </div>
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
