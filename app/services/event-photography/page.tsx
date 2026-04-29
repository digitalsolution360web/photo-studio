import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Play } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Professional Event Photography | Max Photo Mumbai",
   description: "Capture the energy of your events with professional photography. From corporate seminars to social celebrations in Mumbai.",
};

const videos = [
   {
      id: "M2LF7xZw1nw",
      title: "Event Highlights",
      subtitle: "Premium Coverage",
      href: "https://www.youtube.com/watch?v=M2LF7xZw1nw",
   },
   {
      id: "m01g3yWdll0",
      title: "Social Celebrations",
      subtitle: "Cinematic Moments",
      href: "https://www.youtube.com/watch?v=m01g3yWdll0",
   },
   {
      id: "FJ1lPq_RfWA",
      title: "Candid Stories",
      subtitle: "Real Emotions",
      href: "https://www.youtube.com/watch?v=FJ1lPq_RfWA",
   },
   {
      id: "zkOm2t5ac9Q",
      title: "Special Occasions",
      subtitle: "Timeless Memories",
      href: "https://www.youtube.com/watch?v=zkOm2t5ac9Q",
   },
   {
      id: "h5UJvhwLh2o",
      title: "Signature Film",
      subtitle: "Max Photo Studios",
      href: "https://www.youtube.com/watch?v=h5UJvhwLh2o",
   },
];

export default function EventPhotographyPage() {
   return (
      <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white">
         <Navbar />

         <main className="flex-grow pt-24">
            {/* Hero Section */}
            <section className="relative py-12 md:py-20 bg-[#0a0a0b] text-white">
               <div className="container mx-auto px-6 relative z-10 text-center space-y-6">
                  <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Event Photography</span>
                  <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tighter leading-tight">
                     Event <span className="text-secondary">Photography</span>
                  </h1>
                  <p className="text-sm md:text-base text-white/50 max-w-xl mx-auto font-light leading-relaxed">
                     Complete visual coverage for social events, gatherings, and special occasions.
                  </p>
               </div>
            </section>

            {/* Video Showcase Grid */}
            <section className="py-16 md:py-24 bg-white">
               <div className="container mx-auto px-6 md:px-12">
                  {/* Section Heading */}
                  <div className="text-center mb-12 space-y-3">
                     <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Watch Our Work</span>
                     <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary tracking-tighter">
                        Event Films on <span className="text-secondary">YouTube</span>
                     </h2>
                     <p className="text-slate-500 font-light max-w-lg mx-auto text-sm">
                        Relive the best moments from our event photography sessions through these cinematic showcases.
                     </p>
                  </div>

                  {/* Top 2 videos - large */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                     {videos.slice(0, 2).map((video, idx) => (
                        <div key={video.id} className="relative group rounded-[2rem] overflow-hidden aspect-video bg-slate-900 shadow-2xl border border-slate-100">
                           <Image 
                              src={idx === 0 ? "/wedding/Page.webp" : "/sam-wedding/Samford%20Weddin.webp"} 
                              alt={video.title} 
                              fill 
                              className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110" 
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
                           <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                              <Link
                                 href={video.href}
                                 target="_blank"
                                 className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,87,123,0.3)] hover:scale-110 transition-all duration-300 relative z-20"
                              >
                                 <Play fill="currentColor" size={24} className="ml-1" />
                              </Link>
                              <div className="mt-5 space-y-1 relative z-20">
                                 <h3 className="text-white text-lg md:text-xl font-heading font-extrabold tracking-tight">{video.title}</h3>
                                 <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">{video.subtitle}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>

                  {/* Bottom 3 videos */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     {videos.slice(2).map((video, idx) => (
                        <div key={video.id} className="relative group rounded-[2rem] overflow-hidden aspect-video bg-slate-900 shadow-xl border border-slate-100">
                           <Image 
                              src={idx === 0 ? "/keith-album/Keith%27s%20Communion.webp" : idx === 1 ? "/birthday/Dalreen%20Birthday.webp" : "/silver-wedding/Silver%20Wedding.webp"} 
                              alt={video.title} 
                              fill 
                              className="object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110" 
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
                           <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                              <Link
                                 href={video.href}
                                 target="_blank"
                                 className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,87,123,0.3)] hover:scale-110 transition-all duration-300 relative z-20"
                              >
                                 <Play fill="currentColor" size={20} className="ml-0.5" />
                              </Link>
                              <div className="mt-4 space-y-1 relative z-20">
                                 <h3 className="text-white text-base font-heading font-extrabold tracking-tight">{video.title}</h3>
                                 <p className="text-white/60 text-[9px] font-bold uppercase tracking-[0.2em]">{video.subtitle}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-20 text-center">
               <div className="container mx-auto px-6">
                  <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-primary mb-4 tracking-tight">Need a Professional for Your Event?</h2>
                  <p className="text-sm md:text-base text-slate-500 mb-8 max-w-lg mx-auto font-light">Check our availability and get a custom quote for your event photography needs.</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                     <Link href="/contact" className="px-10 py-4 bg-primary text-white rounded-full font-bold text-sm lg:text-base hover:bg-secondary transition-all shadow-xl shadow-primary/10">
                        Inquire Now
                     </Link>
                     <Link href="https://wa.me/919820685643" className="px-10 py-4 bg-white text-primary border border-slate-200 rounded-full font-bold text-sm lg:text-base hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                        WhatsApp Us
                     </Link>
                  </div>
               </div>
            </section>
         </main>

         <Footer />
      </div>
   );
}
