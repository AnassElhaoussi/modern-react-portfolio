import React from "react";
import { layers } from "../assets";

const InformationArchitecture = () => {
  return (
    <div className="relative flex flex-col gap-y-5 items-start bg-[#101010] w-1/4 p-8 rounded-2xl shadow-2xl ">
      <img src={layers} alt="" className="absolute w-28 -top-14 p-4 rounded-md bg-[#101010] " />
      <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text mt-10 text-start">Content Structure</h1>
      <h5 className="text-blue-700 font-light text-sm text-start w-full">Streamlined Navigation Solutions</h5>
      <div className="w-1/2 h-2 bg-gradient-to-r from-red-700 to-red-400 rounded-full "></div>
      <p className="text-sm font-light text-start text-gray-400">
      Implementing card sorting, tree testing, sitemaps, and user flows to organize content effectively, resulting in streamlined navigation and improved usability.
      </p>
    </div>
  )
}
export default InformationArchitecture