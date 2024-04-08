import React from "react";
import AboutCard from "../additional_ui/about/AboutCard";
import { aboutPageImage1, alan_turing_img, curvedLine, quotationMark } from "../assets";
import { SmallCard } from "../additional_ui/Cards";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Skills from "../components/Skills";

const About = () => {
  return (
    <section className="flex flex-col gap-10 px-10 ">
      <div className="flex items-start justfiy-start gap-10">
        <div className="relative w-[40%] ">
          <div className="absolute w-1/2 right-40 top-20 h-3/4 bg-gray-700 blur-3xl"></div>
          <div className="relative z-0 ">
            <img
              src={alan_turing_img}
              className="relative w-full rounded-full "
              alt=""
            />

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
                <FontAwesomeIcon icon={faUser} className="text-5xl" /> Meet
                Anass!
              </h2>
            </div>
            <p className=" text-gray-700 text-xl leading-8">
              Greetings! I'm Anass ELHAOUSSI, from Morocco Casablanca, I'm a
              17-year-old <span className="text-blue-600 bg-blue-100 rounded-md">high school student</span> deeply passionate about coding,
              I've become a <span className="text-blue-600 bg-blue-100 rounded-md">self-taught full-stack developer</span>, proficient in
              tools like <span className="text-blue-600 bg-blue-100 rounded-md">React, NextJS</span>, and more. Currently, I'm honing my
              skills in <span className="text-green-600 bg-green-100 rounded-md">competitive programming</span>, eager to enhance
              <span className="text-green-600 bg-green-100 rounded-md"> problem-solving</span> abilities. My journey in web development is marked
              by a fascination with technology and a drive to innovate.
            </p>
          </div>
          <div className="space-y-2">
            <img src={quotationMark} className="w-20 grayscale" alt="" />
            <p className="text-3xl text-gray-400 font-extralight leading-[2.8rem]">
              "Those who can imagine anything can create" <span className="font-bold "> - Alan Turing</span>
            </p>
          </div>
          <button className="bg-blue-600 text-white py-2 px-7 shadow-2xl shadow-blue-500 rounded-full text-lg font-light border-2 border-transparent hover:bg-transparent hover:border-blue-600 hover:text-black transition-all shadow-2xl shadow-gray-400">
            See My Services
          </button>
        </div>
      </div>
    </section>
  );
};
export default About;
