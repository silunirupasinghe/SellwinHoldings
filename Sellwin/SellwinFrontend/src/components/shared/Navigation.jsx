import React, { useState } from "react";
import logo from "../../assets/LOGO.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto px-4 fixed top-0 left-0 w-full bg-white shadow-md z-[50]">
        <nav className="flex items-center justify-between flex-wrap py-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to={"/"}>
              <img src={logo} alt="Sellwin Logo" className="h-16 w-auto" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400 hover:text-blue-500 hover:border-blue-500"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          {/* Navbar Links */}
          <div
            className={`w-full lg:flex lg:items-center lg:w-auto transition-all duration-300 ease-in-out ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="text-sm lg:flex-grow lg:flex lg:justify-center lg:items-center">
              <Link to={"/"} className="block lg:inline-block text-lg m-4 text-gray-800 hover:text-blue-500">
                Home
              </Link>
              <Link to={"/products"} className="block lg:inline-block text-lg m-4 text-gray-800 hover:text-blue-500">
                Our Products
              </Link>
              <Link to={"/AboutUs"} className="block lg:inline-block text-lg m-4 text-gray-800 hover:text-blue-500">
                About Us
              </Link>
              <Link to={"/sectors"} className="block lg:inline-block text-lg m-4 text-gray-800 hover:text-blue-500">
                Sectors
              </Link>
              <Link to={"/careers"} className="block lg:inline-block text-lg m-4 text-gray-800 hover:text-blue-500">
                Careers
              </Link>
              <Link to={"/contactUs"} className="block lg:inline-block text-lg m-4 text-gray-800 hover:text-blue-500">
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
