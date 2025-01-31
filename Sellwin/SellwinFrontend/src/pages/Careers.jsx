import React from "react";

import careerSales from "../assets/careers/careersSales.jpg";

function Careers() {
  return (
    <>
      {/* Banner Section */}
      <div className="bg-indigo-900 text-white py-10 px-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          CAREERS
        </h1>
        <p className="mx-auto max-w-3xl text-base md:text-xl my-4 md:my-6 text-center leading-relaxed">
          Our people are our greatest strength, and at Sellwin Holdings, we are
          committed to creating an environment where every individual can learn,
          grow, and thrive. Life at Sellwin is about more than just work—it’s
          about fostering innovation, encouraging leadership, and inspiring
          collaboration across all levels of the organization.
        </p>
      </div>

      {/* Section: Join Our Team */}
      <div className="my-10 px-4">
        <h2 className="text-center text-sm md:text-xl font-light text-sky-600">
          TOGETHER, WE CREATE QUALITY THAT INSPIRES.
        </h2>

        <h2 className="my-3 text-3xl md:text-4xl font-bold text-center">
          Join Our Team
        </h2>

        <h4 className="sm:px-10 text-justify text-sm md:text-base my-5 mx-4 md:mx-24">
          Be part of a company that not only values your unique skills but also
          invests in your personal and professional growth. At Sellwin Holdings,
          we believe in creating an environment where your potential is
          nurtured, your achievements are celebrated, and your contributions
          drive meaningful impact.
        </h4>
        <hr className="w-3/4 mx-auto border-gray-300" />
      </div>

      {/* Life at Sellwin Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center bg-white">
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 p-6 lg:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700">
            Life at Sellwin
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed font-normal">
            At Sellwin Holdings, we ensure our team grows with passion,
            innovation, and collaboration. Be part of a culture that drives
            success and empowers people to make a difference.
          </p>
          <button className="mt-6 px-4 py-2 md:px-6 md:py-3 bg-blue-700 text-white font-semibold rounded hover:bg-purple-800 transition duration-300">
            Find out more
          </button>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src={careerSales}
            alt="Team at Sellwin"
            className="w-full h-64 md:h-96 lg:h-full object-cover"
          />
        </div>
      </div>

      {/* Why Join Section */}
      <div className="mx-6 md:mx-16">
        <h3 className="my-5 text-left text-2xl font-semibold text-blue-700">
          Why Join Sellwin Holdings?
        </h3>
        <p className="text-justify text-sm md:text-base font-normal">
          At Sellwin Holdings, we believe in building careers, not just filling
          positions. As a leader in the canned fish manufacturing industry, we
          are dedicated to providing an inclusive, collaborative, and empowering
          workplace where everyone can thrive. Whether you're a seasoned
          professional or just starting out, Sellwin Holdings offers endless
          opportunities to learn, grow, and succeed.
        </p>
      </div>

      {/* How to Apply Section */}
      <div className="mx-6 md:mx-16">
        <h3 className="my-5 text-left text-2xl font-semibold text-blue-700">
          How to Apply
        </h3>
        <p className="text-justify text-sm md:text-base font-normal">
          If you're ready to make a difference and be a part of our success
          story, we'd love to hear from you! Email your CV to{" "}
          <a href="mailto:careers@sellwinholdings.com" className="text-blue-600">
            careers@sellwinholdings.com
          </a>{" "}
          or check out our current openings below.
        </p>
      </div>

      {/* Explore Opportunities */}
      <div className="mx-6 md:mx-16">
        <h3 className="my-5 text-left text-2xl font-semibold text-blue-700">
          Explore Opportunities
        </h3>
        <p className="text-sm md:text-base font-normal mb-4">
          We are always looking for talented individuals who share our passion
          for quality and excellence. Here are some of the areas you can
          contribute to:
        </p>
        <ul className="list-disc ml-6 md:ml-16 text-sm md:text-base space-y-2">
          <li className="font-bold">Production & Manufacturing</li>
          <li className="font-bold">Sales & Marketing</li>
          <li className="font-bold">Finance & Administration</li>
          <li className="font-bold">Quality Assurance</li>
        </ul>
      </div>

      {/* Join Us Today Section */}
      <div className="mx-6 md:mx-16 mb-10">
        <h3 className="my-5 text-left text-2xl font-semibold text-blue-700">
          Join Us Today!
        </h3>
        <p className="text-justify text-sm md:text-base font-normal">
          Be a part of a company that values its employees and their
          contributions. Together, we can make a lasting impact.
        </p>
      </div>
    </>
  );
}

export default Careers;
