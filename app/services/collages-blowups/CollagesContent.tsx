"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Counter } from "@/components/Counter";

export function CollagesContent() {
   const features = [
      { title: "Custom Layouts", desc: "Artistic collage designs that blend multiple memories seamlessly." },
      { title: "Large Format Printing", desc: "High-resolution blow-ups that maintain clarity at any size." },
      { title: "Premium Framing", desc: "Elegant framing options to complement your home or office decor." },
      { title: "Digital Enhancement", desc: "Advanced sharpening and color correction for large prints." }
   ];

   const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1
         }
      }
   };

   const itemVariants: Variants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
   };

   return (
      <main className="flex-grow pt-24">
         {/* Original Artistic Hero */}
         <section className="relative py-12 md:py-20 bg-[#0a0a0b] text-white">
            <div className="absolute inset-0">
               <Image src="/Coll-blow-up/Blow-Ups5.webp" alt="Collages Hero" fill className="object-cover opacity-20" priority sizes="100vw" />
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

         {/* Gallery - Improved Premium Bento Showcase */}
         <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
               <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                  <div className="space-y-4 max-w-2xl">
                     <span className="text-secondary font-bold uppercase tracking-[0.3em] text-[10px]">Curated Portfolio</span>
                     <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary tracking-tighter leading-tight">
                        Artistic <span className="text-secondary italic">Masterpieces</span>
                     </h2>
                     <p className="text-slate-500 font-light leading-relaxed">A refined collection of custom designs and large-format blow-ups, crafted with precision and passion.</p>
                  </div>
                  <div className="hidden md:block">
                     <div className="w-24 h-px bg-slate-200"></div>
                  </div>
               </div>

               <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
               >
                  {/* Bento Layout with exactly 5 unique images */}
                  <motion.div variants={itemVariants} className="relative aspect-square rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-lg group border border-slate-100">
                     <Image src="/Coll-blow-up/Blow-Ups2.webp" alt="Art 2" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 25vw" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <span className="text-white font-bold text-[10px] uppercase tracking-widest">Detail & Clarity</span>
                     </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative aspect-square rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-lg group border border-slate-100">
                     <Image src="/Coll-blow-up/Carl%20Collage4.webp" alt="Art 3" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 25vw" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <span className="text-white font-bold text-[10px] uppercase tracking-widest">Premium Finish</span>
                     </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative  md:col-span-2 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-lg group border border-slate-100">
                     <Image src="/Coll-blow-up/Blow-Ups6.webp" alt="Art 6" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 508px) 50vw, 25vw" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <span className="text-white font-bold text-[10px] uppercase tracking-widest">Master Craft</span>
                     </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="md:col-span-2 relative aspect-video rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-lg group border border-slate-100">
                     <Image src="/Coll-blow-up/Blow-Ups5.webp" alt="Art 4" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                        <div className="space-y-1">
                           <span className="text-secondary font-bold text-[8px] uppercase tracking-widest">Signature Piece</span>
                           <h3 className="text-white text-xl font-heading font-bold">Custom Blow-Up</h3>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="md:col-span-2 relative aspect-video rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-lg group border border-slate-100">
                     <Image src="/Coll-blow-up/Blow-Ups7.webp" alt="Art 7" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                        <div className="space-y-1">
                           <span className="text-secondary font-bold text-[8px] uppercase tracking-widest">Elegant Display</span>
                           <h3 className="text-white text-xl font-heading font-bold">Photo Collage</h3>
                        </div>
                     </div>
                  </motion.div>
               </motion.div>
            </div>
         </section>

         {/* Original Features & Stats */}
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

         {/* Original CTA */}
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
   );
}
