import React from "react";

const SkillsListItem = ({ image, name, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="block bg-white border rounded-[8px] overflow-hidden w-full py-7 cursor-pointer"
    >
      <div className="bg-white w-[100px] aspect-square mx-auto rounded-[12px] overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </div>

      <p className="text-[28px] mt-3 font-syne-SemiBold">{name}</p>
    </a>
  );
};

export default SkillsListItem;
