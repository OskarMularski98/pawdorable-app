import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";



const FilterComponent = ({ text, filterHandler }) => {
  return (
    <div
      onClick={filterHandler}
      className="bg-white rounded-[19px] shadow-lg font-bold py-1 flex flex-row justify-between px-2 items-center"
    >
      <div>{text}</div>
      <FontAwesomeIcon
        className="w-[15px]"
        color="#FF404D"
        icon={faChevronDown}
      />
    </div>
  );
};

export default FilterComponent;
