import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { UserRound } from "lucide-react";

const Login = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-b from-[#1a429a] via-[#315fa0] to-[#468DE0] px-6 py-25">
      {/* 🔹 Login Card */}
    <div
  data-aos="zoom-in"
  className="w-full max-w-lg bg-[#0E1F45]/70 border border-[#ffffff2b] backdrop-blur-sm rounded-2xl shadow-md p-6 md:p-8 py-8 md:py-10 pt-30"
>

        {/* Header Icon */}
        <div
          data-aos="fade-down"
          className="flex flex-col items-center justify-center mb-6"
        >
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#468DE0]">
            <UserRound size={40} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mt-3 tracking-wide">
            Welcome Back
          </h2>
          <p className="text-gray-300 text-sm mt-1">
            Sign in to continue your journey
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5">
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

          {/* Forgot Password */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex justify-end"
          >
            <a
              href="#"
              className="text-sm text-[#61A5F9] hover:text-white transition-all"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            data-aos="zoom-in"
            data-aos-delay="500"
            className="w-full py-3 rounded-lg bg-linear-to-r from-[#468DE0] to-[#61A5F9] text-white font-semibold text-lg hover:scale-[1.02] transition-all duration-300"
          >
            Login
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

        {/* Social Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="flex justify-center gap-4 mt-6"
        >
          <button className="w-11 h-11 flex items-center justify-center bg-white rounded-full hover:scale-105 transition-transform duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              alt="Google"
              className="w-5 h-5"
            />
          </button>
          <button className="w-11 h-11 flex items-center justify-center bg-[#1877F2] rounded-full hover:scale-105 transition-transform duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="w-5 h-5"
            />
          </button>
        </div>

        {/* Signup Link */}
        <p
          data-aos="fade-up"
          data-aos-delay="800"
          className="text-gray-400 text-center text-sm mt-6"
        >
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-[#ffde59] font-semibold hover:text-white transition-all"
          >
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
