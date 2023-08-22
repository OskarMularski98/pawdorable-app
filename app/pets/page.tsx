"use client";
import HeaderComponent from "@/components/HeaderComponent";
import PetsDetails from "@/components/PetsDetails";
import pets from "@/config/pets";
import React, { useState } from "react";
import filterImg from "/public/filter.svg";
import sortImg from "/public/Group415.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import FilterComponent from "@/components/UI/FilterComponent";

const page = () => {
  const [filter, setFilter] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const filterHandler = (e) => {
    setIsClicked(!isClicked);
    console.log(e.target)
    if (!isClicked) {
      e.target.style.borderBottomLeftRadius = "0px";
      e.target.style.borderBottomRightRadius = "0px";
    } else {
      e.target.style.borderBottomLeftRadius = "19px";
      e.target.style.borderBottomRightRadius = "19px";
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-8 gap-10 flex flex-col">
      <HeaderComponent />
      <div className="flex flex-row justify-between mx-3">
        <div
          onClick={() => setFilter(!filter)}
          className="flex flex-row items-center cursor-pointer justify-between py-2 bg-white rounded-[19px] px-3 w-1/6 shadow-lg"
        >
          <div className=" flex flex-row gap-2">
            <img src={filterImg.src} />
            <div className=" font-bold">Filters</div>
          </div>
          <FontAwesomeIcon
            className="w-[15px]"
            color="#FF404D"
            icon={faChevronDown}
          />
        </div>
        <div className="flex flex-row items-center justify-between py-2 bg-white rounded-[19px] px-3 w-1/6 shadow-lg">
          <div className=" flex flex-row gap-2">
            <img src={sortImg.src} />
            <div className=" font-bold">Sort</div>
          </div>
          <FontAwesomeIcon
            className="w-[15px]"
            color="#FF404D"
            icon={faChevronDown}
          />
        </div>
      </div>
      {filter && (
        <div className=" flex flex-col gap-5">
          <div className="flex flex-row gap-2 mx-3">
            <div className="bg-white text-[#FF404D] rounded-[19px] w-1/6 shadow-lg py-1 font-bold text-center">
              Dog
            </div>
            <div className="bg-white text-[#FF404D] rounded-[19px] w-1/6 shadow-lg py-1 font-bold text-center">
              Cat
            </div>
          </div>
          <div className="grid grid-cols-3 w-1/2 items-start gap-2 mx-3">
            <div className="">
              <FilterComponent
                filterHandler={filterHandler}
                text={"Distance"}
              />
              {isClicked && (
                <div className=" bg-white rounded-b-[19px] shadow-lg py-10 relative">
                  <div className=" absolute left-[50%] translate-x-[-50%] top-[50%]">
                    <input type="range" />
                  </div>
                </div>
              )}
            </div>
            <FilterComponent filterHandler={filterHandler} text={"Age"} />
            <FilterComponent filterHandler={filterHandler} text={"Fur"} />
            <FilterComponent filterHandler={filterHandler} text={"Size"} />
            <FilterComponent filterHandler={filterHandler} text={"Character"} />
            <FilterComponent filterHandler={filterHandler} text={"Sex"} />
          </div>
        </div>
      )}
      <div className=" grid grid-cols-3">
        {pets.map((pet) => (
          <PetsDetails
            key={pet.name}
            name={pet.name}
            sex={pet.sex}
            likes={pet.likes}
            comments={pet.distance}
            distance={pet.distance}
            img={pet.img}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
