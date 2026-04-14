import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import { QrCode, BookOpen, Users, Sparkles, CheckCircle2, Gem, Cpu, Aperture, Layers } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Max Photo Experience | Premium Wedding Photography in Mumbai",
  description: "Explore the Max Photo experience with cinematic storytelling, AI-powered guest galleries, luxury albums, and a professional multi-person wedding team.",
};

export default function ExperiencePage() {
  const experiences = [
    {
      title: "AI-Powered Guest Gallery",
      subtitle: "A smarter way to share memories",
      desc: "Guests can scan and view selected moments through a modern digital gallery experience, making it easier to relive and share memories after the event. Our AI technology identifies guests across the gallery, giving them instant access to their own beautiful moments from your big day.",
      image: "/p1.webp",
      icon: <Cpu size={24} />,
      color: "text-secondary",
      bg: "bg-[#f8f9fb]", // Custom soft blue-slate
      border: "border-slate-100"
    },
    {
      title: "The Heirloom Album",
      subtitle: "Designed to last for generations",
      desc: "Our albums are created as keepsakes — elegant, high-quality, and carefully arranged to tell the story of your day in a beautiful visual sequence. From Italian leather bindings to museum-grade paper, every detail is chosen for longevity and style.",
      image: "/p.webp",
      icon: <BookOpen size={20} />,
      color: "text-primary",
      bg: "bg-white",
      border: "border-transparent"
    },
    {
      title: "A Dedicated Team",
      subtitle: "Every detail is covered",
      desc: "Depending on the event, our team may include photographers, cinematographers, candid specialists, lighting support, and editing professionals to ensure a smooth and complete coverage experience.",
      image: "/p2.jpg",
      icon: <Users size={24} />,
      color: "text-secondary",
      bg: "bg-[#f4f7f6]", // Custom soft green-slate
      border: "border-[#e0ece9]"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Experience Hero */}
        <section className="relative py-20 md:py-32 bg-[#0a0a0b] text-white overflow-hidden">
          <div className="absolute inset-0">
             <Image src="/b1.webp" alt="Background" fill className="object-cover opacity-20 scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent"></div>
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <span className="text-secondary font-bold uppercase tracking-[0.5em] text-xs">The Craftsmanship</span>
              <h1 className="text-3xl md:text-5xl font-heading font-extrabold mb-8 tracking-tighter leading-tight">
                The Experience <br /> Behind the Story
              </h1>
              <p className="text-lg md:text-2xl text-white/50 font-light leading-relaxed mb-6">
                At Max Photo, experience means more than good photography. It means a thoughtful process, a professional team, and a final result that feels polished from start to finish.
              </p>
              <div className="flex justify-center">
                 <div className="px-8 py-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-4 group hover:bg-white transition-all duration-500">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-colors">
                       <Sparkles size={20} />
                    </div>
                    <p className="text-sm font-bold text-white group-hover:text-primary uppercase tracking-widest ">Modern Luxury Workflow</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Copy Full Wide */}
        <section className="py-20 bg-white border-b border-slate-50">
           <div className="container mx-auto px-6 text-center">
              <p className="text-xl md:text-2xl text-primary max-w-4xl mx-auto font-light leading-relaxed">
                 We combine artistic direction, modern workflow, and premium presentation to deliver a complete visual journey for our clients.
              </p>
           </div>
        </section>

        {/* Experience Alternating Sections with unique BGs */}
        <section className="space-y-0">
          {experiences.map((exp, i) => (
            <div key={i} className={`py-20 md:py-32 border-b last:border-b-0 ${exp.bg} ${exp.border} relative overflow-hidden`}>
              {/* Subtle background decoration unique to each section */}
              {i === 0 && <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>}
              {i === 2 && <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>}

              <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className={`flex flex-col items-center gap-12 lg:gap-24 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="lg:w-1/2">
                    <div className="relative group p-2">
                       <div className="absolute inset-0 bg-slate-200/50 rounded-[3rem] blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                       <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] bg-white">
                          <Image src={exp.image} alt={exp.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                       </div>
                       <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center p-6 border border-slate-50 z-20 hidden md:flex">
                          <div className={exp.color}>{exp.icon}</div>
                       </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 space-y-8">
                     <div className="flex items-center gap-5">
                         <span className="text-xs font-bold text-slate-300 uppercase tracking-[0.4em]">Section 0{i+1}</span>
                        <div className="h-[1px] w-12 bg-slate-200"></div>
                     </div>
                     <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary leading-tight">
                           {exp.title}
                        </h2>
                        <p className={`text-xl font-bold ${exp.color}`}>{exp.subtitle}</p>
                     </div>
                     <p className="text-base md:text-lg text-slate-500 leading-relaxed font-light">
                        {exp.desc}
                     </p>
                     <div className="flex items-center gap-4 pt-4">
                        <div className="flex -space-x-2">
                           {[1,2,3].map(n => <div key={n} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center">
                              <CheckCircle2 size={12} className="text-secondary" />
                           </div>)}
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Premium Standards Included</span>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Section 4: Creative Direction - Dark Cinema CTA */}
        <section className="py-24 bg-[#0a0a0b] text-white relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0">
             <Image src="/b3.webp" alt="Creative Direction" fill className="object-cover opacity-10" />
             <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-80"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="lg:w-7/12 space-y-8">
                  <div className="inline-flex items-center gap-4 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                    <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Director's Commitment</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight leading-tight">
                     Creative Direction: <br />
                     We guide, <span className="text-secondary">not interrupt.</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-light italic-none">
                     We keep the process natural and comfortable while still ensuring every important moment, expression, and detail is captured beautifully.
                  </p>
               </div>
               
               <div className="lg:w-5/12 flex justify-center">
                  <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 w-full max-w-md text-center space-y-8">
                     <p className="text-sm uppercase tracking-[0.2em] text-white/40">Ready to begin?</p>
                     <p className="text-lg font-bold">Start your personalized Max Photo experience today.</p>
                     <Link href="/contact" className="block w-full px-12 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-secondary hover:text-white transition-all shadow-2xl active:scale-95 group">
                       Contact Our Lead Team
                     </Link>
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
