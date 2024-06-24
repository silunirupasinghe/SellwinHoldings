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


                <div className=" container flex">

                    <div className="mx-24">
                        <div className="">
                            <Link to={"/"} className=''>
                                <img src={logo1} alt="Sellwin Logo" className=" h-48 width-96" /> <br/>
                            </Link>
                        </div>
                    </div>

                    
                        <div className="items-center ml-36">
                        <h2 className="text-3xl font-semibold text-center mb-5">Menu</h2>
                            <div>
                                <Link to={"/"} className="text-lg justify-center ">Home</Link>

                            </div>
                            <div>
                                <Link to={"/products"} className="text-lg justify-center ">Products</Link>

                            </div>
                            <div>
                                <Link to={"/AboutUs"} className="text-lg justify-center"> About Us</Link>

                            </div>
                            <div>
                                <Link to={"/production"} className="text-lg justify-center "> Production</Link>

                            </div>
                            <div>
                                <Link to={"/contactUs"} className="text-lg justify-center"> Contact Us</Link>

                            </div>
                        
                    </div>

                    <div className="container">
                        <h2 className="text-3xl font-semibold text-center">Contact</h2>
                        <div className="mt-5 text-center">
                            <div className="mb-4">
                                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                                071-1497-951
                            </div>
                            <div className="mb-4">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2 " />
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
