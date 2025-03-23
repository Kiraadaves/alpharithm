"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Model {
  tab: number;
  name: string;
  src: string;
  content: string;
}

const modelsTab = [
  {
    tab: 1,
    name: "Market Prediction",
    src: "/market.png",
    content:
      "Use AI insights for smarter business decisions and stay competitive.",
  },
  {
    tab: 2,
    name: "Finance",
    src: "/finance.png",
    content: "Our AI models analyze financial data for confident investments.",
  },
  {
    tab: 3,
    name: "Analytics",
    src: "/analytics.png",
    content:
      "Transform data into insights with AI analytics that enhance decisions.",
  },
  {
    tab: 4,
    name: "Content Generation",
    src: "/content.png",
    content:
      "Create quality content easily with AI that knows your brand and audience.",
  },
  {
    tab: 5,
    name: "Customer Support",
    src: "/customer.png",
    content: "Use AI chatbots for instant, personalized customer support.",
  },
];

const Models = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [visibleItems, setVisibleItems] = useState<Model[]>([
    modelsTab[4],
    modelsTab[0],
    modelsTab[1],
  ]);

  useEffect(() => {
    const totalItems = modelsTab.length;

    const activeIndex = modelsTab.findIndex((model) => model.tab === activeTab);

    if (activeIndex !== -1) {
      const prevIndex = (activeIndex - 1 + totalItems) % totalItems;
      const nextIndex = (activeIndex + 1) % totalItems;

      setVisibleItems([
        modelsTab[prevIndex],
        modelsTab[activeIndex],
        modelsTab[nextIndex],
      ]);
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
                  onClick={() => setActiveTab(model.tab)}
                  key={model.name}
                  className={`px-[14px] py-[6px] rounded-lg transition-colors duration-200 text-base font-semibold ${
                    activeTab === model.tab
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

      {/**MY CAROUSEL */}
      <div className="w-full py-12 relative">
        {/* Carousel container */}
        <div className="relative  overflow-hidden">
          <div className="flex justify-center items-center gap-12">
            {/* Left (partially visible) div */}
            <div className={`flex-shrink-0 w-[65%] overflow-hidden`}>
              <div className="cards bg-[#f6faf3]  rounded-[11.7px]  grid lg:grid-cols-2 grid-cols-1 gap-12 pt-10">
                <div className="h-full flex items-center ">
                  <div className="pl-10 h-[300px] w-full space-y-6 ">
                    <h3 className="text-[#828282] font-semibold text-[19.5px]">
                      {visibleItems[0]?.name === "Analytics"
                        ? "Data Analytics"
                        : visibleItems[0]?.name}
                    </h3>
                    <p className="text-[#22263F] font-semibold text-[28px] md:text-[42.9px]">
                      {visibleItems[0]?.content}
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
                    src={visibleItems[0]?.src}
                    alt="finance"
                    width={500}
                    height={600}
                    className="h-full w-full object-cover rounded-br-[11.7px]" // Add these classes
                  />
                </div>
              </div>
            </div>

            {/* Center (active) div */}
            <div className={`flex-shrink-0 w-[65%] overflow-hidden mb-28`}>
              <div className="cards bg-[#f6faf3] rounded-[11.7px]  grid lg:grid-cols-2 grid-cols-1 gap-12 pt-10">
                <div className="h-full flex items-center ">
                  <div className="pl-10 h-[300px] w-full space-y-6 ">
                    <h3 className="text-[#828282] font-semibold text-[19.5px]">
                      {visibleItems[1]?.name === "Analytics"
                        ? "Data Analytics"
                        : visibleItems[1]?.name}
                    </h3>
                    <p className="text-[#22263F] font-semibold text-[28px] md:text-[42.9px]">
                      {visibleItems[1]?.content}
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
                    src={visibleItems[1]?.src}
                    alt="finance"
                    width={500}
                    height={600}
                    className="h-full w-full object-cover rounded-br-[11.7px]" // Add these classes
                  />
                </div>
              </div>
            </div>

            {/* Right (partially visible) div */}

            <div className={`flex-shrink-0 w-[65%] overflow-hidden`}>
              <div className="cards bg-[#f6faf3]  rounded-[11.7px]  grid lg:grid-cols-2 grid-cols-1 gap-12 pt-10">
                <div className="h-full flex items-center ">
                  <div className="pl-10 h-[300px] w-full space-y-6 ">
                    <h3 className="text-[#828282] font-semibold text-[19.5px]">
                      {visibleItems[2]?.name === "Analytics"
                        ? "Data Analytics"
                        : visibleItems[2]?.name}
                    </h3>
                    <p className="text-[#22263F] font-semibold text-[28px] md:text-[42.9px]">
                      {visibleItems[2]?.content}
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
                    src={visibleItems[2]?.src}
                    alt="finance"
                    width={500}
                    height={600}
                    className="h-full w-full object-cover rounded-br-[11.7px]" // Add these classes
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;
