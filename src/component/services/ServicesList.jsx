import React from "react";

const ServicesList = () => {
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
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0e579c]">
          Areas We Optimize
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Mobilia Consulting helps organizations reduce operational costs by
          identifying inefficiencies across vendor contracts — without changing
          your existing providers or disrupting daily operations.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Gradient Overlay: Bottom blue to top white */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#468de0]/90  to-white/10"></div>

            {/* Text content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10">
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
