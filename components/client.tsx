import Marquee from "./marquee";

const Client = () => {
  return (
    <section className="py-12  bg-gradient-to-r from-teal-900 to-teal-800 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="inline-block px-6 pt-3 text-base md:text-2xl text-yellow-400 font-medium">
          Trusted by 500+ companies worldwide
        </p>

        <div className="w-full max-w-6xl">
          <Marquee />
        </div>
      </div>
    </section>
  );
};

export default Client;