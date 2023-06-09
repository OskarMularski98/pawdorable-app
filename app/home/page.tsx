import React from "react";
import HeaderComponent from "@/components/HeaderComponent";
import BoxCarousel from "@/components/BoxCarousel";
import PetSelector from "@/components/PetSelector";

const page = () => {
  return (
    <div className=" max-w-7xl mx-auto px-8 gap-10 flex flex-col">
      <HeaderComponent />
      <BoxCarousel type={"details"} />
      <BoxCarousel type={"donations"} />
      <PetSelector />
      <BoxCarousel type={"guides"} />
    </div>
  );
};

export default page;
