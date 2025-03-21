"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3 md:py-8"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="relative h-10 w-10">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <path d="M20 5L35 30H5L20 5Z" fill="#0F766E" />
              <path d="M20 15L27.5 27.5H12.5L20 15Z" fill="#14B8A6" />
            </svg>
          </div>
          <span
            className={`text-xl font-bold  ${
              scrolled ? "text-teal-900" : "text-white"
            }`}
          >
            Innova
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {[
            "Home",
            "About",
            "Services",
            "Solutions",
            "Training",
            "Contact",
          ].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-medium transition-colors hover:text-teal-600 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#contact"
            className="px-6 py-2.5 rounded-md bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors"
          >
            Free Consultation
          </Link>
        </div>

        <button
          className="lg:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <IoMdClose
              className={`h-6 w-6 ${scrolled ? "text-gray-800" : "text-white"}`}
            />
          ) : (
            <FiMenu
              className={`h-6 w-6 ${scrolled ? "text-gray-800" : "text-white"}`}
            />
          )}
        </button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[72px] bg-teal-900/95 z-40 p-4">
            <nav className="flex flex-col bg-teal-900/95 items-center gap-4 py-8">
              {[
                "Home",
                "About",
                "Services",
                "Solutions",
                "Training",
                "Contact",
              ].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-base font-medium hover:text-teal-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-4 px-8 py-3 rounded-md bg-white text-teal-900 font-medium hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Free Consultation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
