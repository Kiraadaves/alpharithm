"use client";

import { useMemo, useState, useEffect } from "react";
import "swiper/css";
import { A11y, Controller, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import {
  Analytics,
  Content,
  Customer,
  Finance,
  MarketPrediction,
} from "./cards";
import AOS from "aos";
import "aos/dist/aos.css";

import { Figtree, Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });
const figtree = Figtree({ subsets: ["latin"] });

export default function ModelsCarousel() {
  const [activeTab, setActiveTab] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
      offset: 50,
    });
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (swiper) swiper.slideToLoop(index, 600);
  };

  const tabs = useMemo(
    () => [
      { label: "Market Prediction", component: <MarketPrediction /> },
      { label: "Finance", component: <Finance /> },
      { label: "Analytics", component: <Analytics /> },
      { label: "Content Generation", component: <Content /> },
      { label: "Customer Support", component: <Customer /> },
    ],
    []
  );

  return (
    <div className="min-h-screen w-full">
      <div className="h-full py-6 md:py-12 flex flex-col items-center justify-center gap-4 md:gap-8 overflow-hidden">
        <h2
          className={`${figtree.className} mx-[2.5%] text-3xl sm:text-4xl md:text-[50px]/[62px] text-[#22263F] font-semibold tracking-[-2%] text-center`}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          AI Models tailored for your <br className="hidden md:block" />{" "}
          business needs
        </h2>

        <p
          className={`${plusJakartaSans.className} mx-[2.5%] font-medium text-[#828282] text-center text-lg md:text-[22px]/[38px] tracking-[-2%]`}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Leverage the power of AI to automate, analyze, and optimize your
          workflows.
          <br className="hidden lg:block" /> Our specialized models are designed
          to fit different business needs.
        </p>

        <div
          className="flex items-center flex-wrap justify-center p-1 md:border border-[#e4e4e7] rounded-[12px]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => handleTabClick(i)}
              className={`${
                figtree.className
              } cursor-pointer px-[14px] py-[7px] mx-3 rounded-lg transition-colors duration-200 text-sm md:text-base font-semibold ${
                activeTab === i
                  ? "bg-[#03217F] text-[#ffffff]"
                  : "text-[#A7A7A7] hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="w-[200%] mt-2" data-aos="fade-up" data-aos-delay="400">
          <Swiper
            grabCursor
            centeredSlides
            initialSlide={activeTab}
            speed={1200}
            loop
            modules={[Controller, A11y, Thumbs, Pagination]}
            onSwiper={setSwiper}
            onSlideChange={(swiper) => setActiveTab(swiper.realIndex)}
            breakpoints={{
              0: { slidesPerView: 3, spaceBetween: 8 },
              640: { slidesPerView: 3, spaceBetween: 32 },
            }}
          >
            {tabs.map((item, i) => (
              <SwiperSlide key={i} className="pt-17">
                <div
                  className={`${
                    activeTab === i ? "-mt-16" : ""
                  } transition-all duration-300 flex items-center justify-center`}
                >
                  {item.component}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
