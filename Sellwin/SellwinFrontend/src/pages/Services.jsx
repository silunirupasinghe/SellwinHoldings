import React from "react";
import distribution from "../assets/sectors/distribution.jpg";
import leisure from "../assets/sectors/leisure.jpg";
import manufacturing from "../assets/sectors/manufacturing.jpg";

function Services() {
    return (
        <>
            <div className="container mx-auto text-center my-10 px-4 md:px-0">
                <h className="font-thin text-center text-lg text-sky-600">BRIDGING QUALITY & CONVENIENCE</h>
                <h2 className="my-3 text-4xl font-bold mb-12">Discover Our Range of Excellence</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter hover:grayscale mx-auto">
                        <a href="/products">
                            <img className="rounded-lg" src={distribution} alt="Distribution" />
                        </a>
                        <figcaption className="absolute px-4 text-lg text-white bottom-6">
                            <p className="font-medium">Distribution</p>
                        </figcaption>
                    </figure>

                    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter hover:grayscale mx-auto">
                        <a href="#">
                            <img className="rounded-lg" src={leisure} alt="Leisure" />
                        </a>
                        <figcaption className="absolute px-4 text-lg text-white bottom-6">
                            <p className="font-medium">Leisure</p>
                        </figcaption>
                    </figure>

                    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter hover:grayscale mx-auto">
                        <a href="/production">
                            <img className="rounded-lg" src={manufacturing} alt="Manufacture" />
                        </a>
                        <figcaption className="absolute px-4 text-lg text-white bottom-6">
                            <p className="font-medium">Manufacture</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </>
    );
}

export default Services;
