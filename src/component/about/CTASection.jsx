import React from "react";
import { FaArrowRight } from "react-icons/fa";

/**
 * CTASection - Professional, Attractive, Responsive Call To Action
 * - Modern gradient background with overlay shapes
 * - Large, bold heading and engaging subtext
 * - AOS animation on all elements
 * - Premium CTA button with icon and effects
 * - Responsive for all breakpoints
 */
const CTASection = () => {
  return (
    <section
      className="relative bg-gradient-to-br from-[#003E6B] via-[#005B96] to-[#00A3E8] text-white py-24 text-center overflow-hidden"
      id="cta"
      data-aos="fade-up"
    >
      {/* Decorative blurred shapes */}
      <div className="absolute top-[-5rem] left-[-5rem] w-40 h-40 bg-[#00A3E8]/20 rounded-full blur-[80px] animate-pulse z-0"></div>
      <div className="absolute bottom-[-6rem] right-[-6rem] w-52 h-52 bg-white/10 rounded-full blur-[90px] animate-pulse z-0"></div>

      <div className="relative z-10 container mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          Ready to Uncover Your Savings Potential?
        </h2>
        <p
          className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Let’s discuss how <span className="text-[#00A3E8] font-bold">Mobilia Consulting</span> can deliver measurable impact for your business.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#00A3E8] to-[#003E6B] text-white text-lg font-semibold shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 focus:ring-2 focus:ring-[#00A3E8] focus:outline-none"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          Book a Free Consultation <FaArrowRight className="text-xl transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

export default CTASection;