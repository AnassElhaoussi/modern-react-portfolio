import React from "react"
import { Colors } from "../constants/Projects"

const ProjectCard = ({name, description, tech_stack, hosting, url}: {
    name: string,
    description: string,
    tech_stack: string[],
    hosting: string,
    url: string
}) => {
    
    return (
        <div className="p-5 space-y-5 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg lg:w-1/4 md:w-1/3 w-full">
            <h2 className="text-3xl font-semibold text-gray-700">{name}</h2>
            <p className="text-md text-gray-500"> {description} </p>
            <div className="flex gap-1 gap-y-2 flex-wrap">
                {tech_stack.map(tech => (
                    <span style={{backgroundColor: Colors[tech] }} className={`text-sm p-1 rounded-md shadow-xl `}>{tech}</span>
                    
                ))}
            </div>
            <h4 >Hosting : {hosting} </h4>
            <a href={url} className="flex  items-center gap-3 text-gray-700 hover:bg-gray-200 rounded-md w-fit p-1 transition-all">
                <img className="w-4 h-4 " src="https://upload.wikimedia.org/wikipedia/commons/5/56/Chain_link_icon_slanted.png" alt="" />
                Project's link
            </a>
        </div>
    )
}

export default ProjectCard