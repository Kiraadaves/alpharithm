import Marquee from "./marquee";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

const Client = () => {
  return (
    <section className="py-3 overflow-hidden ">
      <div className="flex flex-col items-center justify-center gap-3">
        <p
          className={`${plusJakartaSans.className} inline-block px-6 pt-3 text-base md:text-xl text-[#667085] font-medium`}
        >
          Join 4,000+ companies already growing
        </p>
        <div className="w-full ">
          <Marquee />
        </div>
      </div>
    </section>
  );
};

export default Client;
