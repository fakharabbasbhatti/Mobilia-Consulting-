import React from "react";
import { FaUsers, FaHandshake, FaShieldAlt } from "react-icons/fa";

const ValuesSection = () => {
  const values = [
    {
      icon: <FaHandshake />,
      title: "Integrity",
      text: "We value honesty and transparency in every engagement.",
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      text: "We partner with our clients to achieve shared success.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Excellence",
      text: "We pursue quality and innovation in everything we do.",
    },
  ];

  return (
    <section className="bg-white py-20 text-[#333]" data-aos="fade-up">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#003E6B] mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <div
              key={i}
              className="bg-[#F7F9FC] rounded-2xl p-8 shadow hover:shadow-lg transition"
            >
              <div className="text-[#00A3E8] text-4xl mb-4 mx-auto">{val.icon}</div>
              <h3 className="text-xl font-semibold text-[#003E6B] mb-2">{val.title}</h3>
              <p className="text-gray-700">{val.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
