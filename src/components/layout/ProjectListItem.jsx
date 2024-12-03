import React, { useEffect, useState } from "react";
import TechnologyListItem from "./TechnologyListItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectListItem = ({
  index,
  name,
  description,
  technologys,
  images,
  preview,
  github,
}) => {
  const [isOdd, setIsOdd] = useState(false);

  useEffect(() => {
    function check(number) {
      number % 2 === 1 ? setIsOdd(true) : setIsOdd(false);
    }

    check(index);
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
  };

  return (
    <div
      className={
        isOdd
          ? "w-full bg-white border p-10 rounded-[8px] flex flex-row-reverse items-center gap-x-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          : "w-full bg-white border p-10 rounded-[8px] flex items-center gap-x-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
      }
    >
      <div className="w-1/2">
        <Slider {...settings}>
          {images.map((item, index) => (
            <div className="w-full h-full rounded-[12px] overflow-hidden border outline-none">
              <img
                src={item}
                alt={name}
                className="w-full h-full object-cover outline-none"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="w-1/2">
        <h4 className="font-syne-SemiBold text-4xl text-black">{name}</h4>

        <p className="font-poppins text-[#444444] text-xl mt-4">
          {description}
        </p>

        <div className="mt-5 flex items-center flex-wrap gap-2.5">
          {technologys.map((item, index) => (
            <TechnologyListItem name={item} />
          ))}
        </div>

        <div className="mt-10 space-x-3">
          <a
            href={preview}
            target="_blank"
            className="bg-primary-color text-white py-2.5 px-10 rounded-[7px] font-poppins text-[17px] outline-none"
          >
            Live Preview
          </a>

          <a
            href={github}
            target="_blank"
            className="bg-black text-white py-2.5 px-10 rounded-[7px] font-poppins text-[17px] outline-none"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectListItem;
