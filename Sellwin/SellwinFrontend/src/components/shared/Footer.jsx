import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.jpg"
import logo1 from "../../assets/Sellwin logo Copy.jpg"

function Footer() {
  return (
    <>
      <div className="banner bg-indigo-900 text-white py-12">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <Link to={"/"} className=''>
              <img src={logo1} alt="Sellwin Logo" className="h-48 w-96 mx-auto lg:mx-0" />
            </Link>
          </div>

          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <h2 className="text-3xl font-semibold text-center mb-5">Menu</h2>
            <div className="flex flex-col items-center lg:items-start">
              <Link to={"/"} className="text-lg mb-2">Home</Link>
              <Link to={"/products"} className="text-lg mb-2">Products</Link>
              <Link to={"/AboutUs"} className="text-lg mb-2">About Us</Link>
              <Link to={"/production"} className="text-lg mb-2">Production</Link>
              <Link to={"/contactUs"} className="text-lg mb-2">Contact Us</Link>
            </div>
          </div>

          <div className="lg:w-1/3">
            <h2 className="text-3xl font-semibold text-center">Contact</h2>
            <div className="mt-5 text-center">
              <div className="mb-4">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                071-1497-951
              </div>
              <div className="mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                info@sellwin.lk
              </div>
              <div className="mb-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                8th mile post <br />
                Habarana
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
