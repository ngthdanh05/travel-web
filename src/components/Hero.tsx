import { tours } from "../data/tours";
import Stack from "./Stack";

const cards = [...tours]
  .sort((a, b) => a.id - b.id)
  .map((tour) => (
    <div className="group select-none w-full h-full bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:scale-[1.03] transition duration-500">
      <div className="relative overflow-hidden">
        <img
          src={tour.image}
          className="h-44 sm:h-52 md:h-60 lg:h-64 w-full object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      <div className="p-4 sm:p-5 md:p-6 flex flex-col gap-2">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">
          {tour.name}
        </h3>

        <p className="text-xs md:text-base text-gray-300">{tour.subtitle}</p>

        <div className="flex gap-3 text-xs md:text-base text-gray-400">
          <span>📍 {tour.duration}</span> -<span>{tour.location}</span>
        </div>

        <div className="md:mt-3 border-l border-yellow-500 pl-3">
          {tour.activities.slice(0, 3).map((item, index) => (
            <p key={index} className="text-sm md:text-base text-gray-300">
              • {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  ));

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/image/hue.jpg"
          alt="background"
          className="w-full h-full object-cover scale-110 brightness-75"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="absolute inset-0 bg-hero-gradient blur-3xl opacity-40" />

      <div className="relative z-10 flex flex-col min-h-screen max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute top-4 sm:top-6 md:top-10 left-4 sm:left-6 lg:left-8 flex items-center">
          <img
            src="/image/logo.png"
            alt="logo"
            className="h-28 md:h-32 lg:h-40 w-auto object-contain"
          />
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center pt-28 sm:pt-32 md:pt-40 pb-20">
          <div className="text-center md:text-left flex flex-col gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text">
                Khám phá Việt Nam
              </span>
              <br />
              <span className="text-white">Theo cách của bạn</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
              Từ cố đô Huế đến phố cổ Hội An, từ biển xanh Đà Nẵng — mỗi hành
              trình là một trải nghiệm không thể quên.
            </p>

            <p className="italic text-orange-400 text-base sm:text-lg md:text-xl">
              “Hồi ức ngân vang”
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end">
            <div className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[440px] h-[360px] sm:h-[390px] md:h-[480px] lg:h-[530px]">
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

        {/* FOOTER */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 lg:left-8 flex items-center text-[#d3c5a4] text-sm sm:text-lg">
          <div className="flex flex-col">
            <span className="font-bold">ĐẶT NGAY</span>
            <span>© LIÊN HỆ: 0123 456 789 - contact@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
