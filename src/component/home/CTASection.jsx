import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#002B5B] to-[#0A66C2] text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10 animate-pulse">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div data-aos="zoom-in" className="space-y-6">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold border border-white/20">
            Ready to Transform Your Cost Structure?
          </div>

          <h2 className="text-5xl  font-bold mb-4 leading-tight drop-shadow-md">
            Start Your Savings Journey Today
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of forward-thinking companies that have unlocked millions in savings through our performance-based cost optimization platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
            <button className="bg-white text-[#0A66C2] px-2 py-2 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3 group">
              Begin Free Assessment <FaArrowRight className="transition-transform group-hover:translate-x-2" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#0A66C2] px-5 py-2 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Speak with an Expert
            </button>
          </div>

          <div className="mt-6 text-blue-100 text-sm md:text-base">
            No upfront costs • No long-term contracts • Results guaranteed
          </div>
        </div>
      </div>
    </section>
  );
}
