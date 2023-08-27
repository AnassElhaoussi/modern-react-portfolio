import React from "react";
import { inkyText } from "../assets";
import InformationArchitecture from "./InformationArchitecture";
import InteractionDesign from "./InteractionDesign";
import UserCentricDesign from "./UserCentricDesign";
import SkillsGroup from "./SkillsGroup";

const Skills = () => {
  return (
    <div className="relative h-full flex flex-col items-center justify-center bg-black py-10">
      <img src={inkyText} alt="" className="absolute top-10 w-32 left-20 " />
      <div className="space-y-24 text-center">
        <div className="">
          <h2 className="text-7xl font-semibold text-white">Skills Matter!</h2>
          <h4 className="text-xl text-blue-700">These are some of mine</h4>
        </div>
        <SkillsGroup>
          <UserCentricDesign />
          <InformationArchitecture />
          <InteractionDesign />
        </SkillsGroup>
      </div>
    </div>
  );
};

export default Skills;
