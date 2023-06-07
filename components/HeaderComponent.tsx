import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const HeaderComponent = () => {
  return (
    <div className=" flex flex-col gap-10">
      <ul className="flex justify-between items-center">
        <li>
          <Image
            src="/logo-log-in.svg"
            width={70}
            height={70}
            alt="loading..."
          />
        </li>
        <div className="flex gap-10">
          <li>Adoption</li>
          <li>Donation</li>
          <li>Guides</li>
        </div>
        <div className="flex gap-10">
          <li>About us</li>
          <li>Contact</li>
        </div>
      </ul>
      <div className=" flex justify-center">
        <div className="relative shadow-lg rounded-[19px]">
          <input
            type="text"
            placeholder="Search"
            className="rounded-[19px] w-[600px] px-[19px] py-3"
          />
          <div className=" px-[19px] py-[14px] absolute top-0 right-0 bg-[#FF404D] rounded-[19px]">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              width="20px"
              color="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
