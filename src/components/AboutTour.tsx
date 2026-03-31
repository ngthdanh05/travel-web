import { tours } from "../data/tours";

const AboutTour = () => {
  const tour = tours[0]; // lấy tour chính

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT - Giới thiệu */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-red-700 via-orange-500 to-yellow-400 text-transparent bg-clip-text">
              Ba Miền Một Việt
            </span>
          </h2>

          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            Một miền di sản
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            Hành trình đưa bạn xuyên suốt chiều dài đất nước, khám phá những giá
            trị văn hóa, lịch sử và vẻ đẹp thiên nhiên đặc sắc của Việt Nam. Từ
            Hà Nội cổ kính, Huế mộng mơ đến Hội An yên bình — tất cả đều gói gọn
            trong một chuyến đi đầy cảm xúc.
          </p>

          <p className="italic text-orange-400 text-lg mb-8">
            “Hồi ức ngân vang”
          </p>

          <button className="px-6 py-3 bg-gradient-to-r from-red-700 to-yellow-500 rounded-full shadow-lg hover:scale-105 transition">
            Tìm hiểu thêm
          </button>
        </div>

        {/* RIGHT - Tour */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl">
          <img src={tour.image} className="h-60 w-full object-cover" />

          <div className="p-6">
            <h3 className="text-xl font-bold text-accent mb-2">{tour.name}</h3>

            <p className="text-gray-300">{tour.duration}</p>

            <p className="text-lg text-yellow-400 font-semibold mt-2">
              {tour.price}
            </p>

            {/* Timeline */}
            <div className="mt-4 border-l border-yellow-500 pl-4">
              {tour.itinerary.map((day, index) => (
                <p key={index} className="text-sm text-gray-300 mb-1">
                  {day}
                </p>
              ))}
            </div>

            <button className="mt-5 w-full py-2 bg-gradient-to-r from-red-600 to-yellow-500 rounded-lg">
              Đặt tour ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTour;
