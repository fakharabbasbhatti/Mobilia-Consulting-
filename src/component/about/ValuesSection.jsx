import React from "react";
import { FaUsers, FaHandshake, FaShieldAlt } from "react-icons/fa";

const ValuesSection = () => {
  const values = [
    {
      icon: <FaHandshake />,
      title: "Integrity",
      text: "We value honesty, transparency, and accountability in every engagement.",
      delay: 200,
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      text: "We partner closely with our clients to achieve shared, long-term success.",
      delay: 400,
    },
    {
      icon: <FaShieldAlt />,
      title: "Excellence",
      text: "We pursue quality, innovation, and continuous improvement in all we do.",
      delay: 600,
    },
  ];

  return (
    <section
      id="values"
      className="relative bg-gradient-to-br from-[#F5FAFF] via-white to-[#E6F2FA] py-15 md:py-20 text-[#333] overflow-hidden"
    >
      {/* ===== Decorative Background Shapes ===== */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-[#00A3E8]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#003E6B]/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative container mx-auto px-3 md:px-6 text-center">
        {/* ===== Section Heading ===== */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl md:text-5xl font-extrabold text-[#003E6B] mb-8"
        >
          Our Values
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 mb-16"
        >
          At <span className="text-[#00A3E8] font-semibold">Mobilia Consulting</span>, our values define
          who we are and how we deliver results — building trusted relationships through
          integrity, teamwork, and a relentless pursuit of excellence.
        </p>

        {/* ===== Values Grid ===== */}
        <div className="grid md:grid-cols-3 gap-10">
          {values.map((val, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={val.delay}
              className="relative bg-white/90 backdrop-blur-md p-5 md:p-10 rounded-3xl shadow-lg hover:shadow-[0_10px_40px_rgba(0,163,232,0.25)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                <div className="p-6 bg-[#00A3E8]/10 rounded-full shadow-md">
                  <div className="text-[#00A3E8] text-5xl animate-pulse">
                    {val.icon}
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#003E6B] mb-3">
                {val.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{val.text}</p>

              <div className="mt-6 w-16 h-1 bg-[#00A3E8] mx-auto rounded-full"></div>
            </div>
          ))}
        </div>

        {/* ===== CTA Button ===== */}
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="mt-10 md:mt-16 flex justify-center"
        >
          <button className="px-8 py-3 bg-[#00BFA6] text-white font-semibold rounded-full shadow-lg hover:bg-[#002B5B] hover:shadow-2xl transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
