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
  Gift 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Photography & Videography Services | Max Photo Mumbai",
  description: "Explore Max Photo services including wedding photography, candid coverage, cinematography, albums, photo restoration, collages, and personalized gifting.",
};

export default function ServicesPage() {
  const allServices = [
    {
      title: "Studio Photography",
      desc: "Clean, refined portrait sessions for families, individuals, and professional needs.",
      icon: <Camera size={24} />
    },
    {
      title: "Event Photography",
      desc: "Complete visual coverage for social events, gatherings, and special occasions.",
      icon: <Users size={24} />
    },
    {
      title: "Candid Photography",
      desc: "Natural, emotionally driven moments captured without disruption.",
      icon: <Sparkles size={24} />
    },
    {
      title: "Event Videography & Cinematography",
      desc: "Professional video coverage with a cinematic style and smooth storytelling.",
      icon: <Video size={24} />
    },
    {
      title: "Pre-Wedding Photo Shoot",
      desc: "Stylized couple sessions designed to reflect personality, romance, and chemistry.",
      icon: <Film size={24} />
    },
    {
      title: "Digital Album Printing",
      desc: "Premium album design and printing with elegant layouts and durable finishes.",
      icon: <BookOpen size={24} />
    },
    {
      title: "Collages & Blow-Ups",
      desc: "Custom wall-ready photo compositions for gifting, display, and decor.",
      icon: <ImageIcon size={24} />
    },
    {
      title: "Photo Colouring & Restoration",
      desc: "Breathing new life into old or damaged photographs with careful restoration and color enhancement.",
      icon: <Palette size={24} />
    },
    {
      title: "Personalized Gifting",
      desc: "Thoughtful photo-based gifts created for weddings, anniversaries, and celebrations.",
      icon: <Gift size={24} />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Cinematic Services Hero */}
        <section className="relative py-20 md:py-32 bg-[#0a0a0b] text-white">
           <div className="absolute inset-0 z-0">
             <Image src="/b1.webp" alt="Services" fill className="object-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-tr from-primary via-transparent to-transparent"></div>
           </div>
           
           <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
            <span className="text-secondary font-bold uppercase tracking-[0.4em] text-xs mb-6 block">What We Offer</span>
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold mb-10 tracking-tighter leading-tight">
              Our Services
            </h1>
            <p className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
              Max Photo offers a complete range of photography and visual storytelling services for weddings, events, families, and personal milestones.
            </p>
          </div>
        </section>

        {/* Services Professional Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none -translate-y-4 translate-x-4">
                     {service.icon}
                  </div>
                  
                  <div className="w-16 h-16 bg-white text-secondary rounded-[1.5rem] shadow-sm flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed font-light text-base">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action - Modern Banner */}
        <section className="py-20 bg-slate-50 border-y border-slate-100 italic-none">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-primary rounded-[3.5rem] p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
               <h2 className="text-2xl md:text-3xl font-heading font-extrabold mb-6">Need a custom photography solution?</h2>
               <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto font-light">We can tailor our services to perfectly match the unique needs of your event or project. Every grand celebration starts with a conversation.</p>
               <a href="/contact" className="inline-block px-12 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-secondary hover:text-white transition-all shadow-xl active:scale-95">
                 Get in Touch Today
               </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
