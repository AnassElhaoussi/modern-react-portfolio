import React from "react";
import { circle, curvedArrow, graphEmoji, main_image } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { SmallCard } from "../additional_ui/Cards";

const Home = () => {
  return (
    <section className="flex lg:gap-0 lg:items-stretch items-center gap-20 px-14 h-[32.55rem]">
      <div className="flex flex-col gap-5 items-start w-2/3">
        <div className="relative">
          <h1 className="relative z-10 xl:text-[5.4rem] lg:text-6xl text-5xl xl:leading-[5.7rem] lg:leading-[4.3rem] leading-[3rem] font-bold text-gray-800 ">
            Discover a decade of innovation in
            <br />
            <span className="flex items-center gap-x-3 text-blue-600 ">
              <FontAwesomeIcon
                icon={faPaintBrush}
                className="text-4xl bg-blue-100 rounded-full p-5"
              />
              <span>UI/UX Design</span>
            </span>
          </h1>
        </div>
        <p className="lg:w-2/3 w-full md:text-[1.10rem] text-sm md:leading-7 leading-6 text-gray-700">
          With over <span className="font-bold">10 years</span> of expertise in
          <span className="font-bold"> UI/UX Design</span>, I take pride in
          crafting visually captivating and user-centric digital experiences.
        </p>

        <button className="py-3 px-6 mt-3 bg-gradient-to-r from-blue-800 to-blue-500 text-white text-[1.12rem] hover:px-8 transition-all rounded-lg font-light shadow-xl shadow-gray-300">
          Contact Me.
        </button>
      </div>
      <div className="relative -top-20 w-1/3">
        <img
          src={curvedArrow}
          alt=""
          className="absolute w-32 top-10 lg:left-0 -left-16 rotate-[-45deg] "
        />
        <img
          src={main_image}
          alt=""
          className="grayscale relative z-10 xl:rounded-none rounded-full"
        />
        <div className="bg-blue-600 blur-3xl lg:h-3/4 h-2/3 lg:w-3/4 w-2/3 rounded-[5rem] absolute top-20 right-10 -z-10"></div>
        
        <span className="absolute bottom-12 -left-20 z-20 bg-gray-200 p-4 text-center rounded-2xl shadow-2xl shadow-gray-400">
          <span className="relative lg:text-5xl text-4xl font-extrabold">
            +100
            <img src={circle} alt="" className="absolute top-0" />
          </span>
          <br />
          Projects Done.
        </span>
        <SmallCard className="absolute top-44 right-10 z-10 py-1 px-3 rounded-md bg-yellow-400 font-light">
          Freelancer
        </SmallCard>
        <SmallCard className="absolute top-72 z-10 -left-10 py-1 px-3 rounded-md bg-black text-white font-light shadow-2xl">
          UI/UX Designer
        </SmallCard>
      </div>
    </section>
  );
};

export default Home;
