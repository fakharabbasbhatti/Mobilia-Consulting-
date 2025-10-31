import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesList = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  const services = [
    {
      title: "Wireless & Mobility",
      desc: "We identify hidden fees, unused lines, and overcharges in your wireless bills — often saving up to 40%.",
      image: "/services-images/wireline.jpg",
    },
    {
      title: "Bank & Merchant Fees",
      desc: "We analyze merchant processing and bank fees to uncover hidden interchange costs and reduce recurring charges.",
      image: "/services-images/Merchant.jpg",
    },
    {
      title: "Payroll & HR Services",
      desc: "We renegotiate payroll processing contracts and remove outdated or unnecessary charges.",
      image: "/services-images/payroll.jpg",
    },
    {
      title: "Medical Supplies & Waste",
      desc: "We optimize costs in medical supply procurement and waste disposal — saving significantly without service disruption.",
      image: "/services-images/medical-supplies.jpg",
    },
    {
      title: "Municipal Trash & Recycling",
      desc: "We correct overbilling and optimize pickup schedules to match your actual needs and reduce costs.",
      image: "/services-images/Waste.jpg",
    },
    {
      title: "Laundry and Uniform",
      desc: "We benchmark your electricity, gas, and water rates to uncover better plans and eliminate billing errors.",
      image: "/services-images/laundry.webp",
    },
    {
      title: "Telecom & Internet",
      desc: "We review and optimize your phone and internet contracts, correcting billing errors and securing better rates.",
      image: "/services-images/telecom.jpg",
    },
    {
      title: "Software & Licensing",
      desc: "We identify redundant or unused SaaS licenses and negotiate improved pricing on active ones.",
      image: "/services-images/Licensing.jpg",
    },
    {
      title: "Specialty Gases & Industrial Supplies",
      desc: "We benchmark supplier pricing and eliminate inflated rates common in industrial gas contracts.",
      image: "/services-images/gases.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2
          data-aos="fade-down"
          className="text-3xl md:text-4xl font-bold mb-4 text-[#0e579c]"
        >
          Areas We Optimize
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg text-gray-700 max-w-3xl mx-auto"
        >
          Mobilia Consulting helps organizations reduce operational costs by
          identifying inefficiencies across vendor contracts — without changing
          your existing providers or disrupting daily operations.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="relative h-80 rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:shadow-2xl hover:scale-105 group cursor-pointer"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#468DE0]/90 to-white/10 pointer-events-none transition-all duration-500 group-hover:from-[#00BFA6]/70 group-hover:to-white/10"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10 transition-all duration-500 group-hover:translate-y-[-5px]">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-[#002B5B] transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
