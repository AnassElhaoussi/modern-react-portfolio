import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faInstagram} from "@fortawesome/free-solid-svg-icons"

const Navigation = () => {
    return (
        <nav className="px-10 flex items-center justify-between py-5">
            <a href="" className="font-[750] text-xl">John.</a>
            <ul className="flex gap-20 text-md text-gray-800">
                <li className="cursor-pointer hover:text-blue-500 transition-colors">About</li>
                <li className="cursor-pointer hover:text-blue-500 transition-colors">Services</li>
                <li className="cursor-pointer hover:text-blue-500 transition-colors">Work</li>
                <li className="cursor-pointer hover:text-blue-500 transition-colors">Contact</li>
            </ul>
            <div>
                
            </div>
        </nav>
    )
}
export default Navigation