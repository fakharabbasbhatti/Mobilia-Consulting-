import React from "react";
import { FaChartLine } from "react-icons/fa";

const ApproachSection = () => {
  return (
    <section
      className="bg-[#F7F9FC] py-20 text-[#333]"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-6 text-center">
        <FaChartLine className="text-[#00A3E8] text-4xl mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-[#003E6B] mb-6">Our Approach</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-6">
          We believe in transparency, speed and measurable outcomes. Our
          methodology combines analytics-driven audits with human expertise —
          ensuring savings that are sustainable and strategic.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            { title: "Analyze", desc: "Detailed audit of spend & vendor contracts." },
            { title: "Optimize", desc: "Negotiate, benchmark, and improve processes." },
            { title: "Sustain", desc: "Continuous monitoring for long-term success." },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-semibold text-[#003E6B] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
