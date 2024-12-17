"use client";
import React from "react";
import { Progress } from "@nextui-org/react";

const RatingSection = () => {
  const ratings = [
    { stars: 5, value: 80 },
    { stars: 0, value: 50 },
    { stars: 0, value: 30 },
    { stars: 0, value: 10 },
    { stars: 0, value: 5 },
  ];

  return (
    <div className="container mx-auto mt-[57px] pb-[60px] border-b-1 p-6 flex flex-col md:flex-row items-start gap-8">
      {/* Title Section */}
      <div className="flex items-start gap-4 mb-6 md:mb-0 w-full md:w-1/3">
        <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-yellow-500">
          <img src="/Bellaitalia (10).png" alt="" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Overall Rating</h3>
          <p className="text-gray-500 text-base font-Roboto mb-[28px]">834 Reviews</p>
          <img src="/Bellaitalia (11).png" alt="" />
        </div>
      </div>

      {/* Star Progress Bars */}
      <div className="space-y-4 w-full md:w-2/3">
        {ratings.map((rating) => (
          <div key={rating.stars} className="flex items-center gap-4">
            <span className="w-12 text-gray-700 text-sm font-medium">
              {rating.stars} stars
            </span>
            <Progress
              aria-label={`${rating.stars} star rating`}
              value={rating.value}
              size="md"
              color="primary"
              className="flex-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingSection;
