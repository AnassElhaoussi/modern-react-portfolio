import React from "react";
import { Projects } from "../constants/Projects";
import { Colors } from "../constants/Projects";
import ProjectCard from "../components/ProjectCard";

const Services = () => {
  return (
    <section className="p-10">
      <div className="space-y-10">
        <div className="space-y-2">
          <h4 className="text-blue-600 text-2xl">Projects</h4>
          <h2 className="text-3xl font-semibold text-gray-800">
            Here are the projects I have been recently working on
          </h2>
        </div>
        <div className="flex gap-5 flex-wrap justify-center">
          {Projects.map(({name, description, tech_stack, hosting, url }) => (
            <ProjectCard name={name} description={description} tech_stack={tech_stack} hosting={hosting} url={url} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
