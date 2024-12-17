import { Button } from "@nextui-org/react";
import React from "react";
import { NavLink } from "react-router-dom";

// Dummy data for restaurants
const restaurants = [
  {
    id: 1,
    name: "The snug",
    reviews: "/ar1 (1).png",
    image: "/ Allrestaurants (8).png",
    description:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    id: 2,
    name: "Bottega",
    reviews: "/ar1 (1).png",
    image: "/ Allrestaurants (7).png",
    description:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    id: 3,
    name: "Little Shucker",
    reviews: "/ar1 (1).png",
    image: "/ Allrestaurants (6).png",
    description:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    id: 4,
    name: "Lokma",
    reviews: "/ar1 (1).png",
    image: "/ Allrestaurants (5).png",
    description:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    id: 5,
    name: "Starbelly",
    reviews: "/ar1 (1).png",
    image: "/ Allrestaurants (4).png",
    description:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    id: 6,
    name: "The melt",
    reviews: "/ar1 (1).png",
    image: "/ Allrestaurants (3).png",
    description:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
];

function AllRestaurantsPage() {
  return (
    <div className="flex flex-col lg:flex-row lg:ms-[100px] w-full mb-[145px] ">
      {/* Left Side: Restaurant List */}
      <div className="lg:w-1/2 w-full overflow-y-auto bg-white pr-[30px]">
        <p className="font-Roboto font-semibold text-base text-secondary">
          Home / All restaurants
        </p>
        <div className="flex items-center justify-between mt-[11px] mb-[47px]">
          <h2 className="text-[32px] font-Lexend font-extrabold  text-secondary">
            Best Restaurants in Singapore
          </h2>
          <Button variant="bordered" radius="full" size="lg">
            <img src="/ Allrestaurants (1).png" alt="" />
            Sort
          </Button>
        </div>
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="flex items-center mb-6 border-b pb-6 lg:pr-[115px] "
          >
            {/* Image */}
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-[209px] h-[189px] object-cover rounded-lg mr-4"
            />

            {/* Details */}
            <div className="flex-1">
              <h3 className="text-[22px] text-secondary font-Lexend font-semibold">
                {restaurant.name}
              </h3>
              <p className="text-[#8F8F8F] text-base mb-2">
                {restaurant.description}
              </p>

              {/* Ratings */}
              <img src={restaurant.reviews} alt="" />
            </div>
          </div>
        ))}
        <div className="flex items-center mb-6 pb-4">
          {/* Image */}
          <img
            src="/ Allrestaurants (2).png"
            alt=""
            className="w-[209px] h-[189px] object-cover rounded-lg mr-4"
          />

          {/* Details */}
          <div className="flex-1">
            <h3 className="text-[22px] text-secondary font-Lexend font-semibold">
              Arabia Nights
            </h3>
            <p className="text-[#8F8F8F] text-base mb-2">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.
            </p>

            {/* Ratings */}
            <img src="/ar1 (4).png" alt="" />
          </div>
        </div>
              <Button radius="full" color="primary" size="lg" className="font-Roboto mt-[20px]">Show more</Button>
        
      </div>

      {/* Right Side: Map */}
      <div className="lg:w-1/2 w-full">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=Singapore&output=embed"
          className="w-full md:h-[65%]"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default AllRestaurantsPage;
