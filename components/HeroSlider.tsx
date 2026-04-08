"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export function HeroSlider() {
  const slides = [
    { image: '/b1.webp' },
    { image: '/b2.webp' },
    { image: '/b3.webp' }
  ];

  return (
    <div className="relative h-80 md:h-[700px] w-full overflow-hidden bg-[#0a0a0b]" id="home">
      <Swiper
        spaceBetween={0}
        effect={'fade'}
        speed={2000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full overflow-hidden">
              {/* Intelligent Overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0b]/90"></div>

              <Image
                src={slide.image}
                alt={`Max Photo Cinematic ${index + 1}`}
                fill
                className="object-cover object-center animate-pulse-slow active:scale-110"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6 md:px-12 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-8 px-5 py-2.5 border border-white/20 rounded-full backdrop-blur-md bg-white/10 shadow-lg">
            Mumbai's Premier Wedding Filmmakers
          </span>

          <h1 className="text-4xl md:text-7xl lg:text-[6rem] font-heading font-extrabold max-w-6xl leading-[1] mb-8 text-white tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            Real Weddings.<br className="hidden md:block" />
            <span className="text-secondary italic font-serif opacity-95">Soulful</span> Stories.
          </h1>

          <p className="text-base md:text-xl text-white/90 mb-12 max-w-3xl font-sans font-light leading-relaxed drop-shadow-md">
            We capture the heartbeat of your celebration. From timeless wedding films to AI-powered instant delivery, your legacy starts here.
          </p>

          <div className="pointer-events-auto flex flex-col sm:flex-row gap-6">
            <Link
              href="#contact"
              className="group px-12 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-secondary hover:text-white transition-all duration-500 shadow-2xl flex items-center gap-3 active:scale-95"
            >
              Check My Date
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
        <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/40">Scroll</span>
      </div>
    </div>
  );
}
