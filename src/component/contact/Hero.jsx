import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 bg-linear-to-b from-[#468DE0] via-[#468DE1] to-[#2b6cb0] overflow-hidden">
      
      {/* 🌟 Floating Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute w-[500px] h-[500px] bg-[#ffffff33] rounded-full blur-[180px] top-10 left-10"
      />

      {/* 🔹 Hero Heading */}
      <h1 className="text-5xl md:text-6xl pt-20 font-extrabold text-white leading-tight drop-shadow-md space-y-3">
        <div data-aos="fade-left" data-aos-delay="100">
          Let’s <span className="text-[#ffde59]">Connect</span>
        </div>
        <div data-aos="fade-right" data-aos-delay="400">
          & Build Something{" "}
          <span className="text-[#ffffff]">Extraordinary</span>
        </div>
      </h1>

      {/* 🔹 Subtitle */}
      <p
        data-aos="fade-up"
        data-aos-delay="600"
        className="text-gray-100 mt-5 max-w-2xl text-lg leading-relaxed"
      >
        I’m always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Let’s make your ideas a
        reality together!
      </p>

      {/* 🔹 Call to Action */}
      <div
        data-aos="zoom-in"
        data-aos-delay="800"
        className="mt-8"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-linear-to-r from-[#ffde59] to-[#facc15] text-[#1a202c] font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(255,222,89,0.5)] transition-all duration-300"
        >
          Contact Me <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
