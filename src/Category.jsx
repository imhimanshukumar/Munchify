import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import Shimmer from "./Shimmer";
import useCategory from "./useCategory";

const Category = () => {
  const [slide, setSlide] = useState(6);

  const Categories = useCategory();
  const nextSlide = () => {
    if (Categories.length - 8 == slide) return false;
    setSlide(slide + 3);
  };
  const prevSlide = () => {
    if (slide == 0) return false;
    setSlide(slide - 3);
  };
  if (Categories.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex items-center justify-between">
        <div className="text-[25px] font-bold"> What's on your mind? </div>
        <div className="flex">
          <div
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 "
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        {Categories.map((cat) => {
          return (
            <div
              style={{
                transform: `translateX(-${slide * 100}%)`,
              }}
              key={cat.id}
              className=" w-[150px] shrink-0 duration-500"
            >
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  cat.imageId
                }
                alt=""
              />
            </div>
          );
        })}
      </div>
      <hr className=" my-6 border - [2px]" />
    </div>
  );
};

export default Category;
