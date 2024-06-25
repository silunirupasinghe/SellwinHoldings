import React from "react";

function AboutUs() {
  return (
    <>
      <div className="banner bg-indigo-900 text-white py-10">
        <h1 className="text-4xl font-semibold text-center">ABOUT US</h1>
        <p className="mx-auto max-w-3xl text-xl my-6 text-center">
          Welcome to Sellwin Holdings (Pvt) Ltd, the leading distributor of
          canned fish across the island. With a robust network of dealers spread
          throughout the region, we proudly cater to both retail and wholesale
          customers, ensuring that our premium products reach every corner of
          the market.
        </p>
      </div>

      <div className="container mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-indigo-900 text-white p-8 lg:ml-10">
            <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">
              MISSION
            </h2>
            <p className="text-lg leading-relaxed text-center lg:text-left">
              Our mission at Sellwin Holdings (Pvt) Ltd is to deliver premium
              canned fish products through meticulous selection of top-quality
              ingredients and fresh fish, ensuring excellence in every offering.
              Trusted by consumers and businesses alike, we lead the industry
              with our unwavering commitment to quality and customer satisfaction.
            </p>
          </div>
          <div className="bg-indigo-900 text-white p-8 lg:mr-10">
            <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">
              VISION
            </h2>
            <p className="text-lg leading-relaxed text-center lg:text-left">
              To be the leading provider of high-quality canned fish, committed
              to excellence, sustainability, and customer satisfaction. We strive
              to continuously innovate and expand our reach, ensuring that our
              nutritious, delicious, and premium products are accessible to
              everyone, everywhere.
            </p>
          </div>
        </div>

        <div className="mt-20">
                    <h2 className="font-bold ml-16">OUR NETWORK</h2>
                    <p className="font-normal text-lg ml-16 mr-32 text-justify leading-relaxed" >     
                    Our extensive dealer network enables us to maintain a strong presence island-wide. Whether you are a retailer looking to stock your shelves with top-tier products or a wholesaler seeking reliable supply solutions, Sellwin Holdings (pvt) Ltd, is your go-to partner. We ensure prompt and efficient distribution to meet the diverse needs of our clientele.

                    </p>

                </div>

                <div className="mt-20">
                    <h2 className="font-bold ml-16">QUALITY YOU CAN TRUST</h2>
                    <p className="font-normal text-lg ml-16 mr-32 text-justify leading-relaxed mb-10" >
                    Quality is the cornerstone of our business. From the sourcing of fresh raw fish to the final packaging, every step of our process is guided by stringent quality control measures. This dedication to quality assurance ensures that every can of fish you purchase from us is packed with flavor, nutrition, and the promise of excellence.
                    </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
