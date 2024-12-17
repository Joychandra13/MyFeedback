"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";

// Sample review data
const reviews = [
  {
    name: "Wei Jie",
    location: "Singapore, Little India",
    date: "29/11/2023",
    stars: 4,
    comment:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "Mei Ling",
    location: "Singapore, Orchard Boulevard",
    date: "09/05/2023",
    stars: 5,
    comment:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "Wei Xiong",
    location: "Singapore, Takashimaya",
    date: "01/05/2023",
    stars: 3,
    comment:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "Ming Wei",
    location: "Singapore, Little India",
    date: "31/04/2023",
    stars: 4,
    comment:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "Xin Yi",
    location: "Singapore, Zen rooms",
    date: "30/04/2023",
    stars: 5,
    comment:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "Zhi Hao",
    location: "Singapore, Boon Keng",
    date: "27/03/2023",
    stars: 5,
    comment:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "Li Hua",
    location: "Singapore, DLLM loklok",
    date: "24/03/2023",
    stars: 5,
    comment:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "Si Ying",
    location: "Singapore, Bedemeer",
    date: "11/03/2023",
    stars: 5,
    comment:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "Wei Ting",
    location: "Singapore, Toa Payoh",
    date: "28/02/2023",
    stars: 5,
    comment:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
];

const ReviewSection = () => {
  // States for sorting, filtering, and dropdown visibility
  const [selectedSort, setSelectedSort] = useState("All Feedbacks");
  const [selectedRating, setSelectedRating] = useState("All Ratings");
  const [filteredReviews, setFilteredReviews] = useState(reviews);
  const [isSortDropdownVisible, setSortDropdownVisible] = useState(false);
  const [isFilterDropdownVisible, setFilterDropdownVisible] = useState(false);

  // Handle filtering by rating (1-5 stars)
  const handleFilterByRating = (rating) => {
    setSelectedRating(rating);
    setFilterDropdownVisible(false);

    if (rating === "All Ratings") {
      setFilteredReviews(reviews); // Show all reviews if no specific rating is selected
    } else {
      const filtered = reviews.filter(
        (review) => review.stars === parseInt(rating)
      );
      setFilteredReviews(filtered);
    }
  };

  // Handle sorting by different options
  const handleSort = (option) => {
    setSelectedSort(option);
    let sorted = [...filteredReviews];
    if (option === "All Feedbacks") {
      setFilteredReviews(reviews);
    } else if (option === "Highest Rated") {
      sorted.sort((a, b) => b.stars - a.stars); // Sort by highest rating
      setFilteredReviews(sorted);
    } else if (option === "Oldest Rated") {
      sorted.sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date (oldest first)
      setFilteredReviews(sorted);
    }
  };

  return (
    <div className="container mx-auto py-[34px] px-2 md:px-0">
      {/* Filter and Sort Buttons */}
      <div className="flex justify-start gap-4 mb-[43px] ">
        {/* Filter Button Dropdown */}
        <div className="relative">
          <Button
            radius="full"
            variant="bordered"
            size="lg"
            onClick={() => setFilterDropdownVisible(!isFilterDropdownVisible)}
            className="font-Roboto"
          >
            Filter
          </Button>

          {/* Filter Dropdown Menu */}
          {isFilterDropdownVisible && (
            <div className="absolute top-[110%] right-[30px] bg-white border rounded-lg shadow-lg w-[200px] z-10">
              <div
                className={`p-2 cursor-pointer text-sm rounded-md ${
                  selectedRating === "5" ? "bg-blue-100" : "hover:bg-gray-100"
                }`}
                onClick={() => handleFilterByRating("5")}
              >
                5 Stars
              </div>
              <div
                className={`p-2 cursor-pointer text-sm rounded-md ${
                  selectedRating === "4" ? "bg-blue-100" : "hover:bg-gray-100"
                }`}
                onClick={() => handleFilterByRating("4")}
              >
                4 Stars
              </div>
              <div
                className={`p-2 cursor-pointer text-sm rounded-md ${
                  selectedRating === "3" ? "bg-blue-100" : "hover:bg-gray-100"
                }`}
                onClick={() => handleFilterByRating("3")}
              >
                3 Stars
              </div>
              <div
                className={`p-2 cursor-pointer text-sm rounded-md ${
                  selectedRating === "2" ? "bg-blue-100" : "hover:bg-gray-100"
                }`}
                onClick={() => handleFilterByRating("2")}
              >
                2 Stars
              </div>
              <div
                className={`p-2 cursor-pointer text-sm rounded-md ${
                  selectedRating === "1" ? "bg-blue-100" : "hover:bg-gray-100"
                }`}
                onClick={() => handleFilterByRating("1")}
              >
                1 Star
              </div>
            </div>
          )}
        </div>

        {/* Sort Button Dropdown */}

        <div className="relative">
          <Button
            radius="full"
            variant="bordered"
            size="lg"
            startContent={<img src="/Allrestaurants (1).png" alt="" />}
            onClick={() => setSortDropdownVisible(!isSortDropdownVisible)}
            className="font-Roboto mr-[30px]"
          >
            {selectedSort}
          </Button>

          {/* Sort Dropdown Menu */}
          {isSortDropdownVisible && (
            <div className="absolute top-[110%] right-[30px] bg-white border rounded-lg shadow-lg w-[200px] z-10">
              <div
                className={`p-2 cursor-pointer text-sm rounded-md ${
                  selectedSort === "All Feedbacks"
                    ? "bg-blue-100"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleSort("All Feedbacks")}
              >
                All Feedbacks
              </div>
              <div
                className={`p-2 cursor-pointer text-sm rounded-md ${
                  selectedSort === "Highest Rated"
                    ? "bg-blue-100"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleSort("Highest Rated")}
              >
                Highest Rated
              </div>
              <div
                className={`p-2 cursor-pointer text-sm rounded-md ${
                  selectedSort === "Oldest Rated"
                    ? "bg-blue-100"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleSort("Oldest Rated")}
              >
                Oldest Rated
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="space-y-[27px] mb-10">
        {filteredReviews.map((review, index) => (
          <div
            key={index}
            className="p-[21px] bg-[#F8F8F8] rounded-lg shadow-sm flex "
          >
            <div className="max-w-[579px] flex gap-[9px]">
              {/* Avatar Placeholder */}
              <div className="flex items-start">
                <div className="w-[60px] h-[60px] rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-xl">
                  <img src="/ReviewCarousel (1).png" alt="" />
                </div>
              </div>
              {/* Review Content */}
              <div>
                <h4 className="font-semibold font-Lexend text-[21px]">
                  {review.name}
                </h4>
                <p className="text-[#8A8A8A] text-base">{review.location}</p>
                <div className="flex items-end gap-2 mt-[14px] mb-[28px] h-[22px]">
                  <img src="/Bellaitalia (11).png" alt="" />
                  <span className="text-sm text-[#343434]">{review.date}</span>
                </div>
                <p className="text-[#5E5E5E] mt-2 text-base font-Roboto">
                  {review.comment}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[86px]">
        <Button radius="full" color="primary" size="lg" className="font-Roboto">
          Show more reviews{" "}
        </Button>
      </div>
    </div>
  );
};

export default ReviewSection;
