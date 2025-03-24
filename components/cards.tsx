import Image from "next/image";
import { Figtree, Inter } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export function MarketPrediction() {
  return (
    <div className="rounded-xl bg-[#F6FAF3] md:pl-16 pt-4 sm:pt-8 flex flex-col lg:flex-row items-center md:justify-between gap-4 overflow-hidden">
      <div className="flex flex-col gap-4 md:gap-6 flex-1 md:mb-16  md:pr-16 lg:pr-0 text-center md:text-left">
        <p
          className={`${inter.className} text-base md:text-xl font-semibold tracking-[-2%] text-[#828282]`}
        >
          Market Prediction
        </p>
        <h4
          className={`${figtree.className} text-xl md:text-[42.9px] font-semibold tracking-[-2%] text-[#22263F]`}
        >
          Use AI insights for smarter business decisions and stay competitive.
        </h4>
        <div>
          <button
            aria-label="Learn More"
            className={`${figtree.className} cursor-pointer border-[0.97px] px-[16px] py-[9.75px] rounded-[3.9px] border-[#22263f] bg-[#03217f] text-white font-medium`}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-end mt-4 md:mt-0 w-full max-w-[520px] transition-transform duration-500 hover:scale-105">
        <Image
          src="/market.png"
          alt=""
          width={520}
          height={520}
          className="object-cover object-center w-full h-auto sm:w-auto sm:h-auto"
        />
      </div>
    </div>
  );
}

export function Finance() {
  return (
    <div className="rounded-xl bg-[#F6FAF3] md:pl-16 pt-4 sm:pt-8 flex flex-col lg:flex-row items-center md:justify-between gap-4 overflow-hidden">
      <div className="flex flex-col gap-4 md:gap-6 flex-1 md:mb-16 px-8 md:pl-0 md:pr-16 lg:pr-0 text-center md:text-left">
        <p
          className={`${inter.className}  text-base md:text-xl font-semibold tracking-[-2%] text-[#828282] `}
        >
          {" "}
          Finance
        </p>
        <h4
          className={`${figtree.className}  text-xl md:text-[42.9px] font-semibold tracking-[-2%] text-[#22263F]`}
        >
          {" "}
          Our AI models analyze financial data for confident investments.
        </h4>
        <div>
          <button
            aria-label="Learn More"
            className={`${figtree.className} cursor-pointer border-[0.97px] px-[16px] py-[9.75px] rounded-[3.9px] border-[#22263f] bg-[#03217f] text-white font-medium`}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-end mt-4 md:mt-0 w-full max-w-[520px] transition-transform duration-500 hover:scale-105">
        <Image
          src="/finance.png"
          alt=""
          width={520}
          height={520}
          className="object-cover object-center w-full h-auto sm:w-auto sm:h-auto"
        />
      </div>
    </div>
  );
}

export function Analytics() {
  return (
    <div className="rounded-xl bg-[#F6FAF3] md:pl-16 pt-4 sm:pt-8 flex flex-col lg:flex-row items-center md:justify-between gap-4 overflow-hidden">
      <div className="flex flex-col gap-4 md:gap-6 flex-1 md:mb-16 px-8 md:pl-0 md:pr-16 lg:pr-0 text-center md:text-left">
        <p
          className={`${inter.className}  text-base md:text-xl font-semibold tracking-[-2%] text-[#828282] `}
        >
          {" "}
          Data Analytics
        </p>
        <h4
          className={`${figtree.className}  text-xl md:text-[42.9px] font-semibold tracking-[-2%] text-[#22263F]`}
        >
          {" "}
          Transform data into insights with AI analytics that enhance decisions.
        </h4>
        <div>
          <button
            aria-label="Learn More"
            className={`${figtree.className} cursor-pointer border-[0.97px] px-[16px] py-[9.75px] rounded-[3.9px] border-[#22263f] bg-[#03217f] text-white font-medium`}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-end mt-4 md:mt-0 w-full max-w-[520px] transition-transform duration-500 hover:scale-105">
        <Image
          src="/analytics.png"
          alt=""
          width={520}
          height={520}
          className="object-cover object-center w-full h-auto sm:w-auto sm:h-auto"
        />
      </div>
    </div>
  );
}

export function Content() {
  return (
    <div className="rounded-xl bg-[#F6FAF3] md:pl-16 pt-4 sm:pt-8 flex flex-col lg:flex-row items-center md:justify-between gap-4 overflow-hidden">
      <div className="flex flex-col gap-4 md:gap-6 flex-1 md:mb-16 px-8 md:pl-0 md:pr-16 lg:pr-0 text-center md:text-left">
        <p
          className={`${inter.className}  text-base md:text-xl font-semibold tracking-[-2%] text-[#828282] `}
        >
          {" "}
          Content Generation
        </p>
        <h4
          className={`${figtree.className}  text-xl md:text-[42.9px] font-semibold tracking-[-2%] text-[#22263F]`}
        >
          {" "}
          Create quality content easily with AI that knows your brand and
          audience.
        </h4>
        <div>
          <button
            aria-label="Learn More"
            className={`${figtree.className} cursor-pointer border-[0.97px] px-[16px] py-[9.75px] rounded-[3.9px] border-[#22263f] bg-[#03217f] text-white font-medium`}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-end mt-4 md:mt-0 w-full max-w-[520px] transition-transform duration-500 hover:scale-105">
        <Image
          src="/content.png"
          alt=""
          width={520}
          height={520}
          className="object-cover object-center w-full h-auto sm:w-auto sm:h-auto"
        />
      </div>
    </div>
  );
}

export function Customer() {
  return (
    <div className="rounded-xl bg-[#F6FAF3] md:pl-16 pt-4 sm:pt-8 flex flex-col lg:flex-row items-center md:justify-between gap-4 overflow-hidden">
      <div className="flex flex-col gap-4 md:gap-6 flex-1 md:mb-16 px-8 md:pl-0 md:pr-16 lg:pr-0 text-center md:text-left">
        <p
          className={`${inter.className}  text-base md:text-xl font-semibold tracking-[-2%] text-[#828282] `}
        >
          {" "}
          Customer Support
        </p>
        <h4
          className={`${figtree.className}  text-xl md:text-[42.9px] font-semibold tracking-[-2%] text-[#22263F]`}
        >
          {" "}
          Use AI chatbots for instant, personalized customer support.
        </h4>
        <div>
          <button
            aria-label="Learn More"
            className={`${figtree.className} cursor-pointer border-[0.97px] px-[16px] py-[9.75px] rounded-[3.9px] border-[#22263f] bg-[#03217f] text-white font-medium`}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-end mt-4 md:mt-0 w-full max-w-[520px] transition-transform duration-500 hover:scale-105">
        <Image
          src="/customer.png"
          alt=""
          width={520}
          height={520}
          className="object-cover object-center w-full h-auto sm:w-auto sm:h-auto"
        />
      </div>
    </div>
  );
}
