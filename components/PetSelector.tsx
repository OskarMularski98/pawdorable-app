import React from "react";

const PetSelector = () => {
  return (
    <div className=" flex flex-col">
      <div className=" font-bold">Adoption</div>
      <div className=" flex flex-row justify-center gap-10">
        <button className="bg-white px-[100px] py-3 rounded-[19px] text-[#FF404D] font-bold shadow-lg text-[17px]">
          Dog
        </button>
        <button className="bg-white px-[100px] py-3 rounded-[19px] text-[#FF404D] font-bold shadow-lg text-[17px]">
          Cat
        </button>
      </div>
    </div>
  );
};

export default PetSelector;
