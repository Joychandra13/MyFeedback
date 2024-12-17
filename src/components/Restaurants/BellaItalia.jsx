import React from "react";
import { FiMapPin, FiClock } from "react-icons/fi"; // Icons for location and time
import { NavLink } from "react-router-dom";

function BellaItalia() {
  return (
    <div>
      <p className="font-Roboto font-semibold text-base text-secondary p-[20px] container mx-auto">
        <NavLink to="/">
          {" "}
          <a className="hover:text-primary" href="#">
            Home{" "}
          </a>
        </NavLink>{" "}
        / All restaurants
      </p>
      <div
        className="relative w-full h-[552px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/Bellaitalia.png')" }} // Replace with your image path
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 lg:px-24 w-full max-w-[1200px] mx-auto text-white">
          {/* Title */}
          <h1 className="text-[52px] font-Lexend font-bold mb-[14px]">
            Bella italia
          </h1>

          {/* Ratings */}
          <div className="flex items-center mb-[28px]">
            <img src="/Bellaitalia (2).png" alt="" />
          </div>

          {/* Description */}
          <p className="text-white text-[19px] font-Roboto leading-relaxed mb-[66px]">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout. The lorem ipsum is, in printing,
            a series of meaningless words used temporarily to calibrate a
            layout.
          </p>

          {/* Location and Time */}
          <div className="flex-col items-start space-y-6 mb-[38px]">
            {/* Location */}
            <div className="flex items-center">
              <FiMapPin className="text-white mr-2" size={20} />
              <span className="text-white text-[19px] font-Roboto leading-relaxed">
                Singapore, Bishan-Ang Mo Kio Park
              </span>
            </div>
            {/* Open Time */}
            <div className="flex items-center">
              <FiClock className="text-white mr-2" size={20} />
              <span className="text-white text-[19px] font-Roboto leading-relaxed">
                7j/7, 08:00 - 22:00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BellaItalia;
