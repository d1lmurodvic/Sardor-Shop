"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Container from "@/components/container/Container";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
  const [isWorkingHours, setIsWorkingHours] = useState(true);

  const images = [
    {
      src: "https://theincmagazine.com/wp-content/uploads/2022/10/The-Role-of-Technology-in-Modern-Society.jpg",
      alt: "Maak book",
      title: "Hot & Cheesy Pizza - Straight from the Oven",
    },
    {
      src: "https://cdn.prod.website-files.com/66c6c41aa72bc010740dfa38/6707cdc58cae39db409e67d4_hjklg.jpg",
      alt: "Hotdog",
      title: "Classic Hotdog - Simple, Tasty, Iconic",
    },
    {
      src: "https://theincmagazine.com/wp-content/uploads/2022/10/The-Role-of-Technology-in-Modern-Society.jpg",
      alt: "Cola",
      title: "Refreshing Cola - Perfect with Every Bite",
    },
  ];


  useEffect(() => {
    setIsClient(true);
  }, []);


  useEffect(() => {
    if (!isClient) return;

    const updateClock = () => {
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes();
      const s = now.getSeconds();

      setTime({ h, m, s });

      setIsWorkingHours(h >= 8 && h < 22);
    };

    updateClock(); 
    const interval = setInterval(updateClock, 1000); 

    return () => clearInterval(interval);
  }, [isClient]);

  if (!isClient) return null;


  const format = (n) => (n < 10 ? `0${n}` : n);

  return (
    <Container>
      <div className="w-full bg-base-300 p-2 rounded-2xl mx-auto my-4 flex gap-8">
        
        <Swiper
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          effect="fade"
          pagination={{ clickable: true }}
          navigation
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="rounded-3xl overflow-hidden shadow-xl border-2 border-info"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full md:h-[550px] flex items-start justify-start">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover brightness-90"
                />

                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute bottom-10 left-10 text-white">
                  <h2 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">
                    {item.alt}
                  </h2>
                  <p className="text-lg md:text-xl font-medium max-w-lg text-white/70">
                    {item.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

     
        <div className="items-start justify-between border-2 rounded-2xl border-info p-4 w-[60%] hidden lg:flex">
          <div>
            <p className="text-xl flex font-bold sm:text-xs">Товар дня</p>
          </div>

          <div className="mt-1">
            {isWorkingHours ? (
              <span className="countdown font-mono text-3xl text-success">
                <span style={{ "--value": time.h }}>{format(time.h)}</span>:
                <span style={{ "--value": time.m }}>{format(time.m)}</span>:
                <span style={{ "--value": time.s }}>{format(time.s)}</span>
              </span>
            ) : (
              <p className="text-xl font-bold text-error">
                Biz hozir ishlamaymiz — 08:00 dan 22:00 gacha ishlaymiz
              </p>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
