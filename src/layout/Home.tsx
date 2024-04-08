import React from "react";
import { circle, curvedArrow, graphEmoji, main_image } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { SmallCard } from "../additional_ui/Cards";

const Home = () => {
  return (
    <section className="flex lg:gap-0 lg:items-stretch items-center gap-20 px-14 h-[32.55rem]">
      <div className="flex flex-col gap-5 items-center w-screen">
        <div className="relative">
          <h1 className="relative text-center z-10 xl:text-[5.4rem] lg:text-6xl text-5xl xl:leading-[5.7rem] lg:leading-[4.3rem] leading-[3rem] font-bold text-gray-800 ">
            Meet me! <br />
            My name is
            <span className="flex items-center font-semibold gap-x-3 text-blue-600 bg-blue-100 rounded-full mt-3">
              Anass ELHAOUSSI
            </span>
          </h1>
        </div>
        <p className="lg:w-2/3 text-center  md:text-[1.10rem] text-sm md:leading-7 leading-6 text-gray-700 relative">
          A 17-yo High schooler intersted in various fields in computer science
          and sharing his{" "}
          <span className="bg-blue-100 rounded-md">knowledge</span> and{" "}
          <span className="bg-blue-100 rounded-md">experience</span>.
          <img
            src="https://static.vecteezy.com/system/resources/previews/021/998/564/non_2x/hand-drawn-circle-highlighting-free-png.png"
            className="absolute w-32 -top-2 left-20"
            alt=""
          />
        </p>

        <button className="py-3 px-6 mt-3 bg-gradient-to-r from-blue-800 to-blue-500 text-white text-[1.12rem] hover:scale-105 transition-all rounded-lg font-light shadow-xl shadow-gray-300">
          Contact Me.
        </button>
      </div>
    </section>
  );
};

export default Home;
