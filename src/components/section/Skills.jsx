import React, { useState } from "react";
import SkillsListItem from "../layout/SkillsListItem";
import { frontend, backend, tools } from "../../data/skill";

const Skills = () => {
  let menu = ["Frontend", "Backend", "Tools"];
  const [activeMenuItem, setActiveMenuItem] = useState(menu[0]);

  return (
    <section id="skills" className="bg-primary-bg pt-[100px]">
      <div className="container flex items-start gap-x-20">
        <div className="w-full text-center">
          <p className="font-syne-medium text-2xl text-primary-color">
            Proficient Skills
          </p>

          <h4 className="text-6xl font-syne-SemiBold mt-3">
            Let’s Explore My Skills
          </h4>

          <div className="mt-10 flex items-center justify-center gap-x-5">
            {menu.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveMenuItem(item)}
                className={
                  item === activeMenuItem
                    ? "bg-primary-color text-white border-2 border-primary-color px-4 py-2 rounded-[8px] font-poppins text-lg"
                    : "bg-white text-primary-color border-2 border-primary-color px-4 py-2 rounded-[8px] font-poppins text-lg"
                }
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {activeMenuItem === "Frontend"
              ? frontend.map((item, index) => (
                  <div key={index} className="w-[16%]">
                    <SkillsListItem
                      image={item.image}
                      name={item.name}
                      link={item.link}
                    />
                  </div>
                ))
              : activeMenuItem === "Backend"
              ? backend.map((item, index) => (
                  <div key={index} className="w-[16%]">
                    <SkillsListItem
                      image={item.image}
                      name={item.name}
                      link={item.link}
                    />
                  </div>
                ))
              : tools.map((item, index) => (
                  <div key={index} className="w-[16%]">
                    <SkillsListItem
                      image={item.image}
                      name={item.name}
                      link={item.link}
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
