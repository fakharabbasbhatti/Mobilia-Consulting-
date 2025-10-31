import React from "react";
import CountUp from "react-countup";
import {
  FaChartLine,
  FaDollarSign,
  FaUsers,
  FaAward,
} from "react-icons/fa";

export default function ResultsMetrics() {
  const metrics = [
    {
      icon: <FaChartLine />,
      value: 40,
      prefix: "",
      suffix: "%",
      label: "Average Savings",
      description: "on indirect expenses",
    },
    {
      icon: <FaDollarSign />,
      value: 100,
      prefix: "$",
      suffix: "M+",
      label: "Client Savings",
      description: "delivered to date",
    },
    {
      icon: <FaUsers />,
      value: 98,
      prefix: "",
      suffix: "%",
      label: "Client Retention",
      description: "year over year",
    },
    {
      icon: <FaAward />,
      value: 100,
      prefix: "",
      suffix: "%",
      label: "Performance-Based",
      description: "no savings, no fee",
    },
  ];

  return (
    <section className="relative py-12 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Subtle decorative gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#00BFA6_0%,transparent_60%)] opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#002B5B_0%,transparent_70%)] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="text-[#00BFA6] font-semibold uppercase tracking-widest mb-3">
            Results That Speak
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Proven Results, Guaranteed Performance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our performance-based approach drives measurable savings for top enterprises across industries.
          </p>
          <div className="mt-6 w-24 h-1 mx-auto bg-gradient-to-r from-[#00BFA6] to-[#00a38f] rounded-full"></div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {metrics.map((metric, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="relative group bg-white/70 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-200 hover:shadow-[0_10px_40px_rgba(0,191,166,0.25)] hover:border-[#00BFA6]/40 transition-all duration-500 p-10 text-center overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#00BFA6]/10 via-transparent to-transparent"></div>

              {/* Icon */}
              <div className="relative z-10 flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#00BFA6] to-[#009C8B] text-white text-3xl shadow-lg shadow-[#00BFA6]/30 transform group-hover:scale-110 transition-transform duration-500">
                  {metric.icon}
                </div>
              </div>

              {/* Animated Counter */}
              <div className="relative z-10 text-4xl lg:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
                <CountUp
                  start={0}
                  end={metric.value}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </div>

              {/* Label */}
              <div className="relative z-10 text-lg font-semibold text-gray-800 mb-1">
                {metric.label}
              </div>

              {/* Description */}
              <div className="relative z-10 text-gray-600 text-sm">
                {metric.description}
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00BFA6] to-[#00a38f] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Accent Glows */}
      <div className="absolute top-20 left-10 w-56 h-56 bg-[#00BFA6]/10 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-16 w-64 h-64 bg-[#002B5B]/10 blur-3xl rounded-full animate-pulse"></div>
    </section>
  );
}
