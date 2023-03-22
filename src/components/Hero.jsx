import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div>
      <div className="text-white dark:bg-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen text-center mx-auto flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold p-2">
            GROWING WITH DATA ANALYTICS
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Grow with data.
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold">
              Fast, flexible financing for{" "}
              <TypeAnimation
                sequence={[
                  // Same String at the start will only be typed once, initially
                  "BTB",
                  1000,
                  "SASS",
                  1000,
                  "ABC",
                  1000,
                ]}
                className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                speed={30}
                repeat={Infinity}
              />
            </p>
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-500">
            Monitor your data analytics to increase revenue for BTB, BTC & SASS
            platforms.
          </p>
          <button
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
            type="button"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
