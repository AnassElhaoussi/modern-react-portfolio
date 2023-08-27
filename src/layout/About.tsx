import React from "react";
import AboutCard from "../additional_ui/about/AboutCard";
import { aboutPageImage1, curvedLine, quotationMark } from "../assets";
import { SmallCard } from "../additional_ui/Cards";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Skills from "../components/Skills";


const About = () => {
  return (
    <section className="flex flex-col gap-10 px-10 ">
      <div className="flex items-start justfiy-start gap-10">
        <div className="relative w-[40%] ">
          <div className="absolute w-1/2 right-40 h-3/4 bg-blue-900 blur-3xl"></div>
          <div className="relative z-0 ">
            <img
              src={aboutPageImage1}
              className="relative w-full -top-32 grayscale "
              alt=""
            />
            <SmallCard className="absolute bg-gray-300 p-2 rounded-lg text-sm bottom-44 z-10">
              I can make digital products
            </SmallCard>
            <SmallCard className="absolute bg-black p-2 rounded-lg text-white text-sm right-0 top-72 z-10">
              I'm an experienced freelancer
            </SmallCard>
          </div>
        </div>
        <div className="flex flex-col items-start gap-y-8 w-2/3">
          <div className="relative flex flex-col gap-y-5">
            <img
              src={curvedLine}
              className="absolute right-0 top-0 w-32 "
              alt=""
            />
            <div className="space-y-2">
              <h4 className="text-2xl text-blue-600 ">About</h4>
              <h2 className="flex items-center gap-4 text-6xl text-gray-800 font-black">
                <FontAwesomeIcon icon={faUser} className="text-5xl" /> Meet The Designer
              </h2>
            </div>
            <p className=" text-gray-700 text-xl leading-8">
              Greetings! I'm John, a passionate{" "}
              <span className="bg-blue-100 rounded-md text-blue-600 p-1">UI/UX designer</span>{" "}
              with a decade of experience in creating digital masterpieces. My
              journey in the realm of design began with a{" "}
              <span className="bg-blue-100 rounded-md text-blue-600 p-1">dream</span> to{" "}
              <span className="bg-blue-100 rounded-md text-blue-600 p-1">revolutionize</span> the
              way users interact with technology.
            </p>
          </div>
          <div className="space-y-2">
            <img src={quotationMark} className="w-20" alt="" />
            <p className="text-3xl text-gray-400 font-extralight leading-[2.8rem]">
              "Simplicity in design creates effortless user experiences. Every
              element serves a purpose, guiding users on a harmonious digital
              journey." <span className="font-bold "> - John</span>
            </p>
          </div>
          <button className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-3 px-6 rounded-lg text-lg font-light hover:px-8 transition-all shadow-2xl shadow-gray-400">See My Services</button>
        </div>
      </div>
    </section>
  );
};
export default About;
