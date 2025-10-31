import React from "react";
import { FaBuilding, FaHeartbeat, FaIndustry, FaShoppingBag, FaMicrochip, FaUniversity } from "react-icons/fa";

export default function TrustBadges() {
  const companies = [
    {
      name: "Fortune 500 Companies",
      icon: <FaBuilding />,
    },
    {
      name: "Healthcare Organizations",
      icon: <FaHeartbeat />,
    },
    {
      name: "Manufacturing Leaders",
      icon: <FaIndustry />,
    },
    {
      name: "Retail Chains",
      icon: <FaShoppingBag />,
    },
    {
      name: "Technology Firms",
      icon: <FaMicrochip />,
    },
    {
      name: "Financial Institutions",
      icon: <FaUniversity />,
    },
  ];

  return (
    <section className="relative py-12 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden border-y border-gray-200">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_30%,#00BFA6_0%,transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className="text-center mb-14"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="text-[#00BFA6] font-semibold uppercase tracking-wider mb-3">
            Our Clients
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We’ve partnered with global enterprises across multiple sectors — 
            empowering them to reduce costs, improve vendor performance, and drive measurable business outcomes.
          </p>
          <div className="mt-6 w-24 h-1 mx-auto bg-gradient-to-r from-[#00BFA6] to-[#00a38f] rounded-full"></div>
        </div>

        {/* Company Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center justify-center">
          {companies.map((company, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-5 rounded-2xl bg-white shadow-lg shadow-gray-200/50 border border-gray-100 group-hover:border-[#00BFA6]/30 group-hover:shadow-[#00BFA6]/20 transition-all duration-300">
                <div className="text-4xl text-gray-700 group-hover:text-[#00BFA6] transition-colors duration-300">
                  {company.icon}
                </div>
              </div>
              <p className="text-gray-800 font-semibold text-sm lg:text-base text-center group-hover:text-[#00BFA6] transition-colors duration-300">
                {company.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Glow Effects */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-[#00BFA6]/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-52 h-52 bg-[#00BFA6]/10 blur-3xl rounded-full animate-pulse"></div>
    </section>
  );
}
