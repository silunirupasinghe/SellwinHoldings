import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import champ from "../assets/champ.jpg";
import pico from "../assets/pico.jpg";
import sfRed from "../assets/sfRed.jpg";
import sfBlue from "../assets/sfBlue.jpg";
import tuna from "../assets/tuna.jpg";
import seafresh from "../assets/seafresh.jpg";
import pns from "../assets/company/pns.png";
import caravanfresh from "../assets/company/caravanfresh.png";
import monarchimperial from "../assets/company/monarchimperial.png";
import grandmonarch from "../assets/company/grandmonarch.png";
import littlelion from "../assets/company/littlelion.png";
import galadari from "../assets/company/galadari.jpg";
import taj from "../assets/company/taj.jpg";
import raffles from "../assets/company/raffles.jpg";

function Products() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="banner bg-indigo-900 text-white ">
        <h1 className=" text-4xl pt-6 text-center font-semibold ">
          DISTRIBUTION
        </h1>
        <p className="mx-auto max-w-3xl text-xl my-6 text-center">
          Our comprehensive distribution services ensure that your products
          reach their destination efficiently and on time. With secure
          warehousing, precise inventory management, and optimized supply chain
          solutions, we offer reliable logistics that enhance your business
          operations.
        </p>
      </div>
      <div className="container text-center my-10">
        <h2 className="font-thin text-center text-xl text-sky-600">
          EFFICIENT & RELIABLE DISTRIBUTION
        </h2>

        <h2 className="my-3 text-4xl font-bold mb-12">
          Discover Our Product Range
        </h2>
        <hr className="text-slate-950 "></hr>

        <h2 className="my-3 text-4xl font-bold mb-5 text-left text-sky-900">
          Premium Canned Fish Products
        </h2>

        <h4 className="sm:px-10 text-left text-lg">
          We take pride in providing top-quality canned fish products that meet
          the highest standards of freshness, taste, and nutritional value. Our
          commitment to excellence and sustainability ensures that every can of
          fish we produce is not only delicious but also environmentally
          responsible.
        </h4>
        <h3 className=" my-5 text-left sm:px-10 text-2xl ">
          Why Choose Our Canned Fish?
        </h3>
        <div className="text-left sm:pl-16">
          <li className="mb-1">
            <h className="font-bold">Superior Quality :</h>
            <h className="pl-2 pr-10">
              Our canned fish is sourced from the best fisheries, ensuring you
              get only the freshest and most flavorful products.
            </h>
          </li>
          <li className="mb-1">
            <h className="font-bold">Nutritional Excellence :</h>
            <h className="pl-2 pr-10">
              Packed with essential nutrients like omega-3 fatty acids, protein,
              and vitamins, our canned fish is a healthy choice for your diet.
            </h>
          </li>
          <li className="mb-1">
            <h className="font-bold">Sustainable Sourcing:</h>
            <h className="pl-2 pr-10">
              We are committed to sustainable fishing practices that protect
              marine life and support local fishing communities.
            </h>
          </li>
          <li className="mb-1">
            <h className="font-bold">Variety and Convenience:</h>
            <h className="pl-2 pr-10">
              {" "}
              Available in a wide range of varieties, our canned fish is perfect
              for quick meals, snacks, and gourmet recipes.{" "}
            </h>
          </li>
        </div>
      </div>
      <div className="container mx-auto my-10 sm:px-20 sm:py-10 bg-slate-100 pd-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
          <Card className="mx-3 hover:border-indigo-900">
            <CardHeader>
              <CardTitle className="font-semibold text-lg text-center">
                CHAMP JACK MACKEREL
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center relative">
              <img
                src={champ}
                alt="Champ Jack Mackerel"
                className="w-36 h-full object-cover sm:w-48"
              />
              <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-white opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out  rounded-md">
                <div className="text text-black text-base absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                Our best-selling Champ Jack Mackerel, made from the highest
                quality jack mackerel fish for exceptional taste.
                  <br /> <br /> <br />
                  MRP- Rs.690.00/425g
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mx-3 hover:border-indigo-900">
            <CardHeader>
              <CardTitle className="font-semibold text-lg text-center">
                PICO MACKEREL
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center relative">
              <img
                src={pico}
                alt="Champ Jack Mackerel"
                className="w-48 h-full object-cover"
              />
              <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-white opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out  rounded-md">
                <div className="text text-black text-base absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                High-quality Pico Mackerel, made from rich and nutritious
                mackerel fish for your favorite recipes.
                  <br /> <br /> <br />
                  MRP- Rs.690.00/425g
                </div>
              </div>
            
            </CardContent>
          </Card>

          <Card className="mx-3 hover:border-indigo-900">
            <CardHeader>
              <CardTitle className="font-semibold text-lg text-center">
                {" "}
                Pico Tuna
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center relative">
              <img
                src={tuna}
                alt="Champ Jack Mackerel"
                className="w-48 h-full object-cover"
              />
              <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-white opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out  rounded-md">
                <div className="text text-black text-base absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                Top-quality Pico Tuna, made from delicious and nutritious tuna
                fish for various dishes.
                  <br /> <br /> <br />
                  MRP- Rs.690.00/425g
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mx-3 hover:border-indigo-900">
            <CardHeader>
              <CardTitle className="font-semibold text-lg text-center">
                {" "}
                Southern Fresh Jack Mackrel
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center relative">
              <img
                src={sfBlue}
                alt="Champ Jack Mackerel"
                className="w-48 h-full object-cover"
              />
              <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-white opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out  rounded-md">
                <div className="text text-black text-base absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  Premium Sea Fresh Tuna, made from sustainably sourced tuna
                  fish for a rich and satisfying flavor.
                  <br /> <br /> <br />
                  MRP- Rs.690.00/425g
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mx-3 hover:border-indigo-900">
            <CardHeader>
              <CardTitle className="font-semibold text-lg text-center">
                {" "}
                Sea Fresh Tuna
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center relative">
              <img
                src={seafresh}
                alt="Champ Jack Mackerel"
                className="w-48 h-full object-cover"
              />
              <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-white opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-md">
                <div className="text text-black text-base absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  Premium Sea Fresh Tuna, made from sustainably sourced tuna
                  fish for a rich and satisfying flavor.
                  <br /> <br /> <br />
                  MRP- Rs.690.00/425g
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mx-3 hover:border-indigo-900">
            <CardHeader>
              <CardTitle className="font-semibold text-lg text-center">
                {" "}
                Pico Tuna
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center relative">
              <img
                src={tuna}
                alt="Champ Jack Mackerel"
                className="w-48 h-full object-cover"
              />

              <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-white opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-md">
                <div className="text text-black text-base absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  Top-quality Pico Tuna, made from delicious and nutritious tuna
                  fish for various dishes.
                  <br /> <br /> <br />
                  MRP- Rs.690.00/425g
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        </div>
        <div className="container mx-auto my-10 sm:px-20">
        <h2 className="my-10 text-4xl font-bold mb-12 text-center text-sky-900">
          OUR PRIMARY CUSTOMERS
        </h2>
        <div className="mx-auto" style={{ maxWidth: "85%" }}>
          <Slider {...settings}>
            <div>
              <img className="mx-5" src={pns} alt="PNS" />
            </div>
            <div>
              <img className="mx-5 h-36 " src={taj} alt="Galadari" />
            </div>
            <div>
              <img className="mx-5" src={caravanfresh} alt="Caravan Fresh" />
            </div>
            <div>
              <img
                className="mx-5"
                src={monarchimperial}
                alt="Monarch Imperial"
              />
            </div>
            <div>
              <img className="mx-5" src={littlelion} alt="Little Lion" />
            </div>
            <div>
              <img className="mx-5 w-52 " src={galadari} alt="Galadari" />
            </div>
            <div>
              <img className="mx-5" src={grandmonarch} alt="Grand Monarch" />
            </div>
            <div>
              <img className="mx-5   " src={raffles} alt="Monarch Imperial" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Products;
