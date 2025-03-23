"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden bg-[#04142B] pt-32 pb-16 z-10"
      role="region"
      aria-label="Hero Section"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute -bottom-30 left-1/2 transform -translate-x-1/2 w-72 h-72 md:w-[963px] md:h-96 bg-[#0037ff59] rounded-full blur-3xl parallax-element"></div>
      </div>
      <div
        ref={ref}
        className="container mx-auto px-4 relative flex flex-col items-center text-center"
        role="contentinfo"
      >
        <div className="space-y-4 md:space-y-6">
          <p
            className={`text-[#7191ff] text-sm md:text-base font-bold transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            aria-label="Subheading: Leverage on Automation"
          >
            Leverage on Automation
          </p>
          <h1
            className={`text-3xl md:text-[76px] text-[#ffffff] font-semibold leading-tight transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            aria-label="Main Heading: AI Models for Business Solutions"
          >
            AI Models for <br className="hidden md:block" />
            Business Solutions
          </h1>

          <p
            className={`text-sm md:text-[22px] text-[#FFFFFF] font-medium leading-relaxed transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            aria-label="Description: Leverage the power of AI to automate, analyze, and optimize your workflows."
          >
            Leverage the power of AI to automate, analyze, and optimize your
            workflows. Our{" "}
            <span className=" md:inline">
              specialized models are designed to fit different business needs.
            </span>
          </p>

          <div
            className={`flex justify-center transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <button
              className="flex items-center justify-center h-12 md:h-[50px] px-6 md:px-[26px] py-3 md:py-[14px] font-semibold text-sm md:text-lg text-[#05152C] bg-[#ffffff] rounded-[12px] cursor-pointer"
              aria-label="Get Started"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
