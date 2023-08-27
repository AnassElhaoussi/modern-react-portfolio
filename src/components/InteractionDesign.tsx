import React from "react";
import { pencilAndRuler } from "../assets";

const InteractionDesign = () => {
  return (
    <div className="relative flex flex-col gap-y-5 items-start bg-[#101010] w-1/4 p-8 rounded-2xl shadow-2xl ">
      <img src={pencilAndRuler} alt="" className="absolute w-28 -top-14 p-4 rounded-md bg-[#101010] " />
      <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text mt-10 text-start">Interaction Design</h1>
      <h5 className="text-blue-700 font-light text-sm text-start w-full">Engaging User Experiences</h5>
      <div className="w-1/2 h-2 bg-gradient-to-r from-green-700 to-green-400 rounded-full "></div>
      <p className="text-sm font-light text-start text-gray-400">
      Leveraging tools like Sketch, Figma, or Adobe XD to create high-fidelity mockups and prototypes with purposeful micro-interactions, ensuring engaging user experiences. Staying updated on emerging technologies to incorporate innovative interactions into designs.
      </p>
    </div>
  );
};

export default InteractionDesign;
