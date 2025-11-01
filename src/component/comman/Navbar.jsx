import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/Images/logomob.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  const menuItems = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="bg-[#00B29C] text-white fixed w-full top-0 left-0 z-50 shadow-md backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-15">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 cursor-pointer select-none">
          <img src={Logo} alt="Mobilia Logo" className="h-15 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-white text-[16px] font-semibold tracking-wide">
          {menuItems.map((item, idx) => (
            <li key={idx} className="relative group">
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="transition-colors duration-300 relative 
                           hover:text-[#002B5B]
                           before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300
                           group-hover:before:left-0 group-hover:before:w-full"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <button className="px-5 py-2 border border-white text-white rounded-lg font-semibold hover:bg-[#002B5B] hover:text-white transition ">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-5 py-2 border border-white text-white rounded-lg font-semibold hover:bg-[#002B5B] hover:text-white transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer text-white z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-[#011D57] border-t border-[#0D7BE2] transform transition-transform duration-500 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6 text-lg font-medium">
          {menuItems.map((item, idx) => (
            <li key={idx} className="relative group">
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={toggleMenu}
                className="transition-colors duration-300 relative 
                           hover:text-[#0D7BE2]
                           before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300
                           group-hover:before:left-0 group-hover:before:w-full"
              >
                {item}
              </Link>
            </li>
          ))}

          <div className="flex space-x-4 pt-4">
            <Link to="/login" onClick={toggleMenu}>
              <button className="px-5 py-2 border border-[#0D7BE2] text-[#0D7BE2] rounded-lg font-semibold hover:bg-[#0D7BE2] hover:text-white transition duration-300">
                Login
              </button>
            </Link>
            <Link to="/signup" onClick={toggleMenu}>
              <button className="px-5 py-2 bg-[#0D7BE2] text-white rounded-lg font-semibold hover:bg-[#0b6ad1] transition duration-300">
                Sign Up
              </button>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
