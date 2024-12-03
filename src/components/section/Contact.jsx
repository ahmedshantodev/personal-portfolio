import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <section id="connect" className="bg-primary-bg pt-[100px]">
      <div className="container bg-white rounded-[20px] px-16 py-[60px]">
        <div className="w-full text-center">
          <p className="font-syne-medium text-2xl text-primary-color">
            Contact
          </p>

          <h4 className="text-6xl font-syne-SemiBold mt-3">
            Get in Touch with Me!
          </h4>
        </div>

        <div className="flex gap-x-10 mt-10">
          <div className="w-[35%] border border-[#e4e4e5] rounded-[10px] p-10 flex items-center">
            <div>
              <div className="space-y-3 mb-12">
                <IoLocationOutline className="text-3xl text-primary-color" />

                <p className="text-2xl font-jost-medium">Address :</p>

                <p className="text-2xl font-jost-medium">Dhaka, Bangladesh</p>
              </div>

              <div className="space-y-3 mb-12">
                <FiPhone className="text-3xl text-primary-color" />

                <p className="text-2xl font-jost-medium">Contact Number :</p>

                <p className="text-2xl font-jost-medium">+88015-8151-2415</p>
              </div>

              <div className="space-y-3">
                <IoMailOpenOutline className="text-3xl text-primary-color" />

                <p className="text-2xl font-jost-medium">Email :</p>

                <p className="text-2xl font-jost-medium">
                  ahmedshantodev@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="w-[65%] border border-[#e4e4e5] rounded-[10px] p-10">
            <div>
              <label
                htmlFor="name"
                className="block font-jost-medium text-2xl text-[#444444]"
              >
                Full name :
              </label>

              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full border border-[#e4e4e5] hover:border-gray-600 py-4 px-5 rounded-[12px] mt-2 outline-none bg-[#f9f9f9] text-lg font-jost-reguler"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="email"
                className="block font-jost-medium text-2xl text-[#444444]"
              >
                Email :
              </label>

              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your name"
                className="w-full border border-[#e4e4e5] hover:border-gray-600 py-4 px-5 rounded-[12px] mt-2 outline-none bg-[#f9f9f9] text-lg font-jost-reguler"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="email"
                className="block font-jost-medium text-2xl text-[#444444]"
              >
                Your Message :
              </label>

              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                className="w-full border border-[#e4e4e5] hover:border-gray-600 py-4 px-5 rounded-[12px] mt-2 outline-none bg-[#f9f9f9] text-lg font-jost-reguler resize-none h-[150px]"
              ></textarea>
            </div>

            <button className="bg-primary-color text-white font-jost-medium text-xl px-10 py-3 rounded-[10px] mt-5 active:scale-[0.98] transition-all">
              Send Me Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
