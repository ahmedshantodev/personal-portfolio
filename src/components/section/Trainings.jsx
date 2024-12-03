import React from "react";
import cit from "../../../public/images/creativeit.png";

const Trainings = () => {
  return (
    <section id="trainings" className="bg-primary-bg pt-[90px]">
      <div className="container bg-white py-[80px] px-16 rounded-[20px]">
        <div className="w-full text-center">
          <p className="font-syne-medium text-2xl text-primary-color">
            Trainings
          </p>

          <h4 className="text-6xl font-syne-SemiBold mt-3">
            My Learning Expreiences
          </h4>
        </div>

        <div className="relative mx-auto mt-10 bg-white rounded-[20px] p-10 flex items-center justify-between gap-x-20 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="absolute top-0 right-0 bg-[#60a5fa] text-white font-syne-medium text-xl py-3 px-5 rounded-bl-[12px]">
            2023 - Present
          </div>

          <div className="w-[40%]">
            <div className="w-[400px] mx-auto">
              <img src={cit} alt="creative-it-institute" className="w-full" />
            </div>
          </div>

          <div className="w-[60%]">
            <h3 className="font-syne-medium text-[26px]">
              Course: MERN Stack Development
            </h3>
            <h3 className="font-syne-medium text-xl text-black/60">
              Institute: Creative IT Institute
            </h3>

            <div className="mt-5">
              <div className="inline-block text-black/60 bg-slate-200 px-4 py-[6px] rounded-3xl font-jost-SemiBold  text-[15px] mr-2.5">
                Duration: 14 months
              </div>

              <div className="inline-block text-black/60 bg-slate-200 px-4 py-[6px] rounded-3xl font-jost-SemiBold text-[15px]">
                Projects: 20+
              </div>
            </div>

            <div className="mt-5 flex gap-x-10">
              <ul className="list-disc text-black/60 font-syne-medium list-inside">
                <li>Concept of web design</li>
                <li>Deep Javascript, DOM, ECMAScript</li>
                <li>Node js, Express js, Asynchronous Programing</li>
              </ul>

              <ul className="list-disc text-black/60 font-syne-medium list-inside">
                <li>Bootstrap, Sass and Tailwind css</li>
                <li>React, React Native, Rest API</li>
                <li>Mongo DB, FIrebase, Socket.Io</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainings;
