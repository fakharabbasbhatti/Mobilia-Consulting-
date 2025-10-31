import React from "react";
import { FaBuilding } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="relative bg-gradient-to-br from-[#003E6B] to-[#005FA3] text-white py-24"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-6 text-center">
        <FaBuilding className="text-5xl mx-auto mb-4 text-[#00A3E8]" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Mobilia Consulting
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100">
          Driving measurable savings and strategic growth for businesses worldwide.
        </p>
      </div>
    </section>
  );
};

export default Hero;
