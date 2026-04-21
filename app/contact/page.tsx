import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Send, MessageCircle, Calendar, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Max Photo | Book Your Mumbai Wedding Photographer",
  description: "Contact Max Photo for cinematic wedding photography and films in Mumbai. Share your date and venue details to begin your visual story.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Contact Hero - High Impact */}
        <section className="relative py-24 md:py-36 bg-[#0a0a0b] text-white overflow-hidden">
           <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
           </div>
           
           <div className="container mx-auto px-6 relative z-10 text-center">
              <span className="text-secondary font-bold uppercase tracking-[0.6em] text-xs mb-8 block">Inquire Today</span>
              <h1 className="text-3xl md:text-5xl font-heading font-extrabold mb-10 tracking-tighter leading-tight max-w-5xl mx-auto">
                Let's Begin <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">Your Story</span>
              </h1>
              <p className="text-lg md:text-2xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                We would love to hear about your wedding or event. Share your details, and we will guide you through the next steps.
              </p>
           </div>
        </section>

        {/* Contact Content Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              
              {/* Left Column: Contact Cards */}
              <div className="lg:col-span-5 space-y-8 animate-in fade-in slide-in-from-left-5 duration-1000">
                <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-10">
                  <h3 className="text-2xl font-heading font-extrabold text-primary">Reach Out Directly</h3>
                  
                  <div className="space-y-8">
                    <a href="tel:9820685643" className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                        <Phone size={24} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Call or WhatsApp</p>
                        <p className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">+91 9820685643</p>
                      </div>
                    </a>

                    <a href="mailto:events@maxphotostudio.in" className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                        <Mail size={24} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Inquiry</p>
                        <p className="text-lg font-bold text-primary group-hover:text-secondary transition-colors truncate max-w-[200px] md:max-w-none">events@maxphotostudio.in</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm">
                        <MapPin size={24} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Our Studio</p>
                        <p className="text-base text-slate-600 font-light leading-relaxed">
                          Shop No. 2, Saroj Apartments, Opp. Holy Spirit Hospital, Mahakali Caves Road, Andheri (E), Mumbai - 400 093.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-200">
                     <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-4">Official WhatsApp</p>
                     <Link href="https://wa.me/919820685643" className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:shadow-lg transition-all active:scale-95">
                        <MessageCircle size={20} />
                        Message on WhatsApp
                     </Link>
                  </div>
                </div>

                {/* Trust Information */}
                <div className="p-8 rounded-[2.5rem] bg-primary text-white space-y-6 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-6 text-white/10">
                      <ShieldCheck size={100} />
                   </div>
                   <div className="relative z-10 space-y-4">
                     <h4 className="text-xl font-heading font-bold">Secure Booking</h4>
                     <p className="text-sm text-white/70 leading-relaxed font-light">
                       All bookings and invoices are issued under our parent entity, Max Photo Studio. Secure payments via UPI, Cheque, or Bank Transfer.
                     </p>
                   </div>
                </div>
              </div>

              {/* Right Column: Inquiry Form */}
              <div className="lg:col-span-7 animate-in fade-in slide-in-from-right-5 duration-1000">
                <div className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-primary/5">
                  <div className="mb-10 space-y-2">
                    <h3 className="text-2xl font-heading font-extrabold text-primary">Inquiry Form</h3>
                    <p className="text-slate-400 text-sm italic-none">Fields marked with * are required.</p>
                  </div>
                  
                  <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-extrabold text-primary ml-4">Full Name *</label>
                        <input type="text" placeholder="e.g. Rahul Sharma" className="w-full px-8 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium text-primary" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-extrabold text-primary ml-4">Phone Number *</label>
                        <input type="tel" placeholder="e.g. +91 98765 43210" className="w-full px-8 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium text-primary" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-extrabold text-primary ml-4">Event Date</label>
                        <div className="relative">
                          <input type="date" className="w-full pl-14 pr-8 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium text-primary" />
                          <Calendar size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-extrabold text-primary ml-4">Event Flow</label>
                        <select className="w-full px-8 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium text-primary appearance-none">
                          <option>Select Option</option>
                          <option>Wedding & Reception</option>
                          <option>Pre-Wedding Session</option>
                          <option>Social Event</option>
                          <option>Custom Package</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-extrabold text-primary ml-4">Details & Venue *</label>
                      <textarea rows={4} placeholder="Tell us about your celebration..." className="w-full px-8 py-6 rounded-[2rem] bg-slate-50 border-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium text-primary" required></textarea>
                    </div>

                    <button type="submit" className="w-full py-5 bg-primary text-white rounded-full font-extrabold text-lg hover:bg-secondary transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-95 group">
                      Send Inquiry
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    
                    <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest">
                       We typically respond within 12-24 hours.
                    </p>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Official Scanners Section */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
           <div className="container mx-auto px-6 md:px-12 text-center">
              <div className="max-w-3xl mx-auto space-y-4 mb-20 text-center">
                 <span className="text-secondary font-bold uppercase tracking-[0.4em] text-xs">Official Scanners</span>
                 <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary leading-tight">Fast Connect & Follow</h2>
                 <p className="text-lg text-slate-500 font-light max-w-xl mx-auto">
                    Scan these QR codes to quickly follow us on social media or connect with our support team on WhatsApp.
                 </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { name: "Facebook", img: "/sc.jpeg", color: "text-[#1877F2]", desc: "Follow our updates" },
                   { name: "YouTube", img: "/sc1.jpeg", color: "text-[#FF0000]", desc: "Watch our latest films" },
                   { name: "Instagram", img: "/sc2.jpeg", color: "text-[#E4405F]", desc: "Follow our daily story" },
                   { name: "WhatsApp", img: "/sc3.jpeg", color: "text-[#25D366]", desc: "Direct chat with team" },
                 ].map((scanner, i) => (
                   <div key={i} className="group relative bg-white p-8 rounded-[3.5rem] border border-slate-100 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2">
                       <div className="relative aspect-square mb-8 rounded-[2rem] overflow-hidden border border-slate-100 bg-white p-4 shadow-inner group-hover:scale-105 transition-transform duration-700">
                           <Image src={scanner.img} alt={scanner.name} fill className="object-contain p-2" sizes="(max-width: 768px) 100vw, 300px" />
                           <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors pointer-events-none"></div>
                       </div>
                       <div className="space-y-1">
                          <p className={`text-lg font-heading font-extrabold ${scanner.color}`}>{scanner.name}</p>
                          <p className="text-xs uppercase tracking-widest font-bold text-slate-400">{scanner.desc}</p>
                       </div>
                       
                       {/* Subtle Decoration */}
                       <div className="absolute -top-4 -right-4 w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <Send size={16} className="text-secondary" />
                       </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
