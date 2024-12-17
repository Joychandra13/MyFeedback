import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

// Dummy data for restaurants
const restaurants = [
  {
    id: 1,
    name: "The snug",
    review: "/ar1 (3).png",
    image: "/Allrestaurants (8).png",
    description:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    reviews: 654,
    date: "2023-03-15",
  },
  {
    id: 2,
    name: "Bottega",
    review: "/ar1 (2).png",
    image: "/Allrestaurants (7).png",
    description:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    reviews: 1654,
    date: "2024-03-13",
  },
  {
    id: 3,
    name: "Little Shucker",
    review: "/ar1 (1).png",
    image: "/Allrestaurants (6).png",
    description:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    reviews: 553,
    date: "2022-03-16",
  },
  {
    id: 4,
    name: "Lokma",
    review: "/ar1 (3).png",
    image: "/Allrestaurants (5).png",
    description:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    reviews: 654,
    date: "2023-03-16",
  },
  {
    id: 5,
    name: "Starbelly",
    review: "/ar1 (3).png",
    image: "/Allrestaurants (4).png",
    description:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    reviews: 654,
    date: "2023-03-17",
  },
  {
    id: 6,
    name: "The melt",
    review: "/ar1 (3).png",
    image: "/Allrestaurants (3).png",
    description:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    reviews: 654,
    date: "2023-03-18",
  },
  {
    id: 7,
    name: "The melt",
    review: "/ar1 (3).png",
    image: "/Allrestaurants (2).png",
    description:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    reviews: 654,
    date: "2023-03-18",
  },
];

function AllRestaurantsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All Feedbacks");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  const handleFilter = (value) => {
    setSelectedFilter(value);
    setDropdownVisible(false);

    let sorted = [...restaurants];
    if (value === "Highest Rated") {
      sorted.sort((a, b) => b.reviews - a.reviews);
    } else if (value === "Oldest Rated") {
      sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setFilteredRestaurants(sorted);
  };

  return (
    <div className="flex flex-col lg:flex-row ms-5 lg:ms-[100px] w-full mb-[145px] ">
      {/* Left Side: Restaurant List */}
      <div className="lg:w-1/2 w-full overflow-y-auto bg-white mt-[20px]">
        <p className="font-Roboto font-semibold text-base text-secondary">
          <NavLink to="/"> <a className="hover:text-primary" href="#">Home </a></NavLink> / All restaurants
        </p>
        <div className="flex items-center justify-between mt-[11px] mb-[20px] relative">
          <h2 className="text-[32px] font-Lexend font-extrabold text-secondary">
            Best Restaurants in Singapore
          </h2>

          {/* Dropdown Button */}
          <div className="relative">
            <Button
              radius="full"
              variant="bordered"
              size="lg"
              startContent={ <img src="/Allrestaurants (1).png" alt=""/>}
              onClick={() => setDropdownVisible(!isDropdownVisible)}
              className="font-Roboto mr-[30px]"
            >
              {selectedFilter === "All Feedbacks" ? "Sort" : selectedFilter}
            </Button>

            {/* Dropdown Menu */}
            {isDropdownVisible && (
              <div className="absolute top-[110%] right-[30px] bg-white border rounded-lg shadow-lg w-[200px] z-10">
                <div
                  className={`p-2 cursor-pointer text-sm rounded-md ${
                    selectedFilter === "All Feedbacks"
                      ? "bg-blue-100"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleFilter("All Feedbacks")}
                >
                  All Feedbacks
                </div>
                <div
                  className={`p-2 cursor-pointer text-sm rounded-md ${
                    selectedFilter === "Highest Rated"
                      ? "bg-blue-100"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleFilter("Highest Rated")}
                >
                  Highest Rated
                </div>
                <div
                  className={`p-2 cursor-pointer text-sm rounded-md ${
                    selectedFilter === "Oldest Rated"
                      ? "bg-blue-100"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleFilter("Oldest Rated")}
                >
                  Oldest Rated
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Restaurant List */}
        {filteredRestaurants.map((restaurant, index) => (
          <NavLink to="/bellaItalia">
          <div
            key={restaurant.id}
            className={`flex items-center mb-6 pb-6 lg:pr-[115px] ${
              index !== filteredRestaurants.length - 1 ? "border-b" : ""
            }`}
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
              <img src={restaurant.review} alt="" />
            </div>
          </div>
          </NavLink>
        ))}

        <Button
          radius="full"
          color="primary"
          size="lg"
          className="font-Roboto mt-[20px]"
        >
          Show more
        </Button>
      </div>

      {/* Right Side: Map */}
      <div className="lg:w-1/2 w-full mt-5 lg:mt-0">
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
