"use client";
import React, { useEffect, useRef } from "react";
import BoxComponent from "./UI/BoxComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pets from "@/config/pets";
import donations from "@/config/donations";
import guides from "@/config/guides";
import { useRouter } from "next/navigation";

const BoxDetails = () => {
  const router = useRouter();

  return (
    <div className=" flex flex-col">
      <div className=" flex flex-row justify-between">
        <div className=" font-bold">Nearby</div>
        <button
          className=" text-[#FF404D] font-bold"
          onClick={() => router.push("/pets")}
        >
          Show all
        </button>
      </div>
      <div className="flex justify-center items-center gap-5">
        <div
          id="swiper-back"
          className="bg-[#FF404D] cursor-pointer px-2 py-1 rounded-full"
        >
          <FontAwesomeIcon color="white" icon={faArrowLeft} />
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          autoplay
          navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
          spaceBetween={100}
          pagination={{ clickable: true }}
          loop={true}
          className=" rounded-[19px]"
        >
          <div>
            {pets.map((pet) => (
              <SwiperSlide key={pet.name}>
                <BoxComponent
                  type={"details"}
                  name={pet.name}
                  sex={pet.sex}
                  likes={pet.likes}
                  comments={pet.comments}
                  distance={pet.distance}
                  img={pet.img}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div
          id="swiper-forward"
          className="bg-[#FF404D] cursor-pointer px-2 py-1 rounded-full"
        >
          <FontAwesomeIcon color="white" icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

const BoxDonations = () => {
  return (
    <div className=" flex flex-col">
      <div className=" font-bold">Last Donations</div>
      <div className="flex justify-center items-center gap-5">
        <div
          id="swiper-back2"
          className="bg-[#FF404D] cursor-pointer px-2 py-1 rounded-full"
        >
          <FontAwesomeIcon color="white" icon={faArrowLeft} />
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          autoplay
          navigation={{ nextEl: "#swiper-forward2", prevEl: "#swiper-back2" }}
          spaceBetween={100}
          pagination={{ clickable: true }}
          loop={true}
          className=" rounded-[19px]"
        >
          <div>
            {donations.map((donation, index) => (
              <SwiperSlide key={donation.name}>
                <BoxComponent
                  type={"donations"}
                  name={donation.name}
                  img={donation.img}
                  topDonator={true ? index === 0 : false}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div
          id="swiper-forward2"
          className="bg-[#FF404D] cursor-pointer px-2 py-1 rounded-full"
        >
          <FontAwesomeIcon color="white" icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

const BoxGuides = () => {
  return (
    <div className=" flex flex-col">
      <div className=" font-bold">Guides</div>
      <div className="flex justify-center items-center gap-5">
        <div
          id="swiper-back3"
          className="bg-[#FF404D] cursor-pointer px-2 py-1 rounded-full"
        >
          <FontAwesomeIcon color="white" icon={faArrowLeft} />
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          autoplay
          navigation={{ nextEl: "#swiper-forward3", prevEl: "#swiper-back3" }}
          spaceBetween={100}
          pagination={{ clickable: true }}
          loop={true}
          className=" rounded-[19px]"
        >
          <div>
            {guides.map((guide) => (
              <SwiperSlide key={guide.id}>
                <BoxComponent
                  type={"guides"}
                  title={guide.title}
                  img={guide.img}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div
          id="swiper-forward3"
          className="bg-[#FF404D] cursor-pointer px-2 py-1 rounded-full"
        >
          <FontAwesomeIcon color="white" icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

const BoxCarousel = ({ type }) => {
  if (type === "details") {
    return <BoxDetails />;
  } else if (type === "donations") {
    return <BoxDonations />;
  } else if (type === "guides") {
    return <BoxGuides />;
  }
};

export default BoxCarousel;
