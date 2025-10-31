import React from "react";
import {
  FaShieldAlt,
  FaSearchDollar,
  FaHandshake,
  FaChartBar,
} from "react-icons/fa";
import mob3 from "../../assets/Images/mob3.jpeg"

export default function ValueProposition() {
  const features = [
    {
      icon: <FaSearchDollar />,
      title: "Comprehensive Spend Analysis",
      description:
        "Advanced analytics and industry expertise combine to identify overlooked cost-saving opportunities in your vendor relationships.",
    },
    {
      icon: <FaHandshake />,
      title: "Strategic Vendor Negotiation",
      description:
        "Leverage our established relationships and negotiation expertise to secure optimal terms and pricing structures.",
    },
    {
      icon: <FaChartBar />,
      title: "Continuous Optimization",
      description:
        "Ongoing monitoring and adjustment ensure your savings are sustained and new opportunities are captured over time.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Zero-Risk Engagement",
      description:
        "Our compensation is directly tied to delivered savings, ensuring complete alignment with your financial objectives.",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* ==== CENTERED TITLE SECTION ==== */}
        <div
          data-aos="fade-up"
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-block bg-[#00BFA6]/10 text-[#00BFA6] px-5 py-2 rounded-full text-sm font-semibold mb-6">
            Why Choose Mobilia
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#002B5B] leading-tight mb-4">
            Strategic Cost Optimization for Modern Enterprises
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            In today's competitive landscape, efficient cost management isn't
            just about reduction — it's about strategic optimization. We
            transform your indirect spend from a cost center into a competitive
            advantage.
          </p>
        </div>

        {/* ==== CONTENT GRID ==== */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE – FEATURES */}
          <div data-aos="fade-right" className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 group"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#00BFA6] rounded-lg flex items-center justify-center text-white text-lg shadow-md group-hover:scale-110 group-hover:bg-[#00A48E] transition-all duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#0A66C2] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE – IMAGE WITH SHINE & TITLE OVERLAY */}
          <div
            data-aos="fade-left"
            className="relative group transition-all duration-700"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={mob3}
                  alt="Strategic Cost Analysis"
                  className="w-full h-auto transform transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Shine Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-in-out]"></div>
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>

                {/* Title on Hover Centered */}
                <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-lg tracking-wide">
                    Optimizing Value Through Insight
                  </h3>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl px-5 py-2 border border-gray-100 group-hover:shadow-[#00BFA6]/30 transition-all duration-700"
              data-aos="zoom-in-up"
              data-aos-delay="400"
            >
              <div className="text-2xl font-bold text-[#002B5B] mb-2">$2.8M</div>
              <div className="text-gray-600 text-sm">Average Annual Savings</div>
              <div className="text-[#00BFA6] text-xs font-semibold mt-1">
                Per Client Engagement
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shine Animation Keyframes */}
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
