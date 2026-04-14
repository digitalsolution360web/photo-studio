"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export function HeroSlider() {
  const slides = [
    { image: '/b1.webp' },
    { image: '/b2.webp' },
    { image: '/b3.webp' }
  ];

  return (
    <div className="relative h-[450px] md:h-[750px] w-full overflow-hidden bg-[#0a0a0b]" id="home">
      <Swiper
        spaceBetween={0}
        effect={'fade'}
        speed={1500}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, EffectFade, Pagination]}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full overflow-hidden">
              {/* Subtle Overlay to make it feel cinematic */}
              <div className="absolute inset-0 z-10 bg-black/30"></div>

              <Image
                src={slide.image}
                alt={`Max Photo Cinematic ${index + 1}`}
                fill
                className="object-cover object-center scale-105"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Small Decorative Indicator */}
      <div className="absolute bottom-8 right-12 z-20 flex items-center gap-4">
        <div className="w-12 h-px bg-white/30"></div>
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/50">Cinematic Collection</span>
      </div>
    </div>
  );
}
