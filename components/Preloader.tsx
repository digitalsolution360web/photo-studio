"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#0a0a0b] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative"
          >
            <div className="w-24 h-24 border-2 border-white/10 rounded-full animate-spin border-t-secondary"></div>
            <div className="absolute inset-0 flex items-center justify-center font-heading font-bold text-white text-xs tracking-[0.2em] uppercase">
              Max
            </div>
          </motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold text-center px-6"
          >
            Cinematic Storytelling
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
