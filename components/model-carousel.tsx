"use client";

import { useMemo, useState, useEffect } from "react";
import "swiper/css";
import { A11y, Controller, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import AOS from "aos";
import "aos/dist/aos.css";
import { Figtree, Inter, Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });
const figtree = Figtree({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

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
      {
        label: "Market Prediction",
        description:
          "Use AI insights for smarter business decisions and stay competitive.",
        image: "/market.png",
      },
      {
        label: "Finance",
        description:
          "Our AI models analyze financial data for confident investments.",
        image: "/finance.png",
      },
      {
        label: "Analytics",
        description:
          "Transform data into insights with AI analytics that enhance decisions.",
        image: "/analytics.png",
      },
      {
        label: "Content Generation",
        description:
          "Create quality content easily with AI that knows your brand and audience.",
        image: "/content.png",
      },
      {
        label: "Customer Support",
        description:
          "Use AI chatbots for instant, personalized customer support.",
        image: "/customer.png",
      },
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
                  <div
                    className={`relative flex h-full w-[100%] flex-col items-center gap-6 md:gap-0 rounded-lg  bg-[#F6FAF3]  pt-5 md:pt-10 transition-transform duration-500 ease-in-out md:w-[90%] md:flex-row md:pl-5 lg:w-full lg:pb-0 ${
                      activeTab === i
                        ? "scale-100 border border-[#03227f35] shadow-lg"
                        : "scale-90"
                    }`}
                  >
                    <div
                      className="mt-3 w-full md:pl-5 text-center md:mt-0 md:w-[50%]  md:text-left space-y-6"
                      data-aos={`${activeTab === i ? "fade-right" : ""} `}
                      data-aos-delay="900"
                    >
                      <h3
                        className={`${inter.className}  px-3 md:px-0 mt-2 md:mt-0 text-[#828282] font-semibold text-[19.5px]`}
                      >
                        {item.label}
                      </h3>
                      <p
                        className={`${figtree.className} px-3 md:px-0 text-[#22263F] font-semibold leading-tight text-[20px] md:text-[42.9px]`}
                      >
                        {item.description}
                      </p>
                      <button
                        aria-label="Learn More"
                        className={`${figtree.className} cursor-pointer border-[0.97px] px-[16px] py-[9.75px] rounded-[3.9px] border-[#22263f] bg-[#03217f] text-white font-medium`}
                      >
                        {" "}
                        Learn More
                      </button>
                    </div>

                    <div className="p-2 md:p-0 md:flex w-full md:w-[50%] md:items-end md:justify-end">
                      <Image
                        src={item.image}
                        alt={item.label}
                        width={500}
                        height={500}
                        className=" h-auto w-full rounded-lg md:rounded-none md:rounded-br-lg md:max-w-[600px] transition-transform duration-500 hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
