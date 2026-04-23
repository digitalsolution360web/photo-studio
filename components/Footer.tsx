import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Heart, Camera, Video, Globe, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0b] text-slate-400 pt-24 pb-12 relative overflow-hidden border-t border-white/5" id="contact">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 animate-in fade-in slide-in-from-bottom-5 duration-1000">

          {/* Brand/About */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block">
              <div className="relative w-64 h-20 overflow-hidden rounded-xl group transition-all duration-700">
                <Image
                  src="/logo.jpeg"
                  alt="Max Photo Studio"
                  fill
                  className="object-contain"
                  sizes="256px"
                />
              </div>
            </Link>
            <p className="text-base leading-relaxed max-w-sm">
              We capture emotions, not just moments. Your cinematic wedding story, preserved with artificial intelligence and human soul.
            </p>
            <div className="flex items-center gap-5">
              {[
                {
                  name: "Facebook",
                  href: "https://www.facebook.com/share/1Dt5dRzfGg/",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  )
                },
                {
                  name: "YouTube",
                  href: "https://youtube.com/@maxphotostudio1538?si=j_5ovGdQ14DMYPqq&cxqr=LKFunOVo-zz9i-RFlLIK55",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                  )
                },
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/studiomaxdigitalphoto?utm_source=qr&igsh=MXN5OWFuZXZwYTF5OA==",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  )
                },
                {
                  name: "WhatsApp",
                  href: "https://wa.me/919820685643",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 448 512" fill="currentColor">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 69.4 27 106 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-93.9-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.2-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5-.3-8.4 2.4-11.2 2.5-2.5 5.5-6.4 8.3-9.6 2.8-3.3 3.7-5.5 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.7 9.1 31.7 11.7 13.3 4.2 25.4 3.6 35 2.2 10.6-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                  )
                }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-heading font-bold text-lg mb-8 tracking-tight">Explore</h3>
            <ul className="space-y-4 text-sm uppercase tracking-widest font-medium">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Our Work", href: "/work" },
                { name: "Gallery", href: "/gallery" },
                { name: "Services", href: "/services" },
                { name: "Investment", href: "/investment" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-secondary transition-colors inline-block relative group text-xs">
                    {link.name}
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
                { name: "Mr. Sanjay Pinto", tel: "9820685643", role: "Lead Cinematographer" },
                { name: "Mr. Shaun Pinto", tel: "7710987546", role: "Directing Photographer" },
                { name: "Mrs. Wilma Pinto", tel: "9820685643", role: "Studio Manager" }
              ].map((contact) => (
                <div key={contact.name} className="group cursor-default">
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
                <p className="text-sm leading-relaxed max-w-[250px]">
                  Shop No. 2, Saroj Apartments, Opp. Holy Spirit Hospital, Mahakali Caves Road, Andheri (E), Mumbai - 400 093.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-secondary shrink-0" />
                <a href="mailto: info@maxphotostudio.in" className="text-sm hover:text-white transition-colors break-all"> info@maxphotostudio.in</a>
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

        {/* Legal Disclaimer */}
        {/* <div className="mb-12 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <p className="text-sm font-bold text-white mb-2 uppercase tracking-widest">Legal Identity & Payments</p>
          <p className="text-xs leading-relaxed max-w-2xl">
            Max Photo operates as an enterprise under Max Photo Studio. 
            All billing and invoicing will be conducted in the name of Max Photo Studio.
          </p>
        </div> */}

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-slate-500">
          <p>© {new Date().getFullYear()} Max Photo. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <div className="flex items-center gap-2 text-white/40">
              Made with <Heart size={10} className="text-secondary fill-secondary" /> in Mumbai
            </div>
            <a
              href="https://www.digitalsolution360.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400/70 hover:text-blue-400 transition-all duration-300 group border-l border-white/10 pl-8 ml-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400/40 group-hover:scale-125 group-hover:bg-blue-400 transition-all animate-pulse"></span>
              Design by Digital Solution 360
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
