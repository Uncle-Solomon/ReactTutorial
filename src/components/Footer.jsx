import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 dark:bg-white grid lg:grid-cols-3 gap-8 dark:text-gray-500 text-gray-300">
      <div>
        <h1 className=" w-full text-3xl font-bold text-[#00df9a]">DAMN.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          similique sunt ipsa. Vel pariatur, sequi laudantium blanditiis beatae
          dolorum dignissimos dolore totam molestias sed dolorem, consequuntur
          laboriosam voluptates distinctio necessitatibus?
        </p>
        <div className="flex md:w-[75%] justify-between my-6">
          <FaDribbbleSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaGithubSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400 dark:text-gray-700">
            Solutions
          </h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 dark:text-gray-700">
            Support
          </h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">Api Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 dark:text-gray-700">
            Company
          </h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 dark:text-gray-700">
            Legal
          </h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
