import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Heart, Camera, Video, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0b] text-slate-400 pt-24 pb-12 relative overflow-hidden border-t border-white/5" id="contact">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand/About */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block">
              <div className="relative w-48 h-12 bg-white/5 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-md">
                <Image 
                  src="/logo.jpeg" 
                  alt="Max Photo Studio" 
                  fill
                  className="object-contain p-1"
                />
              </div>
            </Link>
            <p className="text-base leading-relaxed max-w-sm">
              We capture emotions, not just moments. Your cinematic wedding story, preserved with artificial intelligence and human soul.
            </p>
            <div className="flex items-center gap-5">
              {[Camera, Video, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-heading font-bold text-lg mb-8 tracking-tight">Explore</h3>
            <ul className="space-y-4 text-sm uppercase tracking-widest font-medium">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Investment'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-secondary transition-colors inline-block relative group">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Team */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-heading font-bold text-lg mb-8 tracking-tight">The Team</h3>
            <div className="space-y-6">
              {[
                { name: "Mr. Sanjay Pinto", tel: "9819509546", role: "Lead Cinematographer" },
                { name: "Mr. Shaun Pinto", tel: "7710987546", role: "Directing Photographer" },
                { name: "Mrs. Wilma Pinto", tel: "9820685643", role: "Studio Manager" }
              ].map((contact) => (
                <div key={contact.tel} className="group cursor-default">
                  <p className="text-white font-bold group-hover:text-secondary transition-colors">{contact.name}</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">{contact.role}</p>
                  <a href={`tel:${contact.tel}`} className="text-sm underline underline-offset-4 decoration-white/10 hover:decoration-secondary">+91 {contact.tel}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-heading font-bold text-lg mb-8 tracking-tight">Studio</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-secondary mt-1 shrink-0" />
                <p className="text-sm leading-relaxed max-w-[200px]">
                  Shop No.2, Saroj Apartments, Opp. Holy Spirit Hospital, Andheri (E), Mumbai - 93
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-secondary shrink-0" />
                <a href="mailto:studiojobs@maxphotostudio.in" className="text-sm hover:text-white transition-colors break-all">studiojobs@maxphotostudio.in</a>
              </div>
              <div className="pt-4 border-t border-white/5 inline-block">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={16} className="text-secondary" />
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Timings</span>
                </div>
                <p className="text-xs">Mon - Sat: 9:00 AM - 8:30 PM</p>
                <p className="text-xs text-secondary mt-1 font-bold italic">Sunday Closed</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-slate-500">
          <p>© {new Date().getFullYear()} Max Photo Studio. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <p className="flex items-center gap-2 text-white/40">
              Made with <Heart size={10} className="text-secondary fill-secondary" /> in Mumbai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
