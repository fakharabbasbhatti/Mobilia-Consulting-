import React from "react";

export default function SpendCategories() {
  const categories = [
    "Wireless & Wireline Telecom",
    "Payroll Processing",
    "Waste Removal & Recycling",
    "Merchant Services (Credit Card Fees)",
    "Uniforms & Laundry",
    "Medical & Office Supplies",
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] mb-12">
          Spend Categories We Optimize
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="relative p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group cursor-pointer"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00BFA6]/20 to-[#002B5B]/10 opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

              {/* Text */}
              <p className="relative text-gray-800 font-semibold text-lg group-hover:text-[#002B5B] transition-colors duration-300">
                {cat}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
