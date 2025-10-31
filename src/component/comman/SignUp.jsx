import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { UserPlus } from "lucide-react";

const Signup = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-[#2250b4] via-[#1e4dba] to-[#468DE0] px-6 py-16 overflow-hidden">

      {/* 🔹 Background Blur Shapes */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#468DE0]/20 blur-[160px] rounded-full "></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#61A5F9]/20 blur-[140px] rounded-full "></div>

      {/* 🔹 Sign Up Card */}
      <div
        data-aos="zoom-in"
        className="w-full max-w-lg bg-[#0E1F45]/70 border border-[#ffffff2b] backdrop-blur-sm rounded-3xl shadow-md p-8 md:p-10 mt-10"
      >
        {/* Header */}
        <div
          data-aos="fade-down"
          className="flex flex-col items-center justify-center mb-6"
        >
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-linear-to-r from-[#468DE0] to-[#61A5F9] shadow-[0_0_25px_rgba(70,141,224,0.5)]">
            <UserPlus size={40} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mt-3 tracking-wide">
            Create Account
          </h2>
          <p className="text-gray-300 text-sm mt-1 text-center">
            Join us today and start your journey!
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5">
          <div data-aos="fade-right" data-aos-delay="100">
            <label className="block text-white mb-1 text-sm">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 bg-[#122a5c]/40 border border-[#ffffff33] text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61A5F9] transition-all duration-300"
              required
            />
          </div>

          <div data-aos="fade-right" data-aos-delay="200">
            <label className="block text-white mb-1 text-sm">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 bg-[#122a5c]/40 border border-[#ffffff33] text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61A5F9] transition-all duration-300"
              required
            />
          </div>

          <div data-aos="fade-left" data-aos-delay="300">
            <label className="block text-white mb-1 text-sm">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 bg-[#122a5c]/40 border border-[#ffffff33] text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61A5F9] transition-all duration-300"
              required
            />
          </div>

          <div data-aos="fade-left" data-aos-delay="400">
            <label className="block text-white mb-1 text-sm">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter password"
              className="w-full p-3 bg-[#122a5c]/40 border border-[#ffffff33] text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61A5F9] transition-all duration-300"
              required
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            data-aos="zoom-in"
            data-aos-delay="500"
            className="w-full py-3 rounded-lg bg-linear-to-r from-[#468DE0] to-[#61A5F9] text-white font-semibold text-lg hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(70,141,224,0.6)] transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex items-center gap-2 mt-6"
        >
          <div className="flex-1 h-px bg-white/20"></div>
          <span className="text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-white/20"></div>
        </div>

        {/* Social Signup */}
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="flex justify-center gap-4 mt-6"
        >
          <button className="w-11 h-11 flex items-center justify-center bg-white rounded-full hover:scale-110 transition-transform duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              alt="Google"
              className="w-5 h-5"
            />
          </button>
          <button className="w-11 h-11 flex items-center justify-center bg-[#1877F2] rounded-full hover:scale-110 transition-transform duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="w-5 h-5"
            />
          </button>
        </div>

        {/* Login Redirect */}
        <p
          data-aos="fade-up"
          data-aos-delay="800"
          className="text-gray-400 text-center text-sm mt-6"
        >
          Already have an account?{" "}
          <a
            href="#"
            className="text-[#ffde59] font-semibold hover:text-white transition-all"
          >
            Login
          </a>
        </p>
      </div>
    </section>
  );
};

export default Signup;
