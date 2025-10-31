import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ValueProposition from "../component/home/ValueProposition";
import HowItWorks from "../component/home/HowItWorks";
import Services from "../component/home/Services";
import SpendCategories from "../component/home/SpendCategories";
import CTASection from "../component/home/CTASection";
import Hero from "../component/Home/Hero";
import TrustBadges from "../component/home/TrustBadges";
import ResultsMetrics from "../component/home/ResultsMetrics";
import Faq from "../component/home/Faq";

export default function Home() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      offset: 100 
    });
  }, []);

  return (
    <div className="bg-white overflow-x-hidden text-gray-900">
      <Hero/>
      <TrustBadges />
      <ResultsMetrics />
      <ValueProposition />
      <HowItWorks />
      <Services />
      <SpendCategories />
      <Faq/>
      <CTASection />
    </div>
  );
}