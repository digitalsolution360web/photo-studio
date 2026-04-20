"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Work", href: "/work" },
    { name: "Gallery", href: "/gallery" },
    { name: "Services", href: "/services" },
    { name: "Investment", href: "/investment" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out px-4 py-6 md:px-0 ${isScrolled ? "py-3" : "py-6"
        }`}
    >
      {/* Top Gradient Overlay for readability when not scrolled */}
      {!isScrolled && (
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent -z-10 pointer-events-none transition-opacity duration-700"></div>
      )}

      <div
        className={`container mx-auto transition-all duration-500 rounded-full flex justify-between items-center ${
          isScrolled
            ? "bg-white/95 backdrop-blur-2xl shadow-[0_8px_32px_rgba(30,58,138,0.15)] border border-white/40 py-2 px-6 md:px-12"
            : "bg-transparent py-2 px-6 md:px-12"
        }`}
      >
        <Link href="/" className="flex items-center gap-4 group">
          <div className={`relative transition-all duration-500 overflow-hidden rounded-lg ${isScrolled ? "w-36 h-10" : "w-44 h-14"}`}>
            <Image
              src="/logo.jpeg"
              alt="Max Photo Studio"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3 py-2 rounded-full text-xs xl:text-sm font-bold uppercase tracking-widest transition-all duration-300 relative group ${isScrolled ? "text-primary hover:text-secondary" : "text-white hover:text-secondary"
                }`}
            >
              {link.name}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>
          ))}

          <div className="pl-6">
            <Link
              href="#contact"
              className={`px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-500 flex items-center gap-2 shadow-xl hover:scale-105 active:scale-95 ${isScrolled
                ? "bg-primary text-white hover:bg-secondary"
                : "bg-white text-primary hover:bg-secondary hover:text-white"
                }`}
            >
              <Calendar size={16} />
              Check My Date
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all ${isScrolled ? "bg-primary text-white" : "bg-white/20 text-white backdrop-blur-md"
            }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 z-[60] bg-[#0a0a0b]/95 backdrop-blur-xl flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="relative w-32 h-10">
                <Image src="/logo.jpeg" alt="Logo" fill className="object-contain" />
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-heading font-extrabold text-white hover:text-secondary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center py-5 bg-secondary text-white rounded-2xl font-bold text-lg"
              >
                Check My Date
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
