import React from "react";
import logo1 from "../../assets/Sellwin logo Copy.jpg"
import logo from "../../assets/LOGO.jpg"
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <>
    <div className="container my-4">
      <nav className='flex'>
        <div className="">
          <Link to={"/"} className=''>
          <img src={logo} alt="Sellwin Logo" className="h-28 w-66 mr-4" />
          </Link>
        </div>
        <div className="flex  items-center mx-24 pl-32">
        <div>
            <Link to={"/"} className="text-lg justify-center m-5 ">Home</Link>

          </div>
          <div>
            <Link to={"/products"} className="text-lg justify-center m-5 "> Our Products</Link>

          </div>
          <div>
            <Link to={"/AboutUs"} className="text-lg justify-center m-5"> About Us</Link>

          </div>
          <div>
            <Link to={"/production"} className="text-lg justify-center m-5"> Production</Link>

          </div>
          <div>
            <Link to={"/contactUs"} className="text-lg justify-center m-5"> Contact Us</Link>

          </div>
         
         


        </div>


      </nav>


      </div>



    </>
  )
}
export default Navigation