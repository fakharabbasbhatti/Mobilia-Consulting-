import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CTASection = () => {
  return (
    <section
      className="bg-[#003E6B] text-white py-20 text-center"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Uncover Your Savings Potential?
        </h2>
        <p className="text-lg mb-8 text-gray-200 max-w-xl mx-auto">
          Let’s discuss how Mobilia Consulting can deliver measurable impact for your business.
        </p>
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#00A3E8] rounded-full text-white font-semibold hover:bg-[#0090D0] transition-all">
          Book a Free Consultation <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default CTASection;
