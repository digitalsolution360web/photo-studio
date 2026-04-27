import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import { Play, Film, Calendar, Camera, Video, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wedding Films by Max Photo | Cinematic Event Videography in Mumbai",
  description: "Watch cinematic wedding films by Max Photo. Explore soulful wedding highlights, church ceremonies, receptions, pre-wedding stories, and cinematic event coverage.",
};

export default function FilmsPage() {
  const films = [
    {
      title: "Church Wedding Highlights",
      desc: "A graceful morning ceremony filled with emotion, family blessings, and timeless vows.",
      image: "/p1.webp",
      duration: "04:30",
      tag: "Ceremony"
    },
    {
      title: "Reception Moments",
      desc: "A vibrant evening celebration with candid laughter, speeches, dance, and unforgettable energy.",
      image: "/p2.jpg",
      duration: "03:15",
      tag: "Celebration"
    },
    {
      title: "Pre-Wedding Story",
      desc: "A beautifully directed session that captures the chemistry, style, and personality of the couple.",
      image: "/p3.jpg",
      duration: "02:45",
      tag: "Lifestyle"
    },
    {
      title: "Full Wedding Trailer",
      desc: "A cinematic summary of the day, edited to feel emotional, elegant, and memorable.",
      image: "/p4.jpg",
      duration: "05:00",
      tag: "Documentary"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Cinematic Header */}
        <section className="relative py-24 md:py-36 bg-[#0a0a0b] text-white overflow-hidden">
           <div className="absolute inset-0 z-0">
             <Image 
                src="/birthday/Dalreen%20Birthday.webp" 
                alt="Cinematography" 
                fill 
                className="object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
                sizes="100vw"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent"></div>
           </div>
           
           <div className="container mx-auto px-6 relative z-10 text-center">
             <span className="text-secondary font-bold uppercase tracking-[0.6em] text-xs mb-8 block">Cinematography Collective</span>
             <h1 className="text-3xl md:text-5xl font-heading font-extrabold mb-10 tracking-tighter leading-tight max-w-5xl mx-auto">
               Films That Let You <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">Relive the Day</span>
             </h1>
             <div className="flex justify-center gap-6 mt-12 animate-bounce">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                   <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                </div>
             </div>
           </div>
        </section>

        {/* Intro Copy Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
                A wedding film is more than a video. It is the movement, laughter, vows, tears, and energy of the day captured in a way that feels alive every time you press play.
              </p>
              <div className="p-8 md:p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100 italic-none">
                <p className="text-lg md:text-xl text-primary font-bold leading-relaxed">
                   At Max Photo, our films are crafted with a cinematic eye and edited to reflect the emotion of the celebration, not just the sequence of events.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-x-12 lg:gap-y-16">
              {films.map((film, index) => (
                <div key={index} className="group relative">
                  <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] mb-8">
                    <Image 
                      src={film.image} 
                      alt={film.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Glass Tag */}
                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] text-white z-20">
                      {film.tag}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                    
                    <div className="absolute bottom-6 left-10 flex items-center gap-3">
                        <div className="w-10 h-[1px] bg-secondary"></div>
                        <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.3em]">{film.duration} MINUTE STORY</span>
                    </div>
                  </div>
                  
                  <div className="px-6 space-y-4">
                    <h3 className="text-2xl font-heading font-extrabold text-primary group-hover:text-secondary transition-colors">
                        {film.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed font-light text-base max-w-sm">
                        {film.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing Line Section */}
            <div className="mt-20 py-20 border-t border-slate-100 text-center relative overflow-hidden rounded-[4rem] bg-slate-50/50">
              <div className="max-w-3xl mx-auto space-y-10 relative z-10 px-6">
                <div className="flex justify-center gap-2">
                   {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-secondary/30"></div>)}
                </div>
                <h2 className="text-xl md:text-2xl font-heading font-bold text-primary leading-tight">
                  Every frame is edited to feel like a memory, not just a recording.
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                   <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-secondary transition-all active:scale-95 shadow-xl">
                    <Camera size={20} />
                    Book Your Film
                  </Link>
                  <Link href="https://wa.me/919820685643" className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-primary border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
                    View Showcase
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
