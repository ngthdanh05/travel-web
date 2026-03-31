import { tours } from "../data/tours";

const Hero = () => {
  const tour = tours[0];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
      {/* BACKGROUND (chỉ để 1 lần) */}
      <div className="absolute inset-0 bg-hero-gradient blur-3xl opacity-50" />
      <div className="wave opacity-20" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT - INTRO */}
        <div className="text-left">
          <h2 className="text-lg md:text-xl text-accent mb-4 tracking-widest">
            Ba Miền Một Việt
          </h2>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-red-700 via-orange-500 to-yellow-400 text-transparent bg-clip-text">
              Một miền di sản
            </span>
          </h1>

          <p className="text-gray-300 text-lg mb-6 leading-relaxed max-w-xl">
            Hành trình khám phá vẻ đẹp văn hóa, lịch sử và thiên nhiên Việt Nam
            — nơi mỗi điểm đến là một câu chuyện, mỗi ký ức đều ngân vang theo
            thời gian.
          </p>

          <p className="italic text-orange-400 text-xl mb-8">
            “Hồi ức ngân vang”
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-red-700 to-yellow-500 rounded-full shadow-lg hover:scale-105 transition">
              Khám phá ngay
            </button>

            <button className="px-6 py-3 border border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition">
              Xem lịch trình
            </button>
          </div>
        </div>

        {/* RIGHT - TOUR CARD */}
        <div className="relative flex justify-center">
          {/* Glow */}
          <div className="absolute w-[350px] h-[350px] bg-gradient-to-tr from-red-600/30 to-yellow-400/20 blur-3xl rounded-full" />

          {/* Card */}
          <div className="relative w-full max-w-md bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition duration-500">
            <img src={tour.image} className="h-64 w-full object-cover" />

            <div className="p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">
                {tour.name}
              </h3>

              <p className="text-gray-300">{tour.duration}</p>

              <p className="text-lg text-yellow-300 font-semibold mt-2">
                {tour.price}
              </p>

              {/* Timeline */}
              <div className="mt-4 border-l border-yellow-500 pl-4">
                {tour.itinerary.slice(0, 3).map((day, index) => (
                  <p key={index} className="text-sm text-gray-300 mb-1">
                    {day}
                  </p>
                ))}
              </div>

              <button className="mt-5 w-full py-2 bg-gradient-to-r from-red-600 to-yellow-500 rounded-lg hover:scale-105 transition">
                Đặt tour ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
