import React from "react";

const HeroSection = () => {
  return (
   <section
  className=" relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 md:px-12 bg-cover bg-no-repeat bg-blend-overlay"
  style={{
    backgroundImage: `
      linear-gradient(to bottom, rgba(37,99,235,0.8), rgba(147,197,253,0.4), rgba(255,255,255,0.2)),
      url("/services-images/bg.svg")
    `,
    backgroundPosition: "center 20%", // pushes image slightly down
  }}
>
  {/* Optional: extra top padding to move text slightly down */}
  <div className="mt-10 relative z-10 text-center text-[#176fd3] max-w-4xl pt-10 md:pt-2 ">
    <h1 className="text-4xl md:text-5xl font-bold mb-4  text-[#0e579c]">
      Optimize Your Costs with Mobilia Consulting
    </h1>
    <p className="text-lg md:text-xl ">
      We help mid-sized businesses uncover hidden savings in their fixed
      expenses — without changing a single provider.
    </p>
  </div>
</section>

  );
};

export default HeroSection;
