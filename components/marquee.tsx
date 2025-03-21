"use client";

import React, { useEffect } from "react";

const Marquee = () => {
  useEffect(() => {
    const logosSlide = document.querySelector(".logos-slide");
    if (logosSlide) {
      const copy = logosSlide.cloneNode(true);
      document.querySelector(".logos")?.appendChild(copy);
    }
  }, []);

  const items = [
    { name: "Layers", width: "w-20", height: "h-20", src: "" },
    { name: "Sisyphus", width: "w-20", height: "h-20", src: "" },
    { name: "Circooles", width: "w-20", height: "h-20", src: "" },
    { name: "Catalog", width: "w-20", height: "h-20", src: "" },
    { name: "Quotient", width: "w-20", height: "h-20", src: "" },
  ];

  const marqueeItems = [...items, ...items];

  return (
    <div className="logos pt-10">
      <div className="logos-slide">
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className={`inline-block mx-24  ${item.width} ${item.height}`}
          >
            <p className="inline-block px-6 py-3 rounded-lg bg-white shadow-md border border-gray-100 text-teal-800 font-black">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
