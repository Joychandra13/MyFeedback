import { useState } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

function ReviewCarousel() {
  const slides = [
    { id: 1, 
        icon: "/ReviewCarousel (1).png", 
        name: "Leslie sakho",
        location:"Canada, toronto",
        review:"/ReviewCarousel (5).png",
        date:"09/11/2023",
        des1: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", 
        des2:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        img: "/ReviewCarousel (2).png", 
        link:"Discover",
    },
    { id: 1, 
        icon: "/ReviewCarousel (1).png", 
        name: "Leslie sakho",
        location:"Canada, toronto",
        review:"/ReviewCarousel (5).png",
        date:"09/11/2023",
        des1: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", 
        des2:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        img: "/ReviewCarousel (2).png", 
        link:"Discover",
    },
    { id: 1, 
        icon: "/ReviewCarousel (1).png", 
        name: "Leslie sakho",
        location:"Canada, toronto",
        review:"/ReviewCarousel (5).png",
        date:"09/11/2023",
        des1: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", 
        des2:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        img: "/ReviewCarousel (2).png", 
        link:"Discover",
    },
    { id: 1, 
        icon: "/ReviewCarousel (1).png", 
        name: "Leslie sakho",
        location:"Canada, toronto",
        review:"/ReviewCarousel (5).png",
        date:"09/11/2023",
        des1: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", 
        des2:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        img: "/ReviewCarousel (2).png", 
        link:"Discover",
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cards per slide: Default 3 for larger screens, 2 for medium screens, and 1 for small screens
  const cardsPerSlide = 3; 
  const totalSlides = Math.ceil(slides.length / cardsPerSlide);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  // Group slides into chunks of 3 cards per slide
  const groupedSlides = [];
  for (let i = 0; i < slides.length; i += cardsPerSlide) {
    groupedSlides.push(slides.slice(i, i + cardsPerSlide));
  }

  return (
    <section className="overflow-hidden mt-[71px] mb-[64px] container mx-auto">
      <h1 className="text-secondary text-[32px] pb-[30px] font-Lexend font-extrabold ps-20">Recents avtivities</h1>
      <div className="relative w-full mx-auto overflow-hidden">
        {/* Carousel for all screen sizes */}
        <div
          className="flex transition-transform duration-500 "
          style={{
            transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
            width: `${totalSlides * 100}%`,
          }}
        >
          {groupedSlides.map((group, groupIndex) => (
            <div key={groupIndex} className="flex w-full justify-center">
              {group.map((slide) => (
                <div key={slide.id} className="w-full lg:w-[30%] flex-shrink-0 p-4">
                  <div className="bg-[#F8F8F8] rounded-lg shadow-lg  text-center ps-[12px] pr-10 py-[24px]">
                    <div className="flex items-center ">
                    <img
                      className="w-[60px]  "
                      src={slide.icon}
                      alt={slide.name}
                    />
                    <div>
                        <h1 className="text-[21px] font-Lexend font-semibold text-secondary">{slide.name}</h1>
                        <p className="text-base font-Roboto text-[#8A8A8A]">{slide.location}</p>
                    </div>
                    </div>
                    <div className="flex items-center gap-[12px] mt-[24px]" >
                        <img src={slide.review} alt="" />
                        <p className="text-sm">{slide.date}</p>
                    </div>
                    <div className=" text-start mt-[18px]">
                      <p className="text-base text-[#8F8F8F] font-Roboto mb-4">{slide.des1}</p>
                      <p className="text-base text-[#8F8F8F] font-Roboto mb-4">{slide.des2}</p>
                      <img className="mb-[20px] mt-[40px]" src={slide.img} alt={slide.heading} />
                      <a href="" className="underline text-secondary text-[17px] font-Lexend font-medium">{slide.link}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {/* Hide the Left Arrow on the first slide */}
        <button
          onClick={handlePrev}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-[15px] rounded-full hover:bg-white/90 ${currentIndex === 0 ? 'hidden' : ''}`}
          aria-label="Previous Slide"
        >
          <HiArrowNarrowLeft className="text-secondary" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-[15px] rounded-full hover:bg-white/90"
          aria-label="Next Slide"
        >
          <HiArrowNarrowRight className="text-secondary" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
          {groupedSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-[10px] h-[10px] rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewCarousel;
