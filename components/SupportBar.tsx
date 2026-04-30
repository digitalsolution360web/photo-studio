"use client";

import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function SupportBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden pointer-events-none">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
        className="bg-white  shadow-[0_-10px_40px_rgba(0,0,0,0.15)] overflow-hidden pointer-events-auto flex items-stretch h-20 border-t border-slate-100"
      >
        {/* Enquiry Section - High Impact Gradient */}
        <Link
          href="/contact"
          className="flex-[1.8] flex items-center gap-4 px-8 bg-[#121826] text-white hover:bg-secondary transition-all duration-500 group relative"
        >
          <div className="flex flex-col relative z-10">
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-secondary mb-1">Inquiry</span>
            <span className="text-lg font-heading font-extrabold whitespace-nowrap tracking-tight">Contact Now</span>
          </div>
          <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all shadow-lg ml-auto">
            <ArrowRight size={18} />
          </div>
        </Link>

        {/* Action Buttons Container */}
        <div className="flex-[2] flex divide-x divide-slate-50">
          {/* WhatsApp */}
          <Link
            href="https://wa.me/919820685643"
            target="_blank"
            className="flex-1 flex flex-col items-center justify-center bg-white hover:bg-slate-50 transition-colors group"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#e8f9ee] flex items-center justify-center text-[#25D366] mb-1 group-hover:scale-110 transition-transform shadow-sm">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-slate-400 group-hover:text-primary uppercase tracking-widest">WhatsApp</span>
          </Link>

          {/* Call */}
          <Link
            href="tel:+919820685643"
            className="flex-1 flex flex-col items-center justify-center bg-white hover:bg-slate-50 transition-colors group"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#fff0f3] flex items-center justify-center text-secondary mb-1 group-hover:scale-110 transition-transform shadow-sm">
              <Phone size={22} fill="currentColor" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 group-hover:text-primary uppercase tracking-widest">Call</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
