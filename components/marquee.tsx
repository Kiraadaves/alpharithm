"use client";

import Image from "next/image";
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
    { name: "Layers", width: "w-20", height: "h-5", src: "/layers.png" },
    { name: "Sisyphus", width: "w-20", height: "h-10", src: "/sisy.png" },
    { name: "Circooles", width: "w-20", height: "h-10", src: "/circo.png" },
    { name: "Catalog", width: "w-20", height: "h-10", src: "/catalog.png" },
    { name: "Quotient", width: "w-20", height: "h-10", src: "/quotient.png" },
  ];

  const marqueeItems = [...items, ...items];

  return (
    <div className="logos">
      <div className="logos-slide">
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className={`inline-block mx-40  ${item.width} ${item.height} `}
          >
            <div
              className={`flex items-center gap-3 ${
                item.name === "Layers" && "mt-3 w-7"
              }`}
            >
              <Image
                src={item.src}
                alt={item.name}
                width={40}
                height={40}
                loading="lazy"
                className={`${item.name === "Layers" && "h-14"}`}
              />
              <p className="text-[#101828] font-medium text-lg">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
