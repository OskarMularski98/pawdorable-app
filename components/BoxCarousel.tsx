import React from "react";

const BoxCarousel = () => {
  return (
    <div className=" flex flex-col">
      <div className="">The Closest</div>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className=" flex flex-row">
            <div>Bedi</div>
            <div>Male</div>
          </div>
          <div className=" flex flex-row">
            <div>Likes</div>
            <div>37</div>
          </div>
          <div className=" flex flex-row">
            <div>Comments</div>
            <div>4</div>
          </div>
          <div className=" flex flex-row">
            <div>Distance</div>
            <div>12 km</div>
          </div>
        </div>
        <div>img</div>
      </div>
    </div>
  );
};

export default BoxCarousel;
