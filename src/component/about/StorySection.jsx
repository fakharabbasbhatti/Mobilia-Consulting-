import React from "react";
import { FaRocket, FaArrowRight } from "react-icons/fa"; // Changed icon for a more dynamic feel

const StorySection = () => {
  return (
    <section
      // Modern, professional background with a subtle, clean gradient
      className="relative bg-white py-10 md:py-18 text-gray-800 overflow-hidden"
      id="story"
    >
      {/* 🚀 Decorative Background Shapes (Subtle & Dynamic) 🚀 */}
      {/* Top Left Gradient Blob */}
      <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-[#0A3D62]/5 rounded-full blur-3xl opacity-50 animate-slow-pulse"></div>
      {/* Bottom Right Chevron/Wave Shape (for structure) */}
      <div className="absolute bottom-0 right-0 w-full h-1/4 bg-[#E0F7FA] opacity-50 clip-path-polygon-0-100-100-100-100-0-50-25 transition-all duration-1000"></div>

      <div className="relative container mx-auto px-3 md:px-6 max-w-7xl">
        <div className="lg:flex items-center gap-16">
          {/* ===== Text side (Primary focus on story) ===== */}
          <div className="lg:w-1/2 lg:order-2">
            {/* 💡 Sub-Heading (Contextual label) */}
            <p
              data-aos="fade-right"
              data-aos-duration="600"
              className="text-lg font-semibold uppercase tracking-widest text-[#007BFF] mb-3"
            >
              Our Foundation
            </p>

            {/* 🖋️ Heading (Bold and Impactful) */}
            <h2
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="100"
              className="text-4xl md:text-6xl font-extrabold text-[#0A3D62] mb-8 leading-tight"
            >
              Driving <span className="text-[#007BFF]">Excellence</span>, Building Trust.
            </h2>

            {/* 📝 Paragraph 1 (Clear and detailed) */}
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              className="text-xl leading-relaxed text-gray-600 mb-6"
            >
              Founded on the principle of **measurable results**, Mobilia Consulting began with a clear mission: to transform complex operational challenges into strategic advantages. We specialize in streamlining indirect spend, turning hidden costs into significant savings.
            </p>

            {/* 📝 Paragraph 2 (Focus on partnership) */}
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
              className="text-xl leading-relaxed text-gray-600 mb-10"
            >
              Our approach is **data-driven and deeply personal**. We don't just offer advice; we forge long-term partnerships, operating globally to deliver sustained financial growth and peace of mind for every client.
            </p>

            {/* 🔗 Call-to-Action Button (Interactive and attractive) */}
            <div
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-delay="700"
            >
              <button className="flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-[#007BFF] rounded-full shadow-lg shadow-[#007BFF]/50 hover:bg-[#0A3D62] transform hover:scale-[1.03] transition duration-300 ease-in-out group">
                Discover Our Impact
                <FaArrowRight className="ml-3 group-hover:translate-x-1 transition duration-300" />
              </button>
            </div>
          </div>

          {/* ===== Image side (Visual appeal) ===== */}
          <div
            className="mt-16 lg:mt-0 lg:w-1/2 lg:order-1"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="relative group">
              <img
                src="https://media.istockphoto.com/id/1492995618/photo/anxious-young-woman-sharing-her-struggles-with-her-peers-during-a-group-therapy-session.jpg?s=612x612&w=0&k=20&c=ZZ9OC8sAgPd0m-l9z8GYDboJ3m2u6JyTpluyVSoqpAQ="
                alt="Professional team collaborating on strategy"
                // Rounded corners and stronger shadow for premium feel
                className="rounded-3xl xl:rounded-[40px] shadow-2xl w-full object-cover aspect-video md:aspect-square transform group-hover:scale-[1.02] transition-all duration-700 border-4 border-white"
              />
              {/* Overlay for visual effect (Icon and badge) */}
              <div className="absolute top-4 left-4 p-3 bg-white rounded-xl shadow-xl transform rotate-[-5deg] group-hover:rotate-0 transition duration-500">
                <FaRocket className="text-[#007BFF] text-3xl" />
              </div>
              {/* Subtle bottom gradient overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62]/30 via-transparent rounded-3xl xl:rounded-[40px] opacity-100"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;