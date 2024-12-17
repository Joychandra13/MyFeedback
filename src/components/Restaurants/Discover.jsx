import React from 'react'
import Card from "../Common/Card";
import { Button } from "@nextui-org/react";

function Discover() {
    const cardsData = [

        {
          id: 1,
          image: "/Bellaitalia (19).png",
          heading: "The melt",
          des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
          review: "/Bellaitalia (22).png",
        },
        {
          id: 2,
          image: "/Bellaitalia (20).png",
          heading: "Lokma",
          des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
          review: "/Bellaitalia (23).png",
        },
        {
          id: 3,
          image: "/Bellaitalia (21).png",
          heading: "The snug",
          des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
          review: "/Bellaitalia (1).png",
        },

      ];
    
      return (
        <div className="container mx-auto mb-[77px]">
          <h1 className="mt-[42px] mb-[25px] text-[32px] font-Lexend font-extrabold">Also discover...</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[23px] ">
            {cardsData.map((card) => (
              <Card
              key={card.id}
              image={card.image}
              heading={card.heading}
              des={card.des}
              review={card.review}
              />
            ))}
          </div>

        </div>
      );
    }

export default Discover