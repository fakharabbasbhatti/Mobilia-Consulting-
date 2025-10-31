import React from "react";
import { FaSearch, FaCogs, FaChartLine, FaHandshake } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaSearch />,
      step: "01",
      title: "Comprehensive Assessment",
      desc: "We conduct a thorough analysis of your current vendor contracts and spending patterns to identify optimization opportunities.",
      features: ["Contract Review", "Spend Analysis", "Benchmarking"],
    },
    {
      icon: <FaCogs />,
      step: "02",
      title: "Strategic Implementation",
      desc: "Our experts develop and execute customized optimization strategies, leveraging our industry relationships and negotiation expertise.",
      features: ["Vendor Negotiation", "Process Optimization", "Contract Restructuring"],
    },
    {
      icon: <FaChartLine />,
      step: "03",
      title: "Sustainable Savings",
      desc: "We ensure ongoing value through continuous monitoring, performance tracking, and regular optimization reviews.",
      features: ["Performance Monitoring", "Regular Audits", "Continuous Improvement"],
    },
  ];

  return (
    <section className="py-12 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#00BFA6]/10 text-[#00BFA6] px-5 py-2 rounded-full text-sm font-semibold mb-4">
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#002B5B] mb-4 leading-tight">
            A Structured Approach to Cost Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven methodology ensures comprehensive analysis, strategic implementation, and sustainable results.
          </p>
        </div>

        {/* Step Cards */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00BFA6] to-[#002B5B] z-0"></div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 200}
                className="relative group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-[#00BFA6]/20 overflow-hidden relative">
                  {/* Step Number Background */}
                  <div className="absolute -top-4 -right-4 text-8xl font-bold text-gray-100/30 z-0 select-none">
                    {step.step}
                  </div>

                  <div className="relative z-10">
                    {/* Icon with gradient background */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00BFA6] to-[#002B5B] rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-[#002B5B] mb-4">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {step.desc}
                    </p>

                    <ul className="space-y-2">
                      {step.features.map((feature, featureIdx) => (
                        <li
                          key={featureIdx}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <div className="w-2 h-2 bg-[#00BFA6] rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Hover Shine Overlay */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                      <div className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1.2s_ease-in-out]"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframes for shine */}
      <style jsx>{`
        @keyframes shine {
          0% {
            left: -75%;
          }
          100% {
            left: 125%;
          }
        }
      `}</style>
    </section>
  );
}
