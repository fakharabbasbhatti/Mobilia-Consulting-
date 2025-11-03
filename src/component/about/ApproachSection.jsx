import React from "react";
// Enhanced icon set for a professional visual look
import { 
  FaSearch,    // For Analyze/Audit
  FaRocket,    // For Optimize/Strategy
  FaRecycle    // For Sustain/Governance
} from "react-icons/fa";

const ApproachSection = () => {
  // Define card data with professional titles, detailed descriptions, and icons
  const approachSteps = [
    { 
      title: "Deep-Dive Analysis", 
      desc: "A thorough, data-driven audit of current spending, technology stack, and vendor contracts to identify every saving opportunity.",
      icon: FaSearch,
      aosDelay: "200" // Staggered delay for card reveal
    },
    { 
      title: "Strategic Optimization", 
      desc: "Leveraging expert benchmarks to negotiate contracts, streamline processes, and implement best-practice solutions for immediate impact.", 
      icon: FaRocket,
      aosDelay: "400"
    },
    { 
      title: "Sustainable Governance", 
      desc: "Implementing continuous monitoring and governance models that ensure long-term, self-sustaining financial efficiency and predictability.", 
      icon: FaRecycle,
      aosDelay: "600"
    },
  ];

  return (
    // Outer section with light background and responsive padding
    <section className="bg-gray-50 py-10 sm:py-20 text-gray-800 font-sans" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Icon, Title, and Divider */}
        <div className="flex flex-col items-center mb-12">
            {/* The main icon uses a vibrant accent color */}            
            <h2 className="text-4xl font-extrabold text-blue-900 tracking-tight sm:text-5xl">
                Our Proven Methodology
            </h2>
            {/* Professional accent divider */}
            <div className="w-20 h-1 bg-teal-600 mt-3 rounded-full"></div>
        </div>

        {/* Subtitle/Overview Text */}
        <p 
          className="max-w-4xl mx-auto text-xl leading-relaxed text-gray-600 mb:12 md:mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We blend human expertise with predictive analytics, ensuring our methodology delivers **transparent, rapid, and measurable outcomes** that redefine your financial efficiency.
        </p>

        {/* Approach Cards Grid - Fully Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-10">
          {approachSteps.map((item, index) => {
            const IconComponent = item.icon; // Dynamic Icon assignment
            return (
              <div
                key={index}
                // Card styling: rounded, lifted shadow, accent border, and scale-up hover effect
                className="bg-white rounded-3xl p-4 md:p-8 shadow-xl border-t-4 border-teal-500 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={item.aosDelay} // Staggered animation
              >
                
                {/* Card Icon Container */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-teal-500 rounded-full inline-block shadow-lg">
                    <IconComponent className="text-3xl text-white" />
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-2xl font-bold text-blue-800 mb-3">
                  {item.title}
                </h3>
                
                {/* Card Description */}
                <p className="text-base text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Call to Action Button */}
        <div className="mt-16" data-aos="fade-up" data-aos-delay="800">
            <button
                // Button styling: large, rounded, shadowed, and animated on hover
                className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-[#00BFA6] hover:bg-[#002B5B] focus:outline-none  transition duration-300 transform hover:translate-y-[-3px] active:scale-95"
            >
                Start Your Saving
            </button>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;