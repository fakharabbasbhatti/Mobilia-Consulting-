import React from "react";
import { FaBuilding } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center text-center h-[90vh] overflow-hidden bg-[#003E6B]">
      {/* ===== Background Image Layer ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')",
        }}
      ></div>

      {/* ===== Overlay Gradient with Taller Clip Path ===== */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#003E6B]/95 via-[#005FA3]/90 to-[#003E6B]/95"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 75%, 0 100%)", // Raised curve height
        }}
      ></div>

      {/* ===== Content ===== */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-white">
        {/* Icon */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex items-center justify-center mb-6"
        >
          <FaBuilding className="text-7xl md:text-8xl text-[#00A3E8] drop-shadow-2xl animate-pulse" />
        </div>

        {/* Main heading */}
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
        >
          Mobilia Consulting
        </h1>

        {/* Subheading */}
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-100 font-light"
        >
          Empowering organizations with actionable insights and measurable
          savings for sustainable business growth.
        </p>

        {/* Decorative line */}
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-8 w-28 h-1 bg-[#00A3E8] rounded-full shadow-lg"
        ></div>

        {/* CTA button */}
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="mt-10 relative z-20"
        >
          <button className="px-8 py-3 bg-[#00A3E8] hover:bg-[#0090D0] transition-all duration-300 text-white font-semibold rounded-full shadow-md hover:shadow-2xl">
            Learn More
          </button>
        </div>
      </div>

      {/* ===== Decorative Animated Shapes ===== */}
      <div className="absolute top-20 left-16 w-40 h-40 bg-[#00A3E8]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-56 h-56 bg-[#00A3E8]/25 rounded-full blur-3xl animate-pulse"></div>

      {/* ===== Bottom Wave Shape (Raised Height) ===== */}
      <svg
        className="absolute bottom-[-1px] left-0 w-full z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,256L80,234.7C160,213,320,171,480,149.3C640,128,800,128,960,144C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Hero;
