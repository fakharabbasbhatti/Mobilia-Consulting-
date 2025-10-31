import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 md:px-12 bg-cover bg-no-repeat bg-blend-overlay"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(37,99,235,0.8), rgba(147,197,253,0.4), rgba(255,255,255,0.2)),
          url("/services-images/bg.svg")
        `,
        backgroundPosition: "center 20%",
      }}
    >
      {/* Optional floating glow */}
      <div className="absolute w-[400px] h-[400px] bg-[#00BFA6]/20 rounded-full blur-[150px] top-10 left-10 animate-pulse pointer-events-none"></div>
      <div className="absolute w-[300px] h-[300px] bg-[#468DE0]/20 rounded-full blur-[120px] bottom-10 right-10 animate-pulse pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-4xl pt-10 md:pt-2">
        {/* Heading */}
        <h1
          data-aos="fade-down"
          data-aos-delay="100"
          className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0e579c] leading-tight drop-shadow-md"
        >
          Optimize Your Costs with <span className="text-[#06ae98]">Mobilia Consulting</span>
        </h1>

        {/* Subtitle */}
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
        >
          We help mid-sized businesses uncover hidden savings in their fixed expenses — without changing a single provider.
        </p>

        {/* CTA Button */}
        <div data-aos="zoom-in" data-aos-delay="700" className="mt-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-[#00BFA6] text-white font-semibold text-lg shadow-md hover:bg-[#009e8f] transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
