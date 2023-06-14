import React from "react";

const GuidesDetails = ({ title, img }) => {
  return (
    <div className="bg-white rounded-[19px] relative my-4 mx-3 p-[19px] items-center shadow-lg flex flex-row">
      <div className=" flex flex-row">
        <div>{title}</div>
        <img src={img} className=" w-1/2 rounded-[19px]" alt="loading" />
      </div>
    </div>
  );
};

export default GuidesDetails;
