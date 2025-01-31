import React from "react";
import aboutUs from "../assets/aboutUs/aboutUs.jpg";
import nalinp from "../assets/aboutUs/nalinp.jpeg";
import nalina from "../assets/aboutUs/nalina.jpeg";
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
            <p className="text-base leading-relaxed text-center lg:text-left">
              Our mission at Sellwin Holdings (Pvt) Ltd is to deliver premium
              canned fish products through meticulous selection of top-quality
              ingredients and fresh fish, ensuring excellence in every offering.
              Trusted by consumers and businesses alike, we lead the industry
              with our unwavering commitment to quality and customer
              satisfaction.
            </p>
          </div>
          <div className="bg-indigo-900 text-white p-8 lg:mr-10">
            <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">
              VISION
            </h2>
            <p className="md:text-base leading-relaxed text-center lg:text-left">
              To be the leading provider of high-quality canned fish, committed
              to excellence, sustainability, and customer satisfaction. We
              strive to continuously innovate and expand our reach, ensuring
              that our nutritious, delicious, and premium products are
              accessible to everyone, everywhere.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="font-bold sm:ml-16 text-blue-700 text-2xl md:text-2xl">
            OUR NETWORK
          </h2>
          <p className="font-normal text-base sm:ml-16 sm:mr-32 text-justify leading-relaxed ">
            Our extensive dealer network enables us to maintain a strong
            presence island-wide. Whether you are a retailer looking to stock
            your shelves with top-tier products or a wholesaler seeking reliable
            supply solutions, Sellwin Holdings (pvt) Ltd, is your go-to partner.
            We ensure prompt and efficient distribution to meet the diverse
            needs of our clientele.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="font-bold sm:ml-16 text-blue-700 text-2xl md:text-2xl">
            QUALITY YOU CAN TRUST
          </h2>
          <p className="font-normal md:text-base sm:ml-16 sm:mr-32 text-justify leading-relaxed sm:mb-10">
            Quality is the cornerstone of our business. From the sourcing of
            fresh raw fish to the final packaging, every step of our process is
            guided by stringent quality control measures. This dedication to
            quality assurance ensures that every can of fish you purchase from
            us is packed with flavor, nutrition, and the promise of excellence.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="font-bold text-blue-700  sm:ml-16 sm:mr-32 text-2xl md:text-2xl">
            OUR VALUES
          </h2>
          <img
            className="my-5 md:w-200 w-full content-center md:mx-10"
            src={aboutUs}
          ></img>
        </div>
      </div>

      <div className="my-10 mx-10">
        <h2 className="font-bold sm:ml-16 text-blue-700 text-2xl md:text-2xl">
          OUR STORY
        </h2>
        <p className="font-normal text-base sm:ml-16 sm:mr-32 text-justify leading-relaxed ">
          Sellwin Holdings (Pvt) Ltd was established with a clear vision: to
          become the leading provider of high-quality canned fish products in
          Sri Lanka. From the outset, we focused on building a strong foundation
          rooted in quality, innovation, and customer trust. Over the years, we
          have grown into a trusted name in the food industry, catering to both
          retail and wholesale markets across the island. Through strategic
          partnerships, modern facilities, and a dedicated team of
          professionals, we ensure that our products meet the highest standards
          of freshness, flavor, and nutrition.
        </p>

        <p className="font-normal text-base sm:ml-16 sm:mr-32 text-justify leading-relaxed ">
          At Sellwin Holdings, every can of fish represents our promise to
          deliver excellence. By leveraging advanced processes and maintaining a
          customer-centric approach, we have established ourselves as a reliable
          partner in the food distribution sector.
          <br />
          Our story is one of progress, resilience, and an unwavering commitment
          to providing premium products that nourish and satisfy families,
          businesses, and communities. As we look to the future, we aim to
          continue setting benchmarks in quality, sustainability, and innovation
          in the canned food industry.
        </p>
      </div>

      <div className="mx-10 mb-10">
        <h2 className="font-bold sm:ml-16 text-blue-700 text-2xl md:text-2xl">
          OUR LEADERSHIP
        </h2>
        <div className="flex my-10 flex-col lg:flex-row mx-10">
          <div className="mx-10 ">
            <img
              src={nalina}
              alt="Nalin Perera"
              className="w-full h-full rounded-full "
            ></img>
          </div>
          <div>
            <div className="text text-base text-center italic mt-5">
              "Our vision is rooted in fostering trust, reliability, and
              quality. Every decision we make is guided by our commitment to
              building lasting relationships with our customers and partners. We
              believe in empowering our people and investing in sustainable
              practices to create a positive impact on the communities we
              serve."
            </div>
            <div className="font-semibold text-sm text-center mt-5">
              Nalin Perera <br />
              Director - Founder
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row my-10 mx-10">
          <div className="mx-10 ">
            <img src={nalinp} alt="Nalin Perera" className="rounded-full "></img>
          </div>
          <div>
            <div className="text text-base text-center italic mt-5">
              "Innovation and progress are at the heart of everything we do. Our
              aim is to continuously raise the bar, not just in the products and
              services we provide, but also in the way we conduct our business.
              We are grateful for the trust you place in us, and we pledge to
              keep pushing boundaries to exceed your expectations."
            </div>
            <div className="font-semibold text-sm text-center mt-5">
              Nalin Amarasinghe <br />
              Director - Founder
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
