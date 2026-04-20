import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import { Heart, ShieldCheck, Users, Camera, Star, Award, Sparkles, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "About Max Photo | Premium Wedding Photography & Films in Mumbai",
  description: "Learn about Max Photo, the premium cinematic brand of Max Photo Studio. Discover our legacy, vision, and commitment to timeless storytelling in Mumbai.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Luxury Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-[#0a0a0b] text-white">
           <div className="absolute inset-0 z-0">
             <Image 
                src="/b1.webp" 
                alt="Cinematic Background" 
                fill 
                className="object-cover opacity-30 scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary"></div>
           </div>
           
           <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
             <div className="flex justify-center mb-8">
                <div className="w-16 h-1 w-secondary bg-secondary rounded-full"></div>
             </div>
             <span className="text-secondary font-bold uppercase tracking-[0.5em] text-xs mb-6 block">Our Legacy & Vision</span>
             <h1 className="text-3xl md:text-5xl font-heading font-extrabold mb-8 tracking-tighter leading-tight max-w-5xl mx-auto">
               The Story Behind <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">Max Photo</span>
             </h1>
             <p className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
               Crafting memories with a cinematic eye and a Mumbai soul for over 15 years.
             </p>
           </div>
        </section>

        {/* Brand Legacy Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="relative p-2">
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"></div>
                  <div className="rounded-[3rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.15)] relative z-10 aspect-[4/5]">
                    <Image src="/p.webp" alt="Max Photo Studio Legacy" fill className="object-cover" />
                  </div>
                  {/* Stats overlay */}
                  <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-50 z-20 hidden md:block">
                     <div className="space-y-6">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                              <Award size={20} />
                           </div>
                           <div>
                              <p className="text-2xl font-bold text-primary leading-none">15+</p>
                              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Years Experience</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                              <Heart size={20} />
                           </div>
                           <div>
                              <p className="text-2xl font-bold text-primary leading-none">500+</p>
                              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Weddings Filmed</p>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 space-y-10">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-primary leading-tight">
                    Max Photo is the premium cinematic wing of Max Photo Studio, created for couples who want something more.
                  </h3>
                  <div className="h-0.5 w-20 bg-secondary/20"></div>
                </div>
                
                <div className="space-y-6 text-base md:text-lg text-slate-500 leading-relaxed font-light">
                  <p>
                    Created for couples and families who want a more modern, elegant, and story-driven photography experience, our journey has been built on trust, artistry, and consistency.
                  </p>
                  <p>
                    Max Photo represents the next chapter of that journey — a refined brand experience built for today's couples, blending timeless storytelling with a fresh visual identity and modern technology.
                  </p>
                  <p>
                    We believe every wedding has its own rhythm, emotion, and beauty. Our role is to capture it with care, creativity, and clarity, so your memories feel just as special years from now as they do today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy - Full Width Experience */}
        <section className="py-24 bg-primary relative overflow-hidden">
          {/* Subtle noise and pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          
          <div className="container mx-auto px-6 relative z-10">
             <div className="max-w-4xl mx-auto text-center space-y-8">
               <div className="flex justify-center">
                  <div className="p-4 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
                    <Sparkles size={32} className="text-secondary" />
                  </div>
               </div>
               <span className="text-secondary font-bold uppercase tracking-[0.4em] text-xs">Our Philosophy</span>
               <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white leading-tight">
                 We don't just document moments. <br className="hidden md:block" /> We preserve feeling.
               </h2>
               <p className="text-xl text-white/50 leading-relaxed font-light">
                 Every couple has a different story. Every celebration has a different soul. <br className="hidden lg:block"/> 
                 Our approach is to observe closely, direct gently, and create images and films that feel authentic, cinematic, and deeply personal.
               </p>
             </div>
          </div>
        </section>

        {/* Team Section (Added for Professional UI) */}
        <section className="py-20 bg-slate-50">
           <div className="container mx-auto px-6">
              <div className="text-center mb-16 space-y-4">
                 <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">The Experts</span>
                 <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary">A Legacy of Professionals</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                   { name: "Sanjay Pinto", role: "Chief Cinematographer", desc: "Expert in cinematic lighting and grand perspective shots.", icon: <Camera size={24} /> },
                   { name: "Shaun Pinto", role: "Creative Director", desc: "Crafting the unique narrative rhythm for every wedding.", icon: <Video className="text-primary w-6 h-6" /> }, // Adjusted icon usage
                   { name: "Wilma Pinto", role: "Operations Lead", desc: "Ensuring every client journey is smooth and personal.", icon: <Users size={24} /> }
                 ].map((member, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-primary/5 hover:-translate-y-2 transition-transform duration-500 border border-slate-100 group">
                       <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-secondary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                          {i === 1 ? <Star size={24}/> : member.icon}
                       </div>
                       <h4 className="text-xl font-heading font-extrabold text-primary mb-1">{member.name}</h4>
                       <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-4">{member.role}</p>
                       <p className="text-sm text-slate-500 font-light leading-relaxed">{member.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Brand Relationship & Foundation */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                  <div className="bg-slate-50 p-12 md:p-16 rounded-[3.5rem] space-y-8 flex flex-col justify-center border border-slate-100">
                    <div className="space-y-4">
                       <span className="text-xs font-bold text-secondary uppercase tracking-widest">Legal Identity</span>
                       <h2 className="text-3xl font-heading font-extrabold text-primary leading-tight">The Foundation</h2>
                    </div>
                    <div className="space-y-6 text-base text-slate-600 leading-relaxed font-light">
                       <p className="font-bold text-primary">Max Photo operates as an enterprise under Max Photo Studio. All billing and invoicing will be conducted in the name of Max Photo Studio.</p>
                       <p>
                         Max Photo is the premium public-facing brand you will see across our website, films, and client experience. All bookings, invoicing, and official business transactions are managed by our parent entity, Max Photo Studio.
                       </p>
                    </div>
                  </div>
                  
                  <div className="bg-primary p-12 md:p-16 rounded-[3.5rem] flex flex-col justify-center text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-white/10 transition-colors pointer-events-none">
                       <ShieldCheck size={180} />
                    </div>
                    <div className="relative z-10 space-y-8">
                       <div className="space-y-4">
                          <span className="text-secondary font-bold uppercase tracking-widest text-xs">Security & Trust</span>
                          <h2 className="text-3xl font-heading font-extrabold leading-tight">Payment Trust Line</h2>
                       </div>
                       <p className="text-white/70 font-light text-lg">
                          All bookings and invoices are issued under our parent entity, Max Photo Studio. 
                       </p>
                       <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                          <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Accepted Methods</p>
                          <p className="text-sm text-white/60">Cheque, UPI, or Bank Transfer to the official studio account only.</p>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Final Branding Banner */}
        <section className="py-12 bg-white">
           <div className="container mx-auto px-6 text-center">
              <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                 <div className="h-8 relative w-32"><Image src="/logo.jpeg" alt="Partner" fill className="object-contain" /></div>
                 <div className="h-8 relative w-32"><Image src="/logo.jpeg" alt="Partner" fill className="object-contain" /></div>
                 <div className="h-8 relative w-32"><Image src="/logo.jpeg" alt="Partner" fill className="object-contain" /></div>
                 <div className="h-8 relative w-32"><Image src="/logo.jpeg" alt="Partner" fill className="object-contain" /></div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


