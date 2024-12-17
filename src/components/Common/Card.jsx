import React from "react";

function Card() {
  return (
    <>
                <div key={slide.id} className="w-full md:w-[25%] sm:w-[50%] flex-shrink-0 p-4">
                  <div className="bg-white rounded-lg shadow-lg  text-center">
                    <img
                      className="w-full h-[213px] object-cover rounded-lg"
                      src={slide.image}
                      alt={slide.heading}
                    />
                    <div className="p-4 text-start">
                    <h3 className="text-lg font-bold text-primary mb-2">{slide.heading}</h3>
                    <p className="text-sm text-secondary mb-4">{slide.des}</p>
                    <img
                      className="mb-4"
                      src={slide.review}
                      alt={slide.heading}
                    />
                    </div>
                  </div>
                </div>
    </>
  );
}

export default Card;
