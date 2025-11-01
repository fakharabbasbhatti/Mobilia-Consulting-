import React from "react";
import { FaRecycle, FaUsersCog } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaRecycle />,
      title: "Indirect Spend Optimization",
      desc: "We perform deep analysis on existing bills and contracts to uncover overcharges and recover lost value.",
      bgImg: "https://images.unsplash.com/photo-1581091215367-8f7e3ff576a1?auto=format&fit=crop&w=1000&q=80",
    },
    {
      icon: <FaUsersCog />,
      title: "Unified Vendor Management",
      desc: "We negotiate smarter vendor terms and streamline all services under one management system.",
      bgImg: "https://images.unsplash.com/photo-1556742502-ec7c0e9f9b74?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              className="relative overflow-hidden rounded-3xl shadow-lg group cursor-pointer transition-all duration-500"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-25 transition-opacity duration-700"
                style={{ backgroundImage: `url(${service.bgImg})` }}
              ></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/50 rounded-3xl"></div>

              {/* Card Content */}
              <div className="relative p-10 flex flex-col items-center text-center z-10">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-[#00BFA6] to-[#002B5B] text-white text-4xl rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-[#002B5B] group-hover:text-[#00BFA6] transition-colors duration-500">
                  {service.title}
                </h3>

                <p className="text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
