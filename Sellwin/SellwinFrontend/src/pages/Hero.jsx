import React from "react";

function Hero() {
  return (
    <div className="relative isolate px-6 pt-2 lg:px-8 mt-24">
      {/* Background Gradient (Top) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none z-[-1]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00509E] to-[#65cdac] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Hero Content */}
      <div className="mx-auto max-w-2xl py-32 sm:py-16 lg:py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-blue-700 sm:text-6xl">
        Trusted Leaders in <br/> Sales & Distribution 
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-700">
          At Sellwin Holdings, we are committed to delivering{" "}
          <strong>high-quality products</strong> and{" "}
          <strong>exceptional services</strong> in the manufacturing and
          distribution. Experience the best with us.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/products"
            className="rounded-md bg-[#00509E] px-5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            Explore Our Products
          </a>
          <a
            href="/AboutUs"
            className="text-lg font-semibold leading-6 text-gray-900 hover:text-[#00509E]"
          >
            Learn More <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Background Gradient (Bottom) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none z-[-1]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#00509E] to-[#FFD700] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}

export default Hero;
