"use client";

import { useMemo, useRef, useState } from "react";
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
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

export default function ModelsCarousel() {
  const [activeTab, setActiveTab] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const tabsRef = useRef<HTMLDivElement | null>(null);

  const handleTabClick = (index: number) => {
    setActiveTab(index);

    if (swiper) {
      const currentIndex = swiper.realIndex;
      const totalSlides = swiper.slides.length;
      const diff = index - currentIndex;

      let direction;
      if (Math.abs(diff) <= totalSlides / 2) {
        direction = diff > 0;
      } else {
        direction = diff < 0;
      }

      swiper.slideToLoop(index, 600, direction);
    }
  };

  const tabs = useMemo(
    () => [
      {
        label: "Market Prediction",
        component: <MarketPrediction />,
      },
      {
        label: "Finance",
        component: <Finance />,
      },
      {
        label: "Analytics",
        component: <Analytics />,
      },
      {
        label: "Content Generation",
        component: <Content />,
      },
      {
        label: "Customer Support",
        component: <Customer />,
      },
    ],
    []
  );

  return (
    <>
      <div className="min-h-screen w-full">
        <div className="h-full py-6 md:py-12 flex flex-col items-center justify-center gap-4 md:gap-8 overflow-hidden">
          <h2 className="mx-[2.5%] text-3xl sm:text-4xl md:text-[50px]/[62px] text-[#22263F] font-semibold tracking-[-2%] text-center">
            AI Models tailored for your <br className="hidden md:block" />{" "}
            business needs
          </h2>
          <p className="mx-[2.5%] font-medium text-[#828282] text-center text-lg md:text-[22px]/[38px] tracking-[-2%] plus-jakarta">
            Leverage the power of AI to automate, analyze, and optimize your
            workflows. Our <br className="hidden lg:block" /> specialized models
            are designed are designed to fit different business needs.
          </p>

          <div
            ref={tabsRef}
            className="flex items-center flex-wrap justify-center p-1 md:border border-[#e4e4e7] rounded-[12px]"
          >
            {tabs.map((tab, i) => (
              <button
                role="tab"
                aria-label={tab.label}
                aria-selected={activeTab === i}
                aria-controls={`tabpanel-${tab.label}`}
                key={i}
                onClick={() => handleTabClick(i)}
                className={`${
                  figtree.className
                } cursor-pointer px-[14px] py-[7px] mx-3 rounded-lg transition-colors duration-200 text-sm  md:text-base font-semibold ${
                  activeTab === i
                    ? "bg-[#03217F] text-[#ffffff]"
                    : " text-[#A7A7A7] hover:bg-gray-100 transition-colors duration-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="w-[200%] mt-2">
            <Swiper
              grabCursor={true}
              centeredSlides={true}
              initialSlide={activeTab}
              speed={1200}
              loop={true}
              modules={[Controller, A11y, Thumbs, Pagination]}
              onSwiper={setSwiper}
              onSlideChange={(swiper) => {
                setActiveTab(swiper.realIndex);
              }}
              breakpoints={{
                0: { slidesPerView: 3, spaceBetween: 8 },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
            >
              {tabs.map((item, i) => (
                <SwiperSlide key={i} className={`pt-17`}>
                  <div
                    className={`${activeTab === i ? "-mt-16" : ""}
                 transition-all duration-300 flex items-center justify-center`}
                  >
                    {item.component}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
