import Image from "next/image";
import React from "react";
import distanceImg from "../../public/location.svg";
import commentImg from "../../public/comment-regular.svg";
import likeImg from "../../public/like.svg";
import { faMars } from "@fortawesome/free-solid-svg-icons";
import { faVenus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PetsDetails = ({ name, sex, likes, comments, distance, img }) => {
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

const DonationDetails = ({ name, img, topDonator }) => {
  return (
    <div className="bg-white rounded-[19px] relative my-4 mx-3 p-[19px] items-center shadow-lg flex flex-row">
      <div className=" flex flex-col ">
        {topDonator && <div className=" absolute top-0 font-bold left-[50%] translate-x-[-50%]">Top Donator</div>}
        <div className=" text-center">{name}</div>
        <div className="flex justify-center">
          <img src={img} alt="loading..." className=" w-8/12" />
        </div>
      </div>
    </div>
  );
};

const BoxComponent = ({
  type,
  name,
  sex,
  likes,
  comments,
  distance,
  img,
  topDonator,
}) => {
  if (type === "details") {
    return (
      <PetsDetails
        name={name}
        sex={sex}
        likes={likes}
        comments={comments}
        distance={distance}
        img={img}
      />
    );
  } else if (type === "donations") {
    return <DonationDetails name={name} img={img} topDonator={topDonator} />;
  }
};

export default BoxComponent;
