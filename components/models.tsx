"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";
import { Figtree, Inter, Plus_Jakarta_Sans } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

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

  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

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

      setTimeout(() => {
        AOS.refresh();
      }, 0);
    }
  }, [activeTab]);

  return (
    <section
      id="models"
      ref={sectionRef}
      className="relative space-y-4 overflow-hidden bg-[#ffffff] md:py-20 py-10 z-10"
    >
      <div className="container mx-auto px-4 relative items-center">
        <div className="space-y-6 text-center">
          <h1
            className={`${
              figtree.className
            } md:text-[50px] text-3xl text-[#22263F] md:leading-[52px] leading-tight font-semibold transition-all duration-700 ${
              sectionInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            aria-label="Main Heading: AI Models tailored for your Business needs"
          >
            AI Models tailored for your
            <br className="hidden md:block" /> business needs
          </h1>
          <p
            className={` ${
              plusJakartaSans.className
            }  text-base md:text-[22px] text-[#828282] leading-relaxed font-medium transition-all duration-700 delay-100 ${
              sectionInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            aria-label="Description: Leverage the power of AI to automate, analyze, and optimize your
            workflows."
          >
            Leverage the power of AI to automate, analyze, and optimize your
            workflows. Our{" "}
            <span className=" md:inline">
              specialized models are designed to fit different business needs.
            </span>
          </p>
          <div
            className={`flex justify-center transition-all duration-700 delay-200 ${
              sectionInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div
              role="tablist"
              className="flex items-center flex-wrap justify-center p-1 border border-[#e4e4e7] rounded-[12px]
              "
            >
              {modelsTab.map((model) => (
                <button
                  role="tab"
                  aria-label={model.name}
                  aria-selected={activeTab === model.tab}
                  aria-controls={`tabpanel-${model.tab}`}
                  onClick={() => setActiveTab(model.tab)}
                  key={model.name}
                  className={`${
                    figtree.className
                  } cursor-pointer px-[14px] py-[7px] mx-3 rounded-lg transition-colors duration-200 text-base font-semibold ${
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

      <div className="w-full py-8 relative">
        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center gap-4 md:gap-12">
            <div
              key={`left-${visibleItems[0]?.tab}`}
              role="tabpanel"
              id={`tabpanel-${visibleItems[0]?.tab}`}
              aria-labelledby={`tab-${visibleItems[0]?.tab}`}
              className={`hidden md:block flex-shrink-0 px-8 md:px-0 w-full md:w-[65%] overflow-hidden rounded-[11.7px]`}
              data-aos="fade-down-left"
            >
              <div className="cards bg-[#f6faf3] rounded-[11.7px] grid lg:grid-cols-2 grid-cols-1 gap-12 pt-10">
                <div className="h-full flex items-center">
                  <div className="md:pl-10 md:h-[300px] w-full space-y-6 text-center md:text-left">
                    <h3
                      className={`${inter.className} text-[#828282] font-semibold text-[19.5px]`}
                    >
                      {visibleItems[0]?.name === "Analytics"
                        ? "Data Analytics"
                        : visibleItems[0]?.name}
                    </h3>
                    <p
                      className={`${figtree.className} text-[#22263F] font-semibold leading-tight text-[20px] md:text-[42.9px]`}
                    >
                      {visibleItems[0]?.content}
                    </p>
                    <div>
                      <button
                        aria-label="Learn More"
                        className={`${figtree.className} cursor-pointer border-[0.97px] px-[16px] py-[9.75px] rounded-[3.9px] border-[#22263f] bg-[#03217f] text-white font-medium`}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
                <div className="lg:h-full h-[300px] rounded-br-[11.7px]">
                  <Image
                    src={visibleItems[0]?.src}
                    alt={visibleItems[0]?.name}
                    width={500}
                    height={600}
                    className="h-full w-full object-cover rounded-br-[11.7px]"
                  />
                </div>
              </div>
            </div>

            <div
              key={`center-${visibleItems[1]?.tab}`}
              role="tabpanel"
              id={`tabpanel-${visibleItems[1]?.tab}`}
              aria-labelledby={`tab-${visibleItems[1]?.tab}`}
              className={`flex-shrink-0 px-8 md:px-0 w-full md:w-[65%] md:shadow-lg overflow-hidden md:mb-34 rounded-[11.7px]`}
              data-aos="fade-up-left"
            >
              <div className="cards bg-[#f6faf3] border border-[#03196915]  rounded-[11.7px] grid lg:grid-cols-2 grid-cols-1 gap-12 pt-10">
                <div className="h-full flex items-center">
                  <div className="md:pl-10 md:h-[300px] w-full space-y-6 text-center md:text-left">
                    <h3
                      className={`${inter.className} text-[#828282] font-semibold text-[19.5px]`}
                    >
                      {visibleItems[1]?.name === "Analytics"
                        ? "Data Analytics"
                        : visibleItems[1]?.name}
                    </h3>
                    <p
                      className={`${figtree.className} text-[#22263F] leading-tight font-semibold text-[20px] md:text-[42.9px]`}
                    >
                      {visibleItems[1]?.content}
                    </p>
                    <div>
                      <button
                        aria-label="Learn More"
                        className={`${figtree.className} cursor-pointer border-[0.97px] px-[16px] py-[9.75px] rounded-[3.9px] border-[#22263f] bg-[#03217f] text-white font-medium`}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
                <div className="lg:h-full h-[300px] rounded-br-[11.7px]">
                  <Image
                    src={visibleItems[1]?.src}
                    alt={visibleItems[1]?.name}
                    width={500}
                    height={600}
                    className="h-full w-full object-cover rounded-br-[11.7px]"
                  />
                </div>
              </div>
            </div>

            <div
              key={`right-${visibleItems[2]?.tab}`}
              role="tabpanel"
              id={`tabpanel-${visibleItems[2]?.tab}`}
              aria-labelledby={`tab-${visibleItems[2]?.tab}`}
              className={`hidden md:block flex-shrink-0 px-8 md:px-0 w-full md:w-[65%] overflow-hidden rounded-[11.7px]`}
              data-aos="fade-up-left"
            >
              <div className="cards bg-[#f6faf3] rounded-[11.7px] grid lg:grid-cols-2 grid-cols-1 gap-12 pt-10">
                <div className="h-full flex items-center">
                  <div className="md:pl-10 md:h-[300px] w-full space-y-6 text-center md:text-left">
                    <h3
                      className={`${inter.className} text-[#828282] font-semibold text-[19.5px]`}
                    >
                      {visibleItems[2]?.name === "Analytics"
                        ? "Data Analytics"
                        : visibleItems[2]?.name}
                    </h3>
                    <p
                      className={`${figtree.className} text-[#22263F] font-semibold leading-tight text-[20px] md:text-[42.9px]`}
                    >
                      {visibleItems[2]?.content}
                    </p>
                    <div>
                      <button
                        aria-label="Learn More"
                        className={`${figtree.className} border-[0.97px] px-[16px] py-[9.75px] rounded-[3.9px] border-[#22263f] bg-[#03217f] text-white font-medium cursor-pointer`}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
                <div className="lg:h-full h-[300px] rounded-br-[11.7px]">
                  <Image
                    src={visibleItems[2]?.src}
                    alt={visibleItems[2]?.name}
                    width={500}
                    height={600}
                    className="h-full w-full object-cover rounded-br-[11.7px]"
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
