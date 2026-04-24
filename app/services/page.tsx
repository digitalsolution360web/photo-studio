import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { 
  Camera, 
  Video, 
  Film, 
  Sparkles, 
  Users, 
  BookOpen, 
  Image as ImageIcon, 
  Palette, 
  Gift,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Photography Services | Max Photo Mumbai",
  description: "Explore our full range of services from cinematic wedding films to premium album printing and photo restoration.",
};

export default function ServicesPage() {
  const allServices = [
    {
      title: "Studio Photography",
      desc: "Clean, refined portrait sessions for families, individuals, and professional needs.",
      icon: <Camera size={24} />,
      bgIcon: <Camera size={120} />,
      href: "/services/studio-photography"
    },
    {
      title: "Event Photography",
      desc: "Complete visual coverage for social events, gatherings, and special occasions.",
      icon: <Users size={24} />,
      bgIcon: <Users size={120} />,
      href: "/services/event-photography"
    },
    {
      title: "Candid Photography",
      desc: "Natural, emotionally driven moments captured without disruption.",
      icon: <Sparkles size={24} />,
      bgIcon: <Sparkles size={120} />,
      href: "/services/candid-photography"
    },
    {
      title: "Event Videography & Cinematography",
      desc: "Professional video coverage with a cinematic style and smooth storytelling.",
      icon: <Video size={24} />,
      bgIcon: <Video size={120} />,
      href: "/services/event-videography"
    },
    {
      title: "Pre-Wedding Photo Shoot",
      desc: "Stylized couple sessions designed to reflect personality, romance, and chemistry.",
      icon: <Film size={24} />,
      bgIcon: <Film size={120} />,
      href: "/services/pre-wedding"
    },
    {
      title: "Digital Album Printing",
      desc: "Premium album design and printing with elegant layouts and durable finishes.",
      icon: <BookOpen size={24} />,
      bgIcon: <BookOpen size={120} />,
      href: "/services/digital-album"
    },
    {
      title: "Collages & Blow-Ups",
      desc: "Custom wall-ready photo compositions for gifting, display, and decor.",
      icon: <ImageIcon size={24} />,
      bgIcon: <ImageIcon size={120} />,
      href: "/services/collages-blowups"
    },
    {
      title: "Photo Colouring & Restoration",
      desc: "Breathing new life into old or damaged photographs with color enhancement.",
      icon: <Palette size={24} />,
      bgIcon: <Palette size={120} />,
      href: "/services/photo-restoration"
    },
    {
      title: "Personalized Gifting",
      desc: "Thoughtful photo-based gifts created for weddings and anniversaries.",
      icon: <Gift size={24} />,
      bgIcon: <Gift size={120} />,
      href: "/services/personalized-gifting"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Luxury Hero */}
        <section className="relative py-16 md:py-24 bg-[#0a0a0b] text-white overflow-hidden">

           <div className="absolute inset-0">
             <Image 
               src="/silver-wedding/Silver%20Wedding.webp" 
               alt="Services Hero" 
               fill 
               className="object-cover opacity-30" 
               sizes="100vw"
               priority
             />
             <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/80 via-[#0a0a0b] to-[#0a0a0b]"></div>
           </div>
           
           <div className="container mx-auto px-6 relative z-10 text-center">
              <span className="text-secondary font-bold uppercase tracking-[0.6em] text-xs mb-8 block">Our Expertise</span>
              <h1 className="text-4xl md:text-7xl font-heading font-extrabold mb-8 tracking-tighter leading-tight">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">Excellence</span>
              </h1>
              <p className="text-lg md:text-2xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                From grand wedding films to fine art restoration, we deliver a full spectrum of visual services tailored for legacy.
              </p>
           </div>
        </section>

        <section className="py-12 bg-white">

           <div className="container mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {allServices.map((service, i) => (
                    <Link 
                      key={i} 
                      href={service.href}
                      className="group relative bg-white p-8 rounded-[2rem] border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 hover:border-secondary/20 hover:-translate-y-2 overflow-hidden flex flex-col items-start gap-6 shadow-sm"
                    >
                        
                        <div className="flex justify-between items-start w-full relative z-10">
                           <div className="w-12 h-12 bg-slate-50 text-secondary rounded-xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500">
                              {service.icon}
                           </div>
                           <span className="text-[10px] font-bold text-slate-200 group-hover:text-secondary transition-colors duration-500">
                              {String(i + 1).padStart(2, '0')}
                           </span>
                        </div>
                        
                        <div className="space-y-3 relative z-10">
                           <h3 className="text-xl font-heading font-extrabold text-primary leading-tight group-hover:text-secondary transition-colors duration-500">
                             {service.title}
                           </h3>
                           <p className="text-slate-500 text-sm leading-relaxed font-light">
                             {service.desc}
                           </p>
                        </div>

                        <div className="pt-2 w-full relative z-10">
                           <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 group-hover:text-primary transition-all flex items-center gap-2">
                              {service.href !== "/services" ? "View Details" : "Inquire Now"} <ArrowUpRight size={12} />
                           </div>
                        </div>
                        
                        {/* Bottom highlight bar */}
                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary group-hover:w-full transition-all duration-700"></div>
                    </Link>
                 ))}
              </div>
           </div>
        </section>

        {/* Closing CTA */}
        <section className="py-12 bg-primary text-white text-center mx-6 md:mx-12 rounded-[3.5rem] mb-8 relative overflow-hidden">

           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
           <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tighter">Ready to capture your story?</h2>
              <p className="text-lg text-white/50 max-w-xl mx-auto font-light leading-relaxed">Book a consultation session to discuss your vision and get a tailored proposal.</p>
              <div className="pt-4">
                 <Link href="/contact" className="px-12 py-5 bg-secondary text-white rounded-full font-extrabold text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all inline-block">
                    Inquire Online
                 </Link>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
