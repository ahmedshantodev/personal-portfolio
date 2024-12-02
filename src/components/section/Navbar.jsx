import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <section className="bg-primary-bg fixed top-0 left-0 right-0 z-50 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
      <div className="container py-4 flex items-center justify-between">
        <div>
          <a
            href="mailto:ahmedshantodev@gmail.com"
            target="_blank"
            className="font-syne-regular text-[26px]"
          >
            ahmedshantodev@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-x-10">
          <a href="#connect" className="bg-transparent rounded-[40px] px-8 py-3 border-2 border-primary-color text-primary-color font-syne-regular text-xl font-semibold">
            Let Talk!
          </a>

          <button className="text-primary-color text-5xl">
            <HiMenuAlt3 />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
