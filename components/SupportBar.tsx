"use client";

import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function SupportBar() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-[100] md:hidden px-4 pointer-events-none">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, type: "spring", damping: 20 }}
        className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden pointer-events-auto flex items-stretch h-18 border border-white/20 backdrop-blur-xl"
      >
        {/* Enquiry Section - High Impact Gradient */}
        <Link 
          href="/contact" 
          className="flex-[1.5] flex items-center gap-4 px-6 bg-gradient-to-r from-[#12141d] to-[#2a2d3e] text-white hover:to-secondary transition-all duration-500 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="flex flex-col relative z-10">
            <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-secondary mb-1">STILL CURIOUS?</span>
            <span className="text-base font-heading font-extrabold whitespace-nowrap tracking-tight">Enquiry Now</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all relative z-10 shadow-lg">
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </Link>

        {/* Action Buttons Container */}
        <div className="flex-[2] flex divide-x divide-slate-100">
          {/* WhatsApp */}
          <Link 
            href="https://wa.me/919820685643" 
            target="_blank"
            className="flex-1 flex flex-col items-center justify-center bg-white hover:bg-slate-50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#e8f9ee] flex items-center justify-center text-[#25D366] mb-1 group-hover:scale-110 transition-transform shadow-sm group-hover:shadow-[#25D366]/20">
              <MessageCircle size={20} fill="currentColor" />
            </div>
            <span className="text-[9px] font-bold text-slate-400 group-hover:text-primary uppercase tracking-widest transition-colors">WhatsApp</span>
          </Link>
          
          {/* Call */}
          <Link 
            href="tel:+919820685643" 
            className="flex-1 flex flex-col items-center justify-center bg-white hover:bg-slate-50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#fff0f3] flex items-center justify-center text-secondary mb-1 group-hover:scale-110 transition-transform shadow-sm group-hover:shadow-secondary/20">
              <Phone size={20} fill="currentColor" />
            </div>
            <span className="text-[9px] font-bold text-slate-400 group-hover:text-primary uppercase tracking-widest transition-colors">Call Now</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
