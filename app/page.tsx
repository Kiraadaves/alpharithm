import Client from "@/components/client";
import Hero from "@/components/hero";
import Models from "@/components/models";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Navbar />{" "}
      <main className=" flex-1">
        <Hero />
        <Client />
        <Models />
      </main>
      <footer className="bg-[#031969] text-white flex gap-[24px] flex-wrap items-center justify-between md:px-6 px-4 py-6">
        <Image
          src="/logo.png"
          alt="logo-image"
          width={100}
          height={100}
          loading="lazy"
          className="h-10 w-10"
        />{" "}
        <div className="text-white flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chinwe Nwankwo
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/Kiraadaves/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Github
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://latest-portfolio-vert-mu.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to my Portfolio →
          </a>
        </div>
      </footer>
    </div>
  );
}
