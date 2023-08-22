import React from 'react'
import { faMars } from "@fortawesome/free-solid-svg-icons";
import { faVenus } from "@fortawesome/free-solid-svg-icons";
import distanceImg from "../../public/location.svg";
import commentImg from "../../public/comment-regular.svg";
import likeImg from "../../public/like.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PetsCarousel = ({ name, sex, likes, comments, distance, img }) => {
    return (
      <div className=" bg-white rounded-[19px] relative my-4 mx-3 p-[19px] justify-between items-center shadow-lg flex flex-row">
        <div className="flex flex-col gap-3">
          <div className=" flex flex-row gap-3">
            <div>{name}</div>
            {sex === "male" ? (
              <FontAwesomeIcon icon={faMars} color="#5569ED" />
            ) : (
              <FontAwesomeIcon icon={faVenus} color="#EC5564" />
            )}
          </div>
          <div className=" flex flex-row gap-3">
            <img src={likeImg.src} alt="loading..." width={20} />
            <div> {likes} </div>
          </div>
          <div className=" flex flex-row gap-3">
            <img src={commentImg.src} alt="loading..." width={20} />
            <div> {comments} </div>
          </div>
          <div className=" flex flex-row gap-3">
            <img src={distanceImg.src} alt="loading..." width={18} />
            <div>{distance} km</div>
          </div>
        </div>
        <img
          src={img}
          alt="loading..."
          width={170}
          className=" absolute top-0 right-0 rounded-[19px]"
        />
      </div>
    );
  };

export default PetsCarousel