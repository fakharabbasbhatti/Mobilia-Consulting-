import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CTASection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#00BFA6] to-[#468DE0] py-20 text-center text-white relative overflow-hidden">
      {/* Optional floating glow */}
      <div className="absolute w-[400px] h-[400px] bg-[#ffffff33] rounded-full blur-[180px] top-10 left-10 animate-pulse pointer-events-none"></div>
      <div className="absolute w-[300px] h-[300px] bg-[#ffffff22] rounded-full blur-[120px] bottom-10 right-10 animate-pulse pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2
          data-aos="fade-down"
          className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-md"
        >
          Ready to Discover Hidden Savings?
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg mb-8 leading-relaxed"
        >
          Partner with Mobilia Consulting to identify cost-saving opportunities
          in your vendor contracts — with no risk and no upfront fees.
        </p>

        <button
          data-aos="zoom-in"
          data-aos-delay="400"
          className="bg-white text-[#002B5B] font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Request a Free Savings Analysis
        </button>
      </div>
    </section>
  );
};

export default CTASection;
