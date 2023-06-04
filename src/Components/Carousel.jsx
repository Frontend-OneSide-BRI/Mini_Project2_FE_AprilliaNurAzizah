import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
  const slides = [
    {
      url: "https://raw.githubusercontent.com/aprillianurazizah/slider/main/1.png",
    },
    {
      url: "https://raw.githubusercontent.com/aprillianurazizah/slider/main/2.png",
    },
    {
      url: "https://raw.githubusercontent.com/aprillianurazizah/slider/main/3.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className=" max-w-[100%] h-[400px] w-full m-auto relative">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="overflow w-full h-full bg-center bg-cover duration-500"
      ></div>
      <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className=" absolute flex justify-center py-2 top-[90%] left-0 right-0">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer"
          >
            <RxDotFilled
              className={`transition-all text-white ${
                currentIndex === slideIndex ? "p-4" : " text-opacity-50"
              }`}
              size={28}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
