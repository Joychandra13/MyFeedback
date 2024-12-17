import React from "react";
import Card from "../Common/Card";
import { Button } from "@nextui-org/react";

function CardSection() {
  const cardsData = [

    {
      id: 1,
      image: "/cardsection (1).png",
      heading: "Bella Italia",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      review: "/cardreview (3).png",
    },
    {
      id: 2,
      image: "/cardsection (12).png",
      heading: "Little Shucker",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      review: "/cardreview (2).png",
    },
    {
      id: 3,
      image: "/cardsection (11).png",
      heading: "Marafuku Ramen",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      review: "/cardreview (4).png",
    },
    {
      id: 4,
      image: "/cardsection (10).png",
      heading: "Bottega",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      review: "/cardreview (5).png",
    },
    {
      id: 5,
      image: "/cardsection (9).png",
      heading: "Arabia Nights",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      review: "/cardreview (6).png",
    },
    {
      id: 6,
      image: "/cardsection (8).png",
      heading: "Lokma",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      review: "/cardreview (7).png",
    },
    {
      id: 7,
      image: "/cardsection (7).png",
      heading: "The snug",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      review: "/cardreview (8).png",
    },
    {
      id: 8,
      image: "/cardsection (6).png",
      heading: "Starbelly",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      review: "/cardreview (1).png",
    },
    {
      id: 9,
      image: "/cardsection (5).png",
      heading: "Iori",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      review: "/cardreview (6).png",
    },
    {
      id: 10,
      image: "/cardsection (4).png",
      heading: "Ngalley",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      review: "/cardreview (7).png",
    },
    {
      id: 11,
      image: "/cardsection (3).png",
      heading: "diogonal",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      review: "/cardreview (8).png",
    },
    {
      id: 12,
      image: "/cardsection (2).png",
      heading: "Kitoko",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      review: "/cardreview (1).png",
    },

    // Add more card data here
  ];

  return (
    <div className="container">
      <h1 className="mt-[102px] mb-[25px] text-[32px] font-Lexend font-extrabold">The latest trends</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[23px] ">
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
      <div className="text-center mt-[52px]">
      <h1 className="text-[22px] text-secondary">Discover more cool restaurants</h1>
      <Button radius="full" color="primary" size="lg" className="font-Roboto mt-[20px]">Show more</Button>
      </div>
    </div>
  );
}

export default CardSection;