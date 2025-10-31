import React from "react";
import { FaLightbulb } from "react-icons/fa";

const StorySection = () => {
  return (
    <section
      className="bg-white py-20 text-[#333]"
      data-aos="fade-right"
    >
      <div className="container mx-auto px-6 md:flex items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1581091215367-59ab6b7a0a9e"
            alt="Mobilia team"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <FaLightbulb className="text-[#00A3E8] text-3xl mb-4" />
          <h2 className="text-3xl font-bold text-[#003E6B] mb-4">Our Story</h2>
          <p className="text-lg leading-relaxed mb-4">
            Founded with a passion for operational excellence, Mobilia Consulting helps
            organisations streamline their indirect spend. Our experts leverage data,
            analytics and deep industry insight to uncover value often hidden in contracts.
          </p>
          <p className="text-lg leading-relaxed">
            We operate globally — yet personally — building long-term partnerships with
            every client.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
