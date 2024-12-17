import React from "react";

function Card({ image, heading, des, review }) {
  return (
    <div className="bg-[#F8F8F8] rounded-lg shadow-lg  text-center">
      <img
        className="w-full h-[386px] object-cover rounded-lg"
        src={image}
        alt={heading}
      />
      <div className="p-4 text-start ">
        <h3 className="text-[22px] font-semibold text-secondary font-Lexend mb-2">{heading}</h3>
        <p className="text-base text-[#8F8F8F] font-Roboto mb-4">{des}</p>
        <img className="mb-4" src={review} alt={heading} />
      </div>
    </div>
  );
}

export default Card;
