import React from "react";
import { user } from "../assets";

const UserCentricDesign = () => {
  return (
    <div className="relative flex flex-col gap-y-5 items-start bg-[#101010] w-1/4 p-8 rounded-2xl shadow-2xl ">
      <img src={user} alt="" className="absolute w-28 -top-14 p-4 rounded-md bg-[#101010] " />
      <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text mt-10 text-start">
        User-Centric Design
      </h1>
      <h5 className="text-blue-700 font-light text-sm text-start w-full">Empathetic & Intuitive Interfaces</h5>
      <div className="w-1/2 h-2 bg-gradient-to-r from-yellow-700 to-yellow-400 rounded-full "></div>
      <p className="text-sm font-light text-start text-gray-400">
      Utilizing research, user interviews, and usability testing to develop empathetic and intuitive interfaces that cater to specific user needs.
      </p>
    </div>
  );
};
export default UserCentricDesign;
