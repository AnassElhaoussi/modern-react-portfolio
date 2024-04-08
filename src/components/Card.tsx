import React from "react"
import { blueSquiggle, paintingBrush, underlines } from "../assets"


const Card = () => {
    return (
        <section className="relative flex items-center justify-center gap-20 bg-gradient-to-r from-black to-gray-800 py-10">
            <img src={blueSquiggle} alt="" className="absolute top-10 left-10 w-32" />
            <div className="text-center bg-gray-900 p-4 text-white rounded-xl font-light pointer-events-none text-lg">
              <span className="block text-7xl font-extrabold text-blue-700">+50</span>
              Projects done
            </div>
            <div className="w-1/2 space-y-4">
                <h3 className="text-4xl font-semibold text-white">
                    Embracing the Art of <span className="relative">
                        <span className="relative z-10">Software engineering</span>
                        <img src={underlines} alt="" className="absolute -z-0 w-44 right-0 top-8 rotate-[20deg] " />
                    </span>
                </h3>
                <p className="text-gray-400 ">Passionate about web development since the age of 12, I create high-quality creative piece of software. After A successful launch on my first software-as-a-service that took me 4 months to complete, I am willing to work on other ones and expand my knowledge in all computer science related disciplines.</p>
                <button className="relative py-3 px-5 bg-blue-700 hover:bg-transparent hover:border-blue-700 border-2 border-transparent transition-all text-white rounded-lg font-light">See My Work</button>
            </div>
            <img src={paintingBrush} alt="" className="absolute bottom-5 right-10 w-24" />
        </section>
    )
}

export default Card