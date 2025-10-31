import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <footer className="bg-[#011D57] text-white py-16 px-6 sm:px-10 md:px-14 lg:px-24">
      {/* Top Section */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14"
        data-aos="fade-up"
      >
        {/* Company Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4 text-[#00D4FF] tracking-wide">
            Mobilla
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            At <span className="text-[#00D4FF] font-semibold">Mobilla</span>, we
            bring ideas to life through innovative web and app solutions.
            <br />
            Our mission is to empower businesses with elegant digital products.
          </p>
        </div>

        {/* Company Links */}
        <div data-aos="fade-up" data-aos-delay="150">
          <h2 className="text-xl font-semibold mb-4 text-[#00D4FF] uppercase tracking-wider">
            Company
          </h2>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-[#00D4FF]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00D4FF]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00D4FF]">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00D4FF]">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-xl font-semibold mb-4 text-[#00D4FF] uppercase tracking-wider">
            Services
          </h2>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-[#00D4FF]">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00D4FF]">
                Mobile Apps
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00D4FF]">
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00D4FF]">
                Digital Marketing
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up" data-aos-delay="450">
          <h2 className="text-xl font-semibold mb-4 text-[#00D4FF] uppercase tracking-wider">
            Contact
          </h2>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>Email: support@mobilla.com</li>
            <li>Phone: +92 300 1234567</li>
            <li>Address: Bahawalpur, Pakistan</li>
          </ul>
        </div>
      </div>

      {/* Social + Bottom Section */}
      <div
        className="flex flex-col md:flex-row justify-between items-center mt-14 border-t border-gray-700 pt-8"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        {/* Copyright */}
        <div className="text-gray-400 text-sm text-center md:text-left mb-6 md:mb-0">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#00D4FF] font-semibold">Mobilla</span>. All
          Rights Reserved.
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="hover:text-[#00D4FF] text-2xl transition-transform transform hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="hover:text-[#00D4FF] text-2xl transition-transform transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-[#00D4FF] text-2xl transition-transform transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-[#00D4FF] text-2xl transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
