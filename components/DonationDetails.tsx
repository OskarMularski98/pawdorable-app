import React from "react";

const DonationDetails = ({ name, img, topDonator }) => {
  return (
    <div className="bg-white rounded-[19px] relative my-4 mx-3 p-[19px] items-center shadow-lg flex flex-row">
      <div className=" flex flex-col ">
        {topDonator && (
          <div className=" absolute top-0 font-bold left-[50%] translate-x-[-50%]">
            Top Donator
          </div>
        )}
        <div className=" text-center">{name}</div>
        <div className="flex justify-center">
          <img src={img} alt="loading..." className=" w-8/12" />
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
