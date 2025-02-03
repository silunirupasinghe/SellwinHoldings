import React from "react";
import manufacturing from "../assets/sectors/manufacturing.jpg";
function Production() {
    return (
        <>
            <div className="banner bg-[#00509E] text-white ">
                <h1 className=" text-4xl pt-6 text-center font-semibold mt-20">MANUFACTURING</h1>
                <p className="mx-auto max-w-3xl text-xl my-6 text-center">
                Our canned fish manufacturing facility is a testament to our 
                commitment to quality, efficiency, and sustainability. Located in a 
                strategic area to access the best fisheries, our facility is equipped 
                with advanced technology and adheres to the highest industry standards to 
                ensure that every can of fish meets our rigorous quality criteria.
                </p>
            </div>
            <div className="container text-center my-10">
                <h className="font-thin text-center text-xl text-sky-600">EFFICIEND & RELIABLE DISTRIBUTION</h>
                

                <h2 className="my-3 text-4xl font-bold mb-12">Discover Our Product Range</h2>
                <div className="container mx-auto px-28 py-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        {/* Image Section */}
                        <div className="flex justify-center">
                            <img
                                src={manufacturing}
                                alt="Siluni"
                                className="h-full w-full   "
                            />
                        </div>

                        {/* Text Section */}
                        <div className="text-left">
                            <div className="text-lg text-gray-600">Quality Assurance and Safety</div>
                            
                            <p className="mt-4 text-lg leading-relaxed pr-10">
                            Quality assurance is paramount at our manufacturing facility. 
                            From the moment the fish arrives at our plant, it undergoes stringent 
                            quality checks. Our state-of-the-art laboratory performs regular testing 
                            to ensure that every product meets our high standards for taste, texture, 
                            and nutritional value. We also adhere to strict food safety protocols, ensuring
                             that our products are safe for consumption and free from contaminants.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-28 py-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        
                        {/* Text Section */}
                        <div className="text-left">
                            <div className="text-lg text-gray-600 font-bold">Sustainable Practices</div>
                            
                            <p className="mt-4 text-lg leading-relaxed pr-10">
                            Sustainability is at the core of our manufacturing process. 
                            We are committed to minimizing our environmental footprint by 
                            using eco-friendly packaging, reducing waste, and ensuring 
                            responsible sourcing. Our facility is designed to be energy-efficient, 
                            utilizing renewable energy sources wherever possible. We also work closely 
                            with local fisheries to ensure sustainable fishing practices are maintained, 
                            protecting marine ecosystems for future generations.
                            </p>
                        </div>
                        {/* Image Section */}
                        <div className="flex justify-center">
                            <img
                                src={manufacturing}
                                alt="Siluni"
                                className="h-full w-full   "
                            />
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-28 py-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        {/* Image Section */}
                        <div className="flex justify-center">
                            <img
                                src={manufacturing}
                                alt="Siluni"
                                className="h-full w-full   "
                            />
                        </div>

                        {/* Text Section */}
                        <div className="text-left">
                            <div className="text-lg text-gray-600 font-bold">Advanced Technology and Innovation</div>
                            
                            <p className="mt-4 text-lg leading-relaxed pr-10">
                            Our facility is equipped with the latest technology in food processing and packaging. Automated production lines ensure precision and consistency in every can. We continuously invest in research and development to innovate and improve our products, making them healthier and more convenient for our customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Production