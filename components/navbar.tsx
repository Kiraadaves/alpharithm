"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#04142B]`}
    >
      <div className="w-[95%] mx-auto px-4 md:px-6 flex items-center justify-between py-6">
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="relative h-10 w-10">
            <Image
              src="/logo.png"
              alt="logo-image"
              width={100}
              height={100}
              loading="lazy"
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-medium text-base text-[#ffffff]`}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#contact"
            className="px-8 py-[10px]  rounded-[4px] border border-[#ffffff] text-white font-medium text-sm"
          >
            Login
          </Link>
          <Link
            href="#contact"
            className="px-8 py-[10px]  rounded-[4px] bg-[#ffffff] text-[#03061D] font-medium text-sm"
          >
            Get Started Now
          </Link>
        </div>

        <button
          className="lg:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <IoMdClose className={`h-6 w-6 text-[#ffffff]`} />
          ) : (
            <FiMenu className={`h-6 w-6 text-[#ffffff]`} />
          )}
        </button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[72px] bg-[#04142B33] z-40 p-4">
            <nav className="flex flex-col bg-[#04142B] items-center gap-4 py-8">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-base font-medium "
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}{" "}
              <Link
                href="#contact"
                className="px-8 py-[10px]  rounded-[4px] border border-[#ffffff] text-white font-medium text-sm"
              >
                Login
              </Link>
              <Link
                href="#contact"
                className="px-8 py-[10px]  rounded-[4px] bg-[#ffffff] text-[#03061D] font-medium text-sm"
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
