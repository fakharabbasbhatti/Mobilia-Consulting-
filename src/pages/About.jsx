import React from "react";
import Hero from "../component/about/Hero";
import StorySection from "../component/about/StorySection";
import ApproachSection from "../component/about/ApproachSection";
import ValuesSection from "../component/about/ValuesSection";
import CTASection from "../component/about/CTASection";

const About = () => {
  return (
    <div>
      <Hero/>
      <StorySection/>
      <ApproachSection/>
      <ValuesSection/>
      <CTASection/>
    </div>
  );
};

export default About;
