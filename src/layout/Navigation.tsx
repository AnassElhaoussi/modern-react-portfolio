import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faInstagram} from "@fortawesome/free-solid-svg-icons"

const Navigation = () => {
    return (
        <nav className="px-10 flex items-center justify-between py-5">
            <a href="" className="font-light text-xl">Anass <span className="font-bold">ELHAOUSSI</span>.</a>
            <ul className="flex gap-20 text-md text-gray-800">
                <li className="cursor-pointer hover:text-blue-500 transition-colors">About</li>
                <li className="cursor-pointer hover:text-blue-500 transition-colors">Services</li>
                <li className="cursor-pointer hover:text-blue-500 transition-colors">Work</li>
                <li className="cursor-pointer hover:text-blue-500 transition-colors">Contact</li>
            </ul>
            <div className="flex gap-5 items-center">
                <a href="https://twitter.com/AnassX77" className="w-5">
                    <img src="https://img.freepik.com/vecteurs-libre/nouveau-logo-twitter-2023-x-fond-blanc-vecteur_1017-45422.jpg?size=338&ext=jpg&ga=GA1.1.1908636980.1712275200&semt=ais" alt="" />
                </a>
                <a href="https://github.com/AnassElhaoussi" className="w-5">
                    <img src="https://cdn-icons-png.freepik.com/512/25/25231.png" alt="" />
                </a>
                <a href="https://www.linkedin.com/in/anass-elhaoussi-b20a89223/" className="w-5">
                    <img src="https://img.freepik.com/vecteurs-premium/icone-application-linkedin-plus-grand-reseau-professionnel-au-monde-reseaux-sociaux-emplois-carrieres_277909-476.jpg" alt="" />
                </a>
            </div>
        </nav>
    )
}
export default Navigation