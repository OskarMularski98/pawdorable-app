import React from "react";
import HeaderComponent from "@/components/HeaderComponent";
import BoxCarousel from "@/components/BoxCarousel";

const page = () => {
  return (
    <div className=" max-w-7xl mx-auto px-8 flex flex-col">
      <HeaderComponent />
      <BoxCarousel />
    </div>
  );
};

export default page;
