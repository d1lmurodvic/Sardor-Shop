"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Container from "@/components/container/Container";
import About from "./about/page";
import Products from "./products/page";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
  const [isWorkingHours, setIsWorkingHours] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Salom! Sizga qanday yordam bera olaman?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");

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

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Rahmat! Tez orada javob beramiz.", sender: "bot" }]);
      }, 1000);
    }
  };

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

        <div className=" justify-between border-2 rounded-2xl border-info p-4 w-[60%] hidden lg:flex">
          <div>
            <p className="text-xs  flex font-bold pt-2 text-warning">Ishlavommizayu:</p>
          </div>

          <div className="mt-1">
            {isWorkingHours ? (
              <span className="countdown font-mono text-xl text-success">
                <span style={{ "--value": time.h }}>{format(time.h)}</span>:
                <span style={{ "--value": time.m }}>{format(time.m)}</span>:
                <span style={{ "--value": time.s }}>{format(time.s)}</span>
              </span>
            ) : (
              <p className="text-xs font-bold text-error mt-1">
                Biz hozir ishlamaymiz
              </p>
            )}
          </div>
        </div>
      </div>

      <div>
        <About/>
      </div>
      <div>
        <Products/>
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="btn btn-circle btn-info btn-lg shadow-lg hover:scale-110 transition-transform"
        >
          {isChatOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          )}
        </button>
      </div>

      {/* Chat Dropdown */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-base-200 rounded-3xl shadow-2xl z-50 border-2 border-info overflow-hidden">
          <div className="bg-info text-info-content p-4 flex items-center justify-between">
            <h3 className="font-bold text-lg">Yordam markazi</h3>
            <div className="badge badge-success badge-sm">Online</div>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-3 bg-base-100">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat ${msg.sender === "user" ? "chat-end" : "chat-start"}`}>
                <div className={`chat-bubble ${msg.sender === "user" ? "chat-bubble-info" : "chat-bubble-accent"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-base-200 border-t border-info/30">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Xabar yozing..."
                className="input input-bordered input-info w-full"
              />
              <button onClick={handleSendMessage} className="btn btn-info btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}