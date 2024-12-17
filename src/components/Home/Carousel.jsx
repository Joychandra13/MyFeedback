import { useState } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

function Carousel() {
  const slides = [
    { id: 1, 
        image: "/Carousel (1).png", 
        heading: "Bottega", 
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", 
        review:"/review5.0.png",
    },

    { id: 2, 
        image: "/Carousel (2).png", 
        heading: "Bottega", 
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." ,
        review:"/review5.0.png",

    },
    { id: 3, 
        image: "/Carousel (3).png", 
        heading: "Bottega", 
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." ,
        review:"/review5.0.png",

    },
    { id: 4, 
        image: "/Carousel (4).png", 
        heading: "Bottega", 
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." ,
        review:"/review5.0.png",

    },
    { id: 5, 
        image: "/Carousel (1).png", 
        heading: "Bottega", 
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." ,
        review:"/review5.0.png",

    },
    { id: 6, 
        image: "/Carousel (2).png", 
        heading: "Bottega", 
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." ,
        review:"/review5.0.png",

    },
    { id: 7, 
        image: "/Carousel (3).png", 
        heading: "Bottega", 
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." ,
        review:"/review5.0.png",

    },
    { id: 8, 
        image: "/Carousel (4).png", 
        heading: "Bottega", 
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." ,
        review:"/review5.0.png",

    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine cards per slide based on screen size
  const cardsPerSlide = window.innerWidth >= 1024 ? 4 : 2; // 4 cards per slide for large screens, 2 cards for small screens
  const totalSlides = Math.ceil(slides.length / cardsPerSlide);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  // Group slides into chunks of 4 cards for large screens and 2 cards for small screens
  const groupedSlides = [];
  for (let i = 0; i < slides.length; i += cardsPerSlide) {
    groupedSlides.push(slides.slice(i, i + cardsPerSlide));
  }

  return (
    <section className="overflow-hidden px-[54px] mt-[71px] pt-[20px]  bg-primary  pb-[55px] rounded-[8px] container mx-auto">
        <h1 className="text-white text-[32px] pb-[30px] ">Find the best restaurant ratings below</h1>
      <div className="relative w-full mx-auto overflow-hidden">
        {/* Carousel for large screens */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
            width: `${totalSlides * 100}%`,
          }}
        >
          {groupedSlides.map((group, groupIndex) => (
            <div key={groupIndex} className="flex w-full">
              {group.map((slide) => (
                <div key={slide.id} className="w-full md:w-[25%] sm:w-[50%] flex-shrink-0 p-4">
                  <div className="bg-white rounded-lg shadow-lg  text-center">
                    <img
                      className="w-full h-[213px] object-cover rounded-lg"
                      src={slide.image}
                      alt={slide.heading}
                    />
                    <div className="p-4 text-start">
                    <h3 className="text-[22px] font-semibold text-secondary font-Lexend mb-2">{slide.heading}</h3>
                    <p className="text-base text-[#8F8F8F] font-Roboto mb-4">{slide.des}</p>
                    <img
                      className="mb-4"
                      src={slide.review}
                      alt={slide.heading}
                    />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="hidden lg:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-[15px]  rounded-full hover:bg-white/90"
          aria-label="Previous Slide"
        >
          <HiArrowNarrowLeft className="text-secondary " />
        </button>
        <button
          onClick={handleNext}
          className="hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-[15px]  rounded-full hover:bg-white/90"
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
              className={`w-[10px] h-[10px] rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
