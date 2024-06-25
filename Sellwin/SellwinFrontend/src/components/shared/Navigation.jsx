import React, { useState } from "react";
import logo1 from "../../assets/Sellwin logo Copy.jpg";
import logo from "../../assets/LOGO.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto my-4 px-4">
        <nav className="flex items-center justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0 mr-6">
            <Link to={"/"} className="">
              <img src={logo} alt="Sellwin Logo" className="h-28 w-66 mr-4" />
            </Link>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 border rounded text-gray-400 border-gray-400 hover:text-white hover:border-white"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="text-sm lg:flex-grow lg:flex lg:justify-center lg:items-center">
              <Link to={"/"} className="block mt-4 lg:inline-block lg:mt-0 text-lg justify-center m-5 text-gray-800 hover:text-blue-300">
                Home
              </Link>
              <Link to={"/products"} className="block mt-4 lg:inline-block lg:mt-0 text-lg justify-center m-5 text-gray-800 hover:text-blue-300">
                Our Products
              </Link>
              <Link to={"/AboutUs"} className="block mt-4 lg:inline-block lg:mt-0 text-lg justify-center m-5 text-gray-800 hover:text-blue-300">
                About Us
              </Link>
              <Link to={"/production"} className="block mt-4 lg:inline-block lg:mt-0 text-lg justify-center m-5 text-gray-800 hover:text-blue-300">
                Production
              </Link>
              <Link to={"/contactUs"} className="block mt-4 lg:inline-block lg:mt-0 text-lg justify-center m-5 text-gray-800 hover:text-blue-300">
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
