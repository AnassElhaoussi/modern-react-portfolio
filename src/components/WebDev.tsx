import React from "react";
import { layers } from "../assets";

const InformationArchitecture = () => {
  return (
    <div className="relative flex flex-col gap-y-5 items-start bg-[#101010] w-1/4 p-8 rounded-2xl shadow-2xl ">
      <img
        src={layers}
        alt=""
        className="absolute w-28 -top-14 p-4 rounded-md bg-[#101010] "
      />
      <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text mt-10 text-start">
        Web development
      </h1>
      <h5 className="text-blue-700 font-light text-sm text-start w-full">
        Discover my learning curve.
      </h5>
      <div className="w-1/2 h-2 bg-gradient-to-r from-red-700 to-red-400 rounded-full "></div>
      <p className="text-sm font-light text-start text-gray-400">
        I started my web development journey with HTML, CSS, and vanilla
        JavaScript, building various projects to solidify my understanding.
        Transitioning to MERN stack opened up new possibilities, and discovering
        Next.js and Typescript was a game-changer, allowing me to leverage advanced features.
        Now diving into Next.js 14, I'm excited to continue expanding my skills
        and creating even more dynamic web applications.
      </p>
    </div>
  );
};
export default InformationArchitecture;
