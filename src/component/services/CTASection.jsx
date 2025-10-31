import React from "react";

const CTASection = () => {
  return (
    <section className="bg-blue-600 py-16 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Discover Hidden Savings?
      </h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        Partner with Mobilia Consulting to identify cost-saving opportunities
        in your vendor contracts — with no risk and no upfront fees.
      </p>
      <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
        Request a Free Savings Analysis
      </button>
    </section>
  );
};

export default CTASection;
