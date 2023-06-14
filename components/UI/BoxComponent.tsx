import React from "react";
import PetsDetails from "../PetsDetails";
import GuidesDetails from "../GuidesDetails";
import DonationDetails from "../DonationDetails";

const BoxComponent = ({
  type,
  name,
  sex,
  likes,
  comments,
  distance,
  img,
  topDonator,
  title,
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
  } else if (type === "guides") {
    return <GuidesDetails title={title} img={img} />;
  }
};

export default BoxComponent;
