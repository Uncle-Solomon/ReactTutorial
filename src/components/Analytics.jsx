import React from "react";
import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4 dark:bg-[#000300]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={laptop} alt="/" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center md:mx-2 mx-auto">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 dark:text-white">
            Manage Data Analytics Centrally
          </h1>
          <p className="dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            ab magni? Culpa assumenda debitis, quo, delectus iure doloribus
            eaque molestiae, voluptatum porro sit expedita provident placeat
            animi voluptatibus at. Hic!
          </p>
          <button
            className=" dark:bg-[#00df9a] dark:text-white bg-black w-[200px] rounded-md font-medium my-6 md:mx-0 mx-auto py-3 text-[#00df9a]"
            type="button"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
