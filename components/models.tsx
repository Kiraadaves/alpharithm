import React from "react";

const Models = () => {
  return (
    <section
      id="home"
      className="relative flex items-center pt-20 overflow-hidden bg-[#04142B] py-20 md:py-32 z-10"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute -bottom-30 left-1/2 transform -translate-x-1/2 w-[963px] h-96 bg-[#0037ff59] rounded-full blur-3xl parallax-element"></div>
      </div>
      <div className="container mx-auto px-4 relative  items-center">
        <div className="space-y-6 text-center">
          <p className="text-[#7191ff] text-base font-bold ">
            Leverage on Automation
          </p>

          <h1 className="md:text-[76px] text-4xl text-[#ffffff] font-semibold">
            AI Models for <br />
            Business Solutions
          </h1>
          <p className="text-base md:text-[22px] text-[#FFFFFF] font-medium">
            Leverage the power of AI to automate, analyze, and optimize your
            workflows. Our <br />
            specialized models are designed to fit different business needs
          </p>
          <div className="flex justify-center">
            <button className="flex items-center justify-center h-[50px] md:px-[26px] md:py-[14px] px-[13px] py-[7px] font-semibold text-base md:text-lg text-[#05152C] bg-[#ffffff] rounded-[12px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;
