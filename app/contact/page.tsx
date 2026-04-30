"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InquiryForm } from "@/components/InquiryForm";
import { Gem, MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Contact Hero Section */}
        <section className="relative py-24 md:py-40 bg-[#0a0a0b] text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="/wedding/Page%20wed.webp" 
              alt="Contact Banner" 
              fill 
              className="object-cover opacity-30" 
              priority 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/80 via-[#0a0a0b]/60 to-[#0a0a0b]"></div>
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-secondary font-bold uppercase tracking-[0.6em] text-xs mb-8 block">Connect With Us</span>
              <h1 className="text-4xl md:text-7xl font-heading font-extrabold mb-8 tracking-tighter leading-tight">
                Let's Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">Magic</span> Together
              </h1>
              <p className="text-lg md:text-2xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                Whether it's your wedding day or a corporate milestone, we're here to preserve your story with cinematic excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Layout */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row gap-16 items-start">

              {/* Left Column: Contact Details */}
              <div className="lg:w-1/3 space-y-12">
                <div className="space-y-8">
                  <h3 className="text-2xl font-heading font-extrabold text-primary">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-secondary shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary mb-1 uppercase tracking-widest">Studio Address</p>
                        <p className="text-slate-500 text-sm leading-relaxed">
                          Shop No. 2, Saroj Apartments,<br />
                          Opp. Holy Spirit Hospital,<br />
                          Mahakali Caves Road, Andheri (E),<br />
                          Mumbai - 400 093.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-secondary shrink-0">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary mb-1 uppercase tracking-widest">Phone</p>
                        <p className="text-slate-500 text-sm leading-relaxed">
                          +91 98206 85643
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-secondary shrink-0">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary mb-1 uppercase tracking-widest">Email</p>
                        <a href="mailto:info@maxphotostudio.in" className="text-secondary text-sm leading-relaxed hover:underline">
                          info@maxphotostudio.in
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-secondary shrink-0">
                        <Clock size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary mb-1 uppercase tracking-widest">Studio Timings</p>
                        <p className="text-slate-500 text-sm leading-relaxed">
                          Mon - Sat: 9:00 AM - 8:30 PM<br />
                          <span className="text-secondary italic font-bold">Sunday Closed</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Inquiry Form */}
              <div className="lg:w-2/3 w-full">
                <InquiryForm />
              </div>

            </div>
          </div>
        </section>

        {/* Feature Section (Premium Experience) */}
        <section className="py-12 md:py-20 bg-primary text-white relative overflow-hidden mx-4 md:mx-12 rounded-[3rem] mt-8 mb-16 shadow-2xl shadow-primary/20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="container mx-auto px-6 md:px-16 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-3/5 space-y-4 text-center lg:text-left">
                <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Premium Experience</span>
                <h2 className="text-2xl md:text-4xl font-heading font-extrabold tracking-tight leading-tight">A Premium Experience for Modern Couples</h2>
                <p className="text-base md:text-lg text-white/70 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                  From the first consultation to the final album, every part of the Max Photo journey is designed to feel seamless, personal, and elevated.
                </p>

                <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-secondary">
                    <Gem size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest">Master Storytelling</p>
                    <p className="text-[10px] text-white/40">Excellence in every frame</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 relative group self-center flex flex-col items-center mt-8 lg:mt-0">
                <div className="absolute inset-0 bg-secondary/20 rounded-[2rem] rotate-3 group-hover:rotate-6 transition-transform duration-500 -z-10"></div>
                <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 w-full max-w-[200px] md:max-w-[240px] mx-auto">
                  <Image
                    src="/event.webp"
                    alt="Event Experience"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 200px, 240px"
                  />
                </div>
                <div className="mt-6 text-center relative z-10">
                  <p className="text-[9px] md:text-[10px] font-bold text-secondary uppercase tracking-[0.4em] mb-2">Exclusive Access</p>
                  <p className="text-xs md:text-sm font-bold text-white uppercase tracking-widest leading-relaxed">
                    Get More Information Instantly <br />
                    <span className="text-white/40 font-medium text-[10px] md:text-xs">— Scan the QR Code —</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
