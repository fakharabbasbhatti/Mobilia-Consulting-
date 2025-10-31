import React from 'react';

// --- INLINE SVG ICONS (Required for the component to function without external dependencies) ---
const IconHandshake = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 14l-6 6M10 14h10a2 2 0 002-2v-4a2 2 0 00-2-2h-10l6 6M6 4l6 6M6 4h10a2 2 0 012 2v4a2 2 0 01-2 2h-10l6-6"/>
  </svg>
);

const IconUsers = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
);

const IconLightbulb = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6"/><path d="M10 22h4"/><path d="M15 15.82a4 4 0 004-3.95A7.44 7.44 0 0012 2C7.94 2 5 5.03 5 8.93a3.83 3.83 0 003.88 3.88c.84 0 1.63-.17 2.3-.49L12 17l.88-4.7c.67.32 1.46.49 2.3.49z"/>
  </svg>
);

const IconShield = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
// -----------------------------------------------------------------------------

const ValuesSection = () => {
  const values = [
    {
      icon: <IconHandshake className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      title: "Integrity",
      text: "We prioritize honesty and full transparency, ensuring trust in every partnership and decision.",
      delay: 0,
    },
    {
      icon: <IconUsers className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      title: "Collaboration",
      text: "We believe shared success comes from actively partnering with our clients, listening, and co-creating solutions.",
      delay: 150,
    },
    {
      icon: <IconLightbulb className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      title: "Innovation",
      text: "We foster a culture of creative thinking, constantly evolving to deliver cutting-edge solutions and value.",
      delay: 300,
    },
    {
      icon: <IconShield className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      title: "Excellence",
      text: "We commit to delivering the highest quality in performance, service, and outcome for all stakeholders.",
      delay: 450,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24 font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Header - data-aos="fade-up" on the main container for the header */}
        <div data-aos="fade-up" className="mb-12 md:mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Our Foundation
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-2">
            Principles That Drive Us
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            These core values define our culture, guide our decisions, and ensure we exceed expectations in every project.
          </p>
        </div>

        {/* Values Grid - Staggered AOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((val, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 flex flex-col items-center 
                         hover:shadow-2xl hover:scale-[1.03] transition duration-500 transform cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={val.delay} // Staggered delay for each card
            >
              {/* Icon Container (Attractive Design) */}
              <div className="w-16 h-16 md:w-20 md:h-20 bg-teal-600 rounded-full flex items-center justify-center 
                              ring-4 ring-teal-200 mb-6 shadow-lg">
                {val.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{val.title}</h3>
              <p className="text-gray-600 text-base flex-grow">
                {val.text}
              </p>
              
              {/* Added a subtle button/link element for a professional touch */}
              <div className="mt-4">
                  <span className="text-teal-600 font-medium text-sm hover:text-teal-800 transition duration-300">
                      Learn More &rarr;
                  </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};