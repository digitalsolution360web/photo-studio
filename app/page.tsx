import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSlider } from "@/components/HeroSlider";
import {
  Camera,
  Film,
  Users,
  Sparkles,
  QrCode,
  BookOpen,
  Award,
  CheckCircle2,
  Gem,
  Star,
  Heart,
  Video,
  Play
} from "lucide-react";

export default function Home() {
  const services = [
    { title: "Cinematography", icon: <Film />, desc: "Soulful wedding films that feel like a cinematic masterpiece." },
    { title: "Candid Photography", icon: <Sparkles />, desc: "Natural, unposed moments that tell the true story." },
    { title: "AI Guest Gallery", icon: <QrCode />, desc: "Instant photo sharing for your guests via QR code." },
    { title: "Studio Portraits", icon: <Camera />, desc: "Professional studio setup for creative and classic portraits." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
      <Navbar />

      <main className="flex-grow">
        <HeroSlider />

        {/* Introduction Section */}
        <section id="about" className="py-24 bg-white ">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-secondary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-primary mb-8 leading-tight">
                We believe every wedding has a <span className="text-secondary italic">heartbeat</span>.
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light">
                Since our establishment in Mumbai, Max Photo Studio has been dedicated to preserving the most sacred moments of your life.
                We combine traditional expertise with cutting-edge AI technology to deliver an experience that is both timeless and modern.
              </p>
            </div>
          </div>
        </section>

        {/* ZIG-ZAG FEATURES SECTION */}
        <section className="pb-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 space-y-32">

            {/* Feature 1: AI Gallery */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative group">
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                  <Image src="/p1.webp" alt="AI Guest Gallery" width={800} height={600} className="w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
                </div>
                {/* Floating Element */}
                <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20 hidden md:block border border-slate-100 animate-fade-in-up">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white">
                      <QrCode size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-primary">Instant Access</p>
                      <p className="text-xs text-slate-500 font-medium tracking-tight">AI Face Recognition</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <span className="text-secondary font-bold uppercase tracking-widest text-[10px] p-2 bg-secondary/5 rounded-lg">Next-Gen Tech</span>
                <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-primary leading-tight">The Magic of <br />AI Guest Gallery</h3>
                <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                  No more waiting for months to see wedding photos. Your guests scan a unique QR code and instantly get all the photos they appear in, powered by our advanced AI face recognition.
                </p>
                <Link href="#contact" className="inline-flex items-center gap-2 text-primary font-bold group">
                  Learn how it works <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Feature 2: Cinematic Film (REVERSED) */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="lg:w-1/2 relative group">
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                  <Image src="/p.webp" alt="Cinematic Films" width={800} height={600} className="w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tl from-secondary/40 to-transparent"></div>
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 hover:scale-110 transition-transform cursor-pointer">
                      <Play fill="white" size={32} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <span className="text-secondary font-bold uppercase tracking-widest text-[10px] p-2 bg-secondary/5 rounded-lg">Master Storytelling</span>
                <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-primary leading-tight">Cinematic Films <br />With a Soul</h3>
                <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                  Our cinematography isn't just about high-resolution video; it's about the heartbeat of your wedding. We focus on the unspoken glances, the tears of joy, and the laughter.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="text-sm font-bold text-primary uppercase tracking-widest">4K Resolution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="text-sm font-bold text-primary uppercase tracking-widest">Custom Soundtrack</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Services Grid (Compact) */}
        <section id="services" className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-extrabold text-primary mb-4">Comprehensive Solutions</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">From restorations to grand blow-ups, we handle every aspect of your memory preservation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-100 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group">
                  <div className="w-14 h-14 bg-slate-50 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                    {s.icon}
                  </div>
                  <h4 className="text-xl font-heading font-bold mb-3 text-primary">{s.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section id="investment" className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <h2 className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Investment</h2>
            <h3 className="text-4xl md:text-7xl font-heading font-extrabold mb-12 tracking-tight">Preserve Your Legacy</h3>
            <div className="max-w-xl mx-auto bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-xl">
              <p className="text-2xl font-serif italic mb-2">Signature Experience</p>
              <div className="text-5xl font-bold text-secondary mb-8">₹1,75,000<span className="text-lg font-light text-white/40"> onwards</span></div>
              <ul className="space-y-4 mb-10 text-left max-w-xs mx-auto text-slate-300">
                {['Directing Photographer & Film Crew', 'Premium Heirloom Album', 'AI Guest Integration', 'Teaser & Full Length Film'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-secondary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="#contact" className="block w-full py-5 bg-white text-primary rounded-full font-bold hover:bg-secondary hover:text-white transition-all transform active:scale-95">
                Check Availability
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
