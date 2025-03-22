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

const aiCards = [...modelsTab, ...modelsTab];

const Models = () => {
  const [activeTab, setActiveTab] = useState("Market Prediction");
  const carouselRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const newIndex = modelsTab.findIndex((model) => model.name === activeTab);
    setActiveIndex(newIndex);

    if (carouselRef.current && newIndex >= 0) {
      const cardWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth,
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
      {/*Cards for model tabs*/}
      <div className="overflow-hidden w-full">
        <div
          ref={carouselRef}
          className="bg-purple-200 flex overflow-x-hidden snap-x snap-mandatory scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {aiCards.map((model, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full snap-center transition-all duration-300`}
            >
              <div className="cards bg-[#f6faf3] md:w-[65%] mx-auto  rounded-[11.7px]  grid lg:grid-cols-2 grid-cols-1 gap-12 pt-10">
                <div className="h-full flex items-center ">
                  <div className="pl-10 h-[300px] w-full space-y-6 ">
                    <h3 className="text-[#828282] font-semibold text-[19.5px]">
                      {model.name === "Analytics"
                        ? "Data Analytics"
                        : model.name}
                    </h3>
                    <p className="text-[#22263F] font-semibold text-[28px] md:text-[42.9px]">
                      {model.content}
                    </p>{" "}
                    <div className="">
                      <button className="border-[0.97px] px-[16px] py-[9.75px] rounded-[3.9px] border-[#22263f] bg-[#03217f] text-white font-medium">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" h-full rounded-br-[11.7px]">
                  <Image
                    src={model.src}
                    alt="finance"
                    width={500}
                    height={600}
                    className="h-full w-full object-cover rounded-br-[11.7px]" // Add these classes
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;
