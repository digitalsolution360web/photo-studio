import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
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
              src="/samford-album/Samford%20Ro.webp"
              alt="Cinematic Background"
              fill
              className="object-cover opacity-30 scale-105"
              sizes="100vw"
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
              Crafting memories with a cinematic eye and a Mumbai soul for over 33 years.
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
                    <Image 
                      src="/aeron-album/Aaron%20Album%60_Page_024.jpg" 
                      alt="Max Photo Studio Legacy" 
                      fill 
                      className="object-cover" 
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  {/* Stats overlay */}
                  <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-50 z-20 hidden md:block">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                          <Award size={20} />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-primary leading-none">33+</p>
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
                    Crafting Visual Stories That Last
                  </h3>
                  <div className="h-0.5 w-20 bg-secondary/20"></div>
                </div>

                <div className="space-y-6 text-base md:text-lg text-slate-500 leading-relaxed font-light">
                  <p>
                    Max Photo is a modern photography and visual storytelling company dedicated to capturing moments with depth, emotion, and precision.
                  </p>
                  <p>
                    Built on a passion for creativity and a commitment to excellence, Max Photo delivers high-quality visual experiences that go beyond traditional photography — blending artistic vision with technical expertise to create work that truly stands out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Defines Us */}
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
              <span className="text-secondary font-bold uppercase tracking-[0.4em] text-xs">What Defines Us</span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white leading-tight">
                At Max Photo, every project is approached with a clear intention — to create visuals that are not just seen, but felt.
              </h2>
              <div className="text-xl text-white/50 leading-relaxed font-light mx-auto max-w-2xl">
                Our work is driven by:
                <ul className="text-left space-y-4 mt-8">
                  <li className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="text-white/80 text-lg">A strong eye for detail</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="text-white/80 text-lg">A refined aesthetic approach</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="text-white/80 text-lg">A deep understanding of storytelling through visuals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary">Seamless & Professional</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">We focus on delivering a seamless and professional experience from start to finish.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Clear Communication", desc: "Keeping you informed every step of the way.", icon: <Users size={24} /> },
                { name: "Structured Execution", desc: "A smooth and organized process on your big day.", icon: <ShieldCheck size={24} /> },
                { name: "Attention to Detail", desc: "Capturing the little things that matter most.", icon: <Camera size={24} /> }
              ].map((member, i) => (
                <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-primary/5 hover:-translate-y-2 transition-transform duration-500 border border-slate-100 group text-center">
                  <div className="w-16 h-16 rounded-2xl mx-auto bg-slate-50 flex items-center justify-center text-secondary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    {member.icon}
                  </div>
                  <h4 className="text-xl font-heading font-extrabold text-primary mb-3">{member.name}</h4>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">{member.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-xl md:text-2xl font-bold text-primary max-w-3xl mx-auto leading-relaxed">
                Our goal is simple — to ensure that every client walks away with visuals that exceed expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="bg-primary p-12 md:p-20 rounded-[3.5rem] text-center text-white relative overflow-hidden group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 group-hover:text-white/10 transition-colors pointer-events-none">
                  <Star size={300} />
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="space-y-4">
                    <span className="text-secondary font-bold uppercase tracking-widest text-xs">Our Vision</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold leading-tight">
                      To become a trusted name in photography and visual storytelling by consistently delivering impactful and memorable work.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Let's Create Something Meaningful */}
        <section className="py-24 bg-slate-50 text-center">
          <div className="container mx-auto px-6">
            <div className="w-14 h-14 bg-secondary/5 text-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart size={28} />
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary mb-6 tracking-tighter leading-tight">
              Let’s Create Something <br className="hidden md:block" />Meaningful
            </h2>
            <p className="text-base md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Whether it’s a special occasion or a creative concept, we’re here to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-10 py-4 bg-primary text-white rounded-full font-bold text-base hover:bg-secondary transition-all shadow-xl shadow-primary/10 active:scale-95">
                Book Your Shoot
              </Link>
              <Link href="/work" className="px-10 py-4 bg-white text-primary border border-slate-200 rounded-full font-bold text-base hover:bg-slate-50 transition-all active:scale-95">
                View Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


