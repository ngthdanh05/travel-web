import { tours } from "../data/tours";
import Stack from "./Stack";

const cards = tours.map((tour) => (
  <div className="w-full h-full bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl">
    <img
      src={tour.image}
      className="h-44 sm:h-52 md:h-60 lg:h-64 w-full object-cover"
    />

    <div className="p-4 sm:p-5 md:p-6">
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-yellow-400 mb-2">
        {tour.name}
      </h3>

      <p className="text-xs sm:text-sm md:text-base text-gray-300">
        {tour.duration}
      </p>

      <p className="text-sm sm:text-base md:text-lg text-yellow-300 font-semibold mt-2">
        {tour.price}
      </p>

      <div className="mt-3 sm:mt-4 border-l border-yellow-500 pl-3">
        {tour.itinerary.slice(0, 3).map((day, index) => (
          <p key={index} className="text-xs sm:text-sm text-gray-300 mb-1">
            {day}
          </p>
        ))}
      </div>
    </div>
  </div>
));

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] md:min-h-screen flex items-center overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/image/hue.jpg"
          alt="background"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <div className="absolute inset-0 bg-hero-gradient blur-3xl opacity-40" />

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
        grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center 
        py-12 sm:py-16 md:py-20"
      >
        {/* LEFT */}
        <div className="text-center md:text-left flex flex-col gap-4">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-transparent bg-clip-text tracking-widest uppercase">
            Ba Miền Một Việt
          </h2>

          <h1 className="md:mt-10 text-4xl sm:text-5xl md:text-5xl xl:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-red-700 via-orange-500 to-yellow-400 text-transparent bg-clip-text">
              Một miền di sản
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
            Hành trình khám phá vẻ đẹp văn hóa, lịch sử và thiên nhiên Việt Nam
            — nơi mỗi điểm đến là một câu chuyện, mỗi ký ức đều ngân vang theo
            thời gian.
          </p>

          <p className="italic text-orange-400 text-lg sm:text-xl">
            “Hồi ức ngân vang”
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative w-full flex justify-center">
          <div
            className="
            w-[300px] 
            sm:w-[320px] 
            md:w-[340px] 
            lg:w-[420px] 
            h-[360px] 
            sm:h-[420px] 
            md:h-[460px] 
            lg:h-[500px]
          "
          >
            <Stack
              cards={cards}
              autoplay
              autoplayDelay={3000}
              pauseOnHover
              randomRotation
              sendToBackOnClick
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
