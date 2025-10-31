import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../Images/Logoo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="bg-[#011D57] text-white shadow-lg fixed w-full top-0 left-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo + Name */}
        <Link to="/" className="flex items-center space-x-3 cursor-pointer select-none">
         
          <span className="text-2xl font-bold text-[#0D7BE2] tracking-wide">
 <img
            src={Logo}
            alt="Mobilla Logo"
            className="h-48 w-48 mb-6 object-contain"
          />          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-[16px] font-semibold tracking-wide">
          <li>
            <Link to="/" className="hover:text-[#0D7BE2] transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#0D7BE2] transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-[#0D7BE2] transition duration-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#0D7BE2] transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <button className="px-5 py-2 border border-[#0D7BE2] text-[#0D7BE2] rounded-lg font-semibold hover:bg-[#0D7BE2] hover:text-white transition duration-300">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-5 py-2 bg-[#0D7BE2] text-white rounded-lg font-semibold hover:bg-[#0b6ad1] transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer text-white" onClick={toggleMenu}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#011D57] border-t border-[#0D7BE2] transition-all duration-300">
          <ul className="flex flex-col items-center space-y-5 py-6 text-lg font-medium">
            <li>
              <Link to="/" onClick={toggleMenu} className="hover:text-[#0D7BE2] transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu} className="hover:text-[#0D7BE2] transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMenu} className="hover:text-[#0D7BE2] transition duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu} className="hover:text-[#0D7BE2] transition duration-300">
                Contact
              </Link>
            </li>

            <div className="flex space-x-4 pt-4">
              <Link to="/login" onClick={toggleMenu}>
                <button className="px-5 py-1.5 border border-[#0D7BE2] text-[#0D7BE2] rounded-lg font-semibold hover:bg-[#0D7BE2] hover:text-white transition duration-300">
                  Login
                </button>
              </Link>
              <Link to="/signup" onClick={toggleMenu}>
                <button className="px-5 py-1.5 bg-[#0D7BE2] text-white rounded-lg font-semibold hover:bg-[#0b6ad1] transition duration-300">
                  Sign Up
                </button>
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
