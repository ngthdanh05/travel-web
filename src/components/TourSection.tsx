import { tours } from "../data/tours";
import TourCard from "./TourCard";

const TourSection = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-red-600 to-yellow-400 text-transparent bg-clip-text">
            Chương trình tour
          </span>
        </h2>

        {/* List */}
        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourSection;
