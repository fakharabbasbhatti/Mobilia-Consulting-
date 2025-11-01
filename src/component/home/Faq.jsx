import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import faq from "../../assets/Images/faq.jpg";

const faqs = [
  {
    question: "What is a contingency-based fixed-cost reduction service?",
    answer:
      "This service identifies potential savings in your recurring expenses, and fees are only charged based on the actual savings achieved—no upfront costs.",
  },
  {
    question: "How does contingency-based pricing work?",
    answer:
      "We analyze and optimize your current costs, charging a percentage of the savings achieved, ensuring no fees unless measurable results are delivered.",
  },
  {
    question: "What types of expenses do you typically focus on reducing?",
    answer:
      "We focus on indirect spend categories, including Wireless Telecom, Waste Removal & Recycling, Payroll Processing, Merchant Services, Laundry & Uniforms, Compressed Gases, Medical Supplies, and Medical Waste.",
  },
  {
    question: "Will we need to change vendors to achieve savings?",
    answer:
      "Usually, no. We work with your existing vendors to negotiate better terms without changing service quality or providers unless specifically requested.",
  },
  {
    question: "How long does the cost reduction process take?",
    answer:
      "The initial assessment generally takes a few weeks, with savings implementation timelines varying based on contract complexity.",
  },
  {
    question: "What level of savings can we expect?",
    answer:
      "Savings vary by company size and expense category, but most clients experience reductions of 10-30% in the targeted spend areas.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#002B5B] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Answers to common questions about Mobilia Consulting’s cost optimization and zero-risk services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Collapsible FAQs */}
          <div className="space-y-4">
            {faqs.map((faqItem, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-semibold text-lg hover:bg-gray-50 focus:outline-none"
                  onClick={() => toggleIndex(idx)}
                >
                  {faqItem.question}
                  <span className="text-[#00BFA6] text-xl">
                    {activeIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>

                <div
                  ref={(el) => (contentRefs.current[idx] = el)}
                  className="px-6 overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight:
                      activeIndex === idx
                        ? contentRefs.current[idx]?.scrollHeight + "px"
                        : "0px",
                  }}
                >
                  <p className="pb-4 text-gray-600">{faqItem.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Image with Shine Effect */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl group h-[500px]"
            data-aos="fade-left"
          >
            <img
              src={faq}
              alt="FAQ Illustration"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />

            {/* Shine Effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-32 h-full bg-white/20 blur-3xl rotate-12 animate-[shine_2s_linear_infinite]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Keyframes for Shine */}
      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(-100%) rotate(12deg); }
            50% { transform: translateX(100%) rotate(12deg); }
            100% { transform: translateX(100%) rotate(12deg); }
          }
        `}
      </style>
    </section>
  );
}
