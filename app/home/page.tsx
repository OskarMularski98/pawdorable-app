import React from "react";
import HeaderComponent from "@/components/HeaderComponent";
import BoxCarousel from "@/components/BoxCarousel";

const page = () => {
  return (
    <div className=" max-w-7xl mx-auto px-8 gap-10 flex flex-col">
      <HeaderComponent />
      <BoxCarousel title="The Closest" type={'details'} />
      <BoxCarousel title="Last Donations" type={'donations'} />
    </div>
  );
};

export default page;
