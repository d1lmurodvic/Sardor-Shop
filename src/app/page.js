"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Container from "@/components/container/Container";

export default function Home() {
  const [counter, setCounter] = useState();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1920",
      alt: "Pizza",
      title: "Hot & Cheesy Pizza - Straight from the Oven",
    },
    {
      src: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1920",
      alt: "Hotdog",
      title: "Classic Hotdog - Simple, Tasty, Iconic",
    },
    {
      src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1920",
      alt: "Cola",
      title: "Refreshing Cola - Perfect with Every Bite",
    },
  ];

  return (
    <Container>
      <div className="w-full bg-base-300 p-2 rounded-2xl mx-auto my-4 flex gap-8">
        <Swiper
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          effect="fade"
          pagination={{ clickable: true, className: "" }}
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
        <div className="flex items-start justify-between border-2 rounded-2xl border-info p-4 w-[60%]">
          <div>
            <p className="text-xl flex font-bold ">Товар дня</p>
          </div>
          <div className="mt-1">
            <span className="countdown font-mono text-xl text-success">
              <span
                style={{ "--value": 10 } }
                aria-live="polite"
                aria-label={counter}
              >
                10
              </span>
              :
              <span
                style={{ "--value": 24 } /* as React.CSSProperties */}
                aria-live="polite"
                aria-label={counter}
              >
                24
              </span>
              :
              <span
                style={{ "--value": 59 } /* as React.CSSProperties */}
                aria-live="polite"
                aria-label={counter}
              >
                59
              </span>
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}
