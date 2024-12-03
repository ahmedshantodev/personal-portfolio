import React from "react";
import ahmedLogo from "../../../public/images/ahmed-logo.svg";

const Navbar = () => {
  let menu = [
    {
      name: "home",
      link: "#",
    },
    {
      name: "skills",
      link: "#skills",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Connect Me",
      link: "#connect",
    },
  ];

  return (
    <section className="bg-primary-bg sticky top-0 left-0 right-0 z-50 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
      <div className="container py-5 flex items-center justify-between">
        <a href="#">
          <img
            src={ahmedLogo}
            alt="monsur ahmed shanto"
            className="w-[50px] aspect-square object-cover"
          />
        </a>

        <ul className="flex items-center gap-x-12">
          {menu.map((item, index) => (
            <li className="font-syne-SemiBold text-2xl text-primary-color capitalize">
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
