import React from "react";
import { Button } from "@nextui-org/react";

function Resources() {
  return (
    <>
      <div className="mt-[84px] bg-[#F2F2F2]">
        <div className="flex flex-wrap flex-col-reverse lg:flex-row container mx-auto justify-center p-[26px] gap-[50px] lg:items-center ">
          <div className=" text-start ">
            <h1 className="text-[26px] font-extrabold text-secondary">MyFeedback for Business has <br /> resources to help you plan, start <br />, grow, and advertise your small <br /> business</h1>
            <p className="mt-[25px] text-base text-[#5E5E5E] font-Roboto"> The lorem ipsum is, in printing, a series of meaningless words <br /> used temporarily to calibrate a layout.</p>
            <Button color="secondary" radius="full" size="lg" className="mt-[63px] font-Roboto">Explore MyFeedback business</Button>
          </div>
          <div className="">
            <img src="/resources.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Resources;
