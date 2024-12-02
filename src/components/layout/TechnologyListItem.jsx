import React from "react";

const TechnologyListItem = ({ name }) => {
  return (
    <div className="inline-block text-black/60 bg-slate-200 px-4 py-[6px] rounded-3xl font-syne-SemiBold">
      {name}
    </div>
  );
};

export default TechnologyListItem;
