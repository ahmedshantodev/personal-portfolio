import React from "react";
import { IoMdArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <section className="bg-primary-bg py-16">
      <div className="container flex items-center justify-between">
        <p className="text-2xl font-jost-medium">
          Copyright @2024,{" "}
          <span className="text-primary-color">Monsur Ahmed Shanto</span> All
          Rights Reserved.
        </p>

        <a href="#banner" className="text-2xl font-jost-medium flex items-center gap-x-2">
          Back To Top <IoMdArrowUp />
        </a>
      </div>
    </section>
  );
};

export default Footer;
