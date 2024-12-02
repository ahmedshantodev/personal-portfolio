import React from "react";
import ProjectListItem from "../layout/ProjectListItem";
import { projects } from "../../data/project";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <section id="project" className="bg-primary-bg pt-[120px]">
      <div className="container">
        <div className="w-full text-center">
          <p className="font-syne-medium text-2xl text-primary-color">
            Portfolio
          </p>

          <h4 className="text-6xl font-syne-SemiBold mt-3">My Recent Work</h4>
        </div>

        <div className="mt-12">
          {projects.map((item, index) => (
            <div key={index} className="mb-10">
              <ProjectListItem
                key={index}
                index={index}
                name={item.name}
                description={item.description}
                technologys={item.technologys}
                images={item.images}
                preview={item.preview}
                github={item.github}
              />
            </div>
          ))}
        </div>

        <div>
          <button className="bg-primary-color text-white py-3 px-10 rounded-[10px] font-syne-medium text-xl flex items-center gap-x-3 mx-auto">
            View All Projects <MdArrowOutward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
