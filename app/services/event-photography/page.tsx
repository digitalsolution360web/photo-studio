import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Users, CheckCircle2, Sparkles, MapPin } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Counter } from "@/components/Counter";

export const metadata: Metadata = {
   title: "Professional Event Photography | Max Photo Mumbai",
   description: "Capture the energy of your events with professional photography. From corporate seminars to social celebrations in Mumbai.",
};

export default function EventPhotographyPage() {
   const images = [
      { src: "/eve.webp", alt: "Event 1" },
      { src: "/eve1.webp", alt: "Event 2" },
      { src: "/eve2.webp", alt: "Event 3" },
      { src: "/eve3.webp", alt: "Event 4" }
   ];

   const features = [
      { title: "Dynamic Coverage", desc: "Capturing every key moment and guest interaction." },
      { title: "Corporate Standards", desc: "Polished, professional imagery for brand legacy." },
      { title: "Fast Turnaround", desc: "Quick digital delivery for social media use." },
      { title: "Candid Excellence", desc: "Natural emotions captured without disruption." }
   ];

   return (
      <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
         <Navbar />

         <main className="flex-grow pt-24">
            {/* Clean Hero Section */}
            <section className="relative py-12 md:py-20 bg-[#0a0a0b] text-white">
               <div className="absolute inset-0">
                  <Image src="/sam-wedding/Samford%20Wed.webp" alt="Event Hero" fill className="object-cover opacity-20" priority />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/80 via-[#0a0a0b] to-[#0a0a0b]"></div>
               </div>

               <div className="container mx-auto px-6 relative z-10 text-center space-y-6">
                  <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Event Photography</span>
                  <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tighter leading-tight">
                     Event <span className="text-secondary">Photography</span>
                  </h1>
                  <p className="text-sm md:text-base text-white/50 max-w-xl mx-auto font-light leading-relaxed">
                     Complete visual coverage for social events, gatherings, and special occasions.
                  </p>
               </div>
            </section>

            {/* Gallery Grid - Matching Studio Page Style */}
            <section className="py-12 bg-white">
               <div className="container mx-auto px-6 md:px-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     {/* Main large image */}
                     <div className="md:col-span-2 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                        <Image src="/sam-wedding/Samford%20Wedd.webp" alt="Featured Event" fill className="object-cover transition-transform duration-1000 hover:scale-105" />
                     </div>

                     {/* Side images */}
                     <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                        <Image src="/Samfor.webp" alt="Event Moment" fill className="object-cover transition-transform duration-1000 hover:scale-105" />
                     </div>
                     <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                        <Image src="/Samford.webp" alt="Event Coverage" fill className="object-cover transition-transform duration-1000 hover:scale-105" />
                     </div>
                     <div className="md:col-span-2 relative aspect-[16/7] rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                        <Image src="/samfo.webp" alt="Event Atmosphere" fill className="object-cover transition-transform duration-1000 hover:scale-105" />
                     </div>
                  </div>
               </div>
            </section>

            {/* Features & Stats Section */}
            <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100">
               <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
                  <div className="md:w-1/3 flex gap-8 justify-center md:justify-start">
                     <div>
                        <Counter from={0} to={100} suffix="+" className="text-4xl font-heading font-extrabold text-primary" />
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Events covered</p>
                     </div>
                     <div>
                        <Counter from={0} to={33} suffix="+" className="text-4xl font-heading font-extrabold text-primary" />
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Years Legacy</p>
                     </div>
                  </div>

                  <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                     {features.map((f, i) => (
                        <div key={i} className="flex gap-4 items-center bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group hover:shadow-md transition-all">
                           <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
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

            {/* Event Types / Why Us Section */}
            <section className="py-16 bg-white">
               <div className="container mx-auto px-6 md:px-12">
                  <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                     <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
                        <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-primary leading-tight">Professional Standards for Every Gathering</h2>
                        <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed">
                           We understand that every event has a unique purpose—whether it&apos;s a corporate launch, an awards gala, or a private celebration. Our team is trained to be discreet yet present, ensuring no important moment goes uncaptured.
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
                           <div className="px-4 py-2 bg-slate-50 rounded-full border border-slate-100 flex items-center gap-2">
                              <Users size={14} className="text-secondary" />
                              <span className="text-[10px] font-bold uppercase tracking-widest">Corporate</span>
                           </div>
                           <div className="px-4 py-2 bg-slate-50 rounded-full border border-slate-100 flex items-center gap-2">
                              <Sparkles size={14} className="text-secondary" />
                              <span className="text-[10px] font-bold uppercase tracking-widest">Social</span>
                           </div>
                           <div className="px-4 py-2 bg-slate-50 rounded-full border border-slate-100 flex items-center gap-2">
                              <MapPin size={14} className="text-secondary" />
                              <span className="text-[10px] font-bold uppercase tracking-widest">Across Mumbai</span>
                           </div>
                        </div>
                     </div>

                     <div className="lg:w-1/2 relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] w-full">
                        <Image src="/samford-album/Samford%20Ro.webp" alt="Professional Coverage" fill className="object-cover" />
                     </div>
                  </div>
               </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-20 text-center">
               <div className="container mx-auto px-6">
                  <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-primary mb-4 tracking-tight">Need a Professional for Your Event?</h2>
                  <p className="text-sm md:text-base text-slate-500 mb- aggregation-8 max-w-lg mx-auto font-light">Check our availability and get a custom quote for your event photography needs.</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                     <Link href="/contact" className="px-10 py-4 bg-primary text-white rounded-full font-bold text-sm lg:text-base hover:bg-secondary transition-all shadow-xl shadow-primary/10">
                        Inquire Now
                     </Link>
                     <Link href="https://wa.me/919820685643" className="px-10 py-4 bg-white text-primary border border-slate-200 rounded-full font-bold text-sm lg:text-base hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
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
