import React from "react";
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiShakeHandsLine } from "react-icons/ri";
import { MdFileDownload } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import ahmed from "../../../public/images/monsur-ahmed-shanto.jpeg";

const Banner = () => {
  let social = [
    {
      icon: FaGithub,
      link: "https://github.com/ahmedshantodev",
    },
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/ahmedshantodev",
    },
    {
      icon: FaXTwitter,
      link: "https://x.com/ahmedshantodev",
    },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/ahmedshantodev",
    },
  ];

  return (
    <section className="bg-primary-bg w-full">
      <div className="container flex gap-x-10 pt-[95px]">
        <div className="w-[30%] bg-white pb-10 p-10 rounded-[20px] text-center flex items-center justify-center">
          <div>
            <div className="w-full">
              <img
                src={ahmed}
                alt="monsur-ahmed-shanto"
                className="w-[65%] rounded-full mx-auto outline-[2px] outline-primary-color outline-dashed p-1"
              />
            </div>

            <div>
              <h1 className="font-jost-medium text-[34px] mt-5">
                Monsur Ahmed Shanto
              </h1>

              <p className="font-poppins text-lg text-[#44444a] mt-2">
                I am a Full Stack (MERN) Developer based in Bangladesh.
              </p>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                {social.map((item, index) => (
                  <a
                    key={index}
                    target="_blank"
                    href={item.link}
                    className="inline-block bg-white border borders-[#efefef] rounded-[10px] p-3 text-[25px] text-[#444444] cursor-pointer hover:text-primary-color transition-all duration-200 ease-in-out"
                  >
                    <item.icon />
                  </a>
                ))}
              </div>

              <a href="#connect">
                <button className="bg-primary-color text-white font-syne-medium text-xl px-10 py-4 rounded-[12px] mt-10 flex items-center gap-x-2.5 mx-auto">
                  Hire Me <RiShakeHandsLine />
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="w-[70%]">
          <div className="bg-white pt-10 pb-10 px-10 rounded-[20px] mb-10">
            <p className="font-poppins text-xl mb-7">Hello There!</p>

            <h1 className="text-[52px] font-poppins font-bold leading-[65px] uppercase tracking-[0.6px] mb-5">
              I'm a passionate{" "}
              <span className="text-primary-color">
                full-stack (MERN) developer
              </span>
              , solving complex problems with{" "}
              <span className="text-primary-color">elegant code</span> and
              innovative design.
            </h1>

            <div className="flex items-center gap-x-2.5">
              <div className="bg-primary-color w-[14px] aspect-square rounded-full"></div>
              <p className="font-poppins text-lg text-[#44446e]">
                Available for Freelancing
              </p>
            </div>

            <div className="mt-5 flex items-center gap-x-4">
              <button className="bg-primary-color border-2 border-primary-color text-white font-syne-medium text-xl px-10 py-4 rounded-[12px] flex items-center gap-x-2.5">
                Download CV <MdFileDownload />
              </button>

              <a
                href="#projects"
                className="bg-white border-2 border-primary-color text-primary-color font-poppins font-medium text-xl px-10 py-4 rounded-[12px] flex items-center gap-x-2.5"
              >
                My Work <MdArrowOutward />
              </a>
            </div>
          </div>

          <div className="bg-white py-10 rounded-[20px] overflow-hidden relative">
            <div className="w-[100px] bg-red-400s h-full absolute top-0 left-0 bg-gradient-to-r from-white via-white to-transparent z-10" />
            <div className="w-[100px] bg-red-400s h-full absolute top-0 right-0 bg-gradient-to-l from-white via-white to-transparent z-10" />

            <marquee>
              <h4 className="text-[26px] font-poppins font-medium -translate-x-[900px]">
                Leverage the power of MERN to build robust, scalable web
                applications. Outsource your development projects and get them
                delivered efficiently, remotely, and on time. As a full-stack
                MERN developer, I'm skilled in crafting innovative digital
                solutions that combine cutting-edge technologies with elegant
                design.
              </h4>
            </marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
