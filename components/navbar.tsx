"use client";
import Image from "next/image";
import { Figtree } from "next/font/google";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const figtree = Figtree({ subsets: ["latin"] });

const navItems = [
  "Models",
  "Pricing",
  "About Us",
  "Contact Us",
  "Custom Models",
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        figtree.className
      } fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#031969]" : "bg-[#04142B]"
      }`}
    >
      <div className="w-[95%] mx-auto px-4 md:px-6 flex items-center justify-between py-6 space-x-4">
        <Link
          href="/"
          className="flex items-center gap-2 z-50"
          data-aos="fade-right"
        >
          <Image
            src="/logo.png"
            alt="logo-image"
            width={100}
            height={100}
            loading="lazy"
            className="h-10 w-10"
          />
        </Link>

        <nav
          role="navigation"
          aria-label="Main navigation"
          className="hidden lg:flex items-center justify-end gap-8 pr-5 w-[45%]"
          data-aos="fade-down"
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`${figtree.className} font-medium text-base text-[#ffffff]`}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4" data-aos="fade-left">
          <Link
            href="#"
            className={`${figtree.className} px-8 py-[10px] rounded-[4px] border border-[#ffffff] text-white font-medium text-sm`}
          >
            Login
          </Link>
          <Link
            href="#"
            className={`${figtree.className} px-8 py-[10px] rounded-[4px] bg-[#ffffff] text-[#03061D] font-medium text-sm`}
          >
            Get Started Now
          </Link>
        </div>

        <button
          className="cursor-pointer lg:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          data-aos="fade-left"
        >
          {isMenuOpen ? (
            <IoMdClose className={`h-6 w-6 text-[#ffffff]`} />
          ) : (
            <FiMenu className={`h-6 w-6 text-[#ffffff]`} />
          )}
        </button>

        {isMenuOpen && (
          <div
            className={`lg:hidden fixed inset-0 top-[72px] bg-[#04142bab] z-40 p-4`}
            role="dialog"
            aria-labelledby="mobile-menu-label"
          >
            <nav
              role="navigation"
              aria-label="Mobile navigation"
              className={`${
                scrolled ? "bg-[#031969]" : "bg-[#04142B]"
              } flex flex-col items-center gap-4 py-12`}
              data-aos="fade-down"
            >
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`${figtree.className} text-white text-base font-medium`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link
                href="#"
                className={`${figtree.className} px-8 py-[10px] rounded-[4px] border border-[#ffffff] text-white font-medium text-sm`}
              >
                Login
              </Link>
              <Link
                href="#"
                className={`${figtree.className} px-8 py-[10px] rounded-[4px] bg-[#ffffff] text-[#03061D] font-medium text-sm`}
              >
                Get Started Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
