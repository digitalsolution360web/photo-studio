import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Star, Gem, Crown, Calendar, MessageCircle, FileText, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wedding Photography Packages | Max Photo Mumbai",
  description: "Explore flexible wedding photography and cinematography packages by Max Photo. Transparent pricing, premium service, and cinematic storytelling.",
};

export default function InvestmentPage() {
  const packages = [
    {
      name: "Essential",
      icon: <Star className="text-secondary" size={28} />,
      desc: "For couples who want elegant coverage with key moments captured beautifully.",
      features: [
        "Professional Photography Coverage",
        "Key Moments Storytelling",
        "High-Resolution Digital Delivery",
        "Online Private Gallery",
        "Standard Photo Selection"
      ],
      color: "bg-white",
      tag: "The Basics"
    },
    {
      name: "Signature",
      icon: <Gem className="text-secondary" size={28} />,
      desc: "Our most popular option, ideal for couples seeking a balanced premium experience with cinematic coverage and polished delivery.",
      features: [
        "Lead Photography & Candid Focus",
        "Cinematic Wedding Film Highlights",
        "Premium Heirloom Leather Album",
        "AI-Powered Guest Gallery Access",
        "Polished Digital Delivery",
        "Pre-Wedding Consultation"
      ],
      color: "bg-white shadow-[0_30px_60px_rgba(0,0,0,0.1)] border-2 border-secondary/20",
      featured: true,
      tag: "Most Popular"
    },
    {
      name: "Elite",
      icon: <Crown className="text-secondary" size={28} />,
      desc: "A complete storytelling package for weddings that need full-scale coverage, films, and premium presentation.",
      features: [
        "Multi-Person Cinematography Crew",
        "Extended Narrative Wedding Film",
        "Multiple Luxury Heirloom Albums",
        "Advanced Post-Production Experience",
        "Premium Presentation Box",
        "Priority Editing & Delivery"
      ],
      color: "bg-primary text-white",
      tag: "Grand Scale"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Luxury Hero for Investment */}
        <section className="relative py-16 md:py-24 bg-[#0a0a0b] text-white">

           <div className="absolute inset-0 z-0">
             <Image src="/birthday/Dalreenbirthday.webp" alt="Wedding Investment" fill className="object-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0b]/80 to-[#0a0a0b]"></div>
           </div>
           
           <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
            <span className="text-secondary font-bold uppercase tracking-[0.6em] text-xs mb-8 block">Bespoke Packages</span>
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold mb-10 tracking-tighter leading-tight max-w-5xl mx-auto">
              Investment in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">Your Memories</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
              Choosing the right photography team is an important part of planning your wedding. Our packages are designed to reflect the level of coverage, creative direction, and delivery experience you want.
            </p>
          </div>
        </section>

        {/* Professional Tiers Grid */}
        <section className="py-16 bg-white relative">

          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {packages.map((pkg, index) => (
                <div 
                  key={index} 
                  className={`relative p-10 md:p-12 rounded-[3.5rem] flex flex-col h-full border border-slate-100 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl ${pkg.color}`}
                >
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-slate-50/50 flex items-center justify-center text-secondary border border-slate-100">
                      {pkg.icon}
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {pkg.tag}
                    </span>
                  </div>
                  
                  <h2 className={`text-4xl font-heading font-extrabold mb-4 ${index === 2 ? 'text-white' : 'text-primary'}`}>
                    {pkg.name}
                  </h2>
                  
                  <p className={`text-base mb-10 font-light leading-relaxed min-h-[80px] ${index === 2 ? 'text-white/60' : 'text-slate-500'}`}>
                    {pkg.desc}
                  </p>
                  
                  <div className={`w-full h-[2px] mb-10 ${index === 2 ? 'bg-white/10' : 'bg-slate-100'}`}></div>
                  
                  <ul className="space-y-6 mb-12 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4 group/item">
                        <CheckCircle2 size={20} className="text-secondary shrink-0 mt-0.5" />
                        <span className={`text-sm font-medium transition-colors ${index === 2 ? 'text-white/80 group-hover/item:text-white' : 'text-slate-600 group-hover/item:text-primary'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/contact" 
                    className={`block w-full text-center py-5 rounded-full font-bold text-lg transition-all active:scale-95 shadow-xl ${
                      index === 2 
                        ? 'bg-white text-primary hover:bg-secondary hover:text-white shadow-secondary/20' 
                        : 'bg-primary text-white hover:bg-secondary shadow-primary/20'
                    }`}
                  >
                    Check Availability
                  </Link>
                </div>
              ))}
            </div>
            
            {/* High Impact Trust Section */}
            <div className="mt-32 max-w-5xl mx-auto">
               <div className="relative p-12 md:p-20 bg-slate-50 rounded-[4rem] text-center border border-slate-100 overflow-hidden shadow-2xl shadow-primary/5">
                  <div className="absolute top-0 right-0 p-12 text-primary/5 pointer-events-none">
                     <Sparkles size={200} />
                  </div>
                  <div className="relative z-10 space-y-10">
                     <div className="flex justify-center">
                        <div className="px-8 py-2 bg-secondary text-white text-[11px] font-bold uppercase tracking-[0.3em] rounded-full">Preferred Pricing</div>
                     </div>
                     <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-primary max-w-3xl mx-auto leading-tight italic-none">
                        Our wedding packages are thoughtfully designed
                     </h3>
                     <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
                        for couples seeking a premium, cinematic experience with comprehensive coverage.
                     </p>



                     
                     <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                       <Link href="https://wa.me/919820685643" className="px-16 py-6 bg-primary text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-secondary transition-all shadow-2xl hover:scale-105">
                          <FileText size={22} />
                          Request the Brochure
                       </Link>
                       <Link href="/contact" className="px-16 py-6 bg-white text-primary border border-slate-200 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-slate-50 transition-all shadow-xl">
                          <Calendar size={22} className="text-secondary" />
                          Check Availability
                       </Link>
                     </div>
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
