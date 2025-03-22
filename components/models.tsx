"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const modelsTab = [
  {
    name: "Market Prediction",
    src: "/market.png",
    content:
      "Use AI insights for smarter business decisions and stay competitive.",
  },
  {
    name: "Finance",
    src: "/finance.png",
    content: "Our AI models analyze financial data for confident investments.",
  },
  {
    name: "Analytics",
    src: "/analytics.png",
    content:
      "Transform data into insights with AI analytics that enhance decisions.",
  },
  {
    name: "Content Generation",
    src: "/content.png",
    content:
      "Create quality content easily with AI that knows your brand and audience.",
  },
  {
    name: "Customer Support",
    src: "/customer.png",
    content: "Use AI chatbots for instant, personalized customer support.",
  },
];

const Models = () => {
  const [activeTab, setActiveTab] = useState("Market Prediction");
  const carouselRef = useRef<HTMLDivElement>(null);

  // Scroll to the active card when tab changes
  useEffect(() => {
    const activeIndex = modelsTab.findIndex(
      (model) => model.name === activeTab
    );
    if (carouselRef.current && activeIndex !== -1) {
      const cardWidth = carouselRef.current.scrollWidth / modelsTab.length;
      carouselRef.current.scrollTo({
        left: cardWidth * activeIndex,
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  return (
    <section
      id="models"
      className="relative space-y-12 overflow-hidden bg-[#ffffff] py-15 z-10"
    >
      <div className="container mx-auto px-4 relative items-center">
        <div className="space-y-6 text-center">
          <h1 className="md:text-[50px] text-3xl text-[#22263F] leading-[62px] font-semibold">
            AI Models tailored for your
            <br />
            business needs
          </h1>
          <p className="text-base md:text-[22px] text-[#828282] leading-[38px] font-medium">
            Leverage the power of AI to automate, analyze, and optimize your
            workflows. Our <br />
            specialized models are designed to fit different business needs
          </p>
          <div className="flex justify-center">
            <div className="flex items-center flex-wrap justify-center p-1 border border-[#e4e4e7] rounded-[12px] gap-8">
              {modelsTab.map((model) => (
                <button
                  onClick={() => setActiveTab(model.name)}
                  key={model.name}
                  className={`px-[14px] py-[6px] rounded-lg transition-colors duration-200 text-base font-semibold ${
                    activeTab === model.name
                      ? "bg-[#03217F] text-[#ffffff]"
                      : " text-[#A7A7A7] hover:bg-gray-100"
                  }`}
                >
                  {model.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div ref={carouselRef} className="w-full overflow-x-hidden">
        <div className="flex transition-transform duration-500 ease-in-out">
          {modelsTab.map((model) => (
            <div
              key={model.name}
              className={`flex-shrink-0 max-w-4xl transform transition-all duration-500 ${
                activeTab === model.name
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-70"
              }`}
            >
              <div className="flex flex-col md:flex-row pt-8 rounded-[11.7px] bg-[#f6faf3]">
                <div className="md:w-1/2 flex flex-col justify-center space-y-6 pl-8">
                  <h3 className="text-[#828282] font-semibold text-[19.5px]">
                    {model.name === "Analytics" ? "Data Analytics" : model.name}
                  </h3>
                  <p className="text-[#22263F] font-semibold text-[28px] md:text-[42.9px]">
                    {model.content}
                  </p>
                  <div>
                    <button className="border-[0.97px] px-[16px] py-[9.75px] rounded-[3.9px] border-[#22263f] bg-[#03217f] text-white font-medium">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="md:w-1/2 flex items-center justify-center">
                  <Image
                    src={model.src}
                    width={500}
                    height={500}
                    loading="lazy"
                    alt={model.name}
                    className="object-contain md:ml-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {modelsTab.map((model) => (
          <button
            key={`dot-${model.name}`}
            onClick={() => setActiveTab(model.name)}
            className={`w-2 h-2 rounded-full transition-colors ${
              activeTab === model.name ? "bg-[#03217F]" : "bg-gray-300"
            }`}
            aria-label={`Go to ${model.name}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Models;
