import HeaderComponent from "@/components/HeaderComponent";
import PetsDetails from "@/components/PetsDetails";
import pets from "@/config/pets";
import React from "react";
import filterImg from "/public/filter.svg";
import sortImg from "/public/Group415.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 gap-10 flex flex-col">
      <HeaderComponent />
      <div className="flex flex-row justify-between mx-3">
        <div className="flex flex-row items-center justify-between py-2 bg-white rounded-[19px] px-3 w-1/6 shadow-lg">
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
