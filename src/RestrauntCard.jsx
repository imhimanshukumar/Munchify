import React from "react";
import { IoStarHalfSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";



const RestrauntCard = (props) => {
  const { resdata } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    aggregatedDiscountInfoV3,
    areaName,
  } = resdata?.info || {};

  return (
    <div className="group">
    <div className="group-hover:scale-90 duration-300 w-[273px] shrink-0 grow">
      <div className=" h-[182px] rounded-[15px] overflow-hidden relative">
        <img
          className="  object-cover w-full h-full"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
        />
        <div className="image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[20px] font-bold text-white tracking-tighter">
          {aggregatedDiscountInfoV3?.header}{" "}
          {aggregatedDiscountInfoV3?.subHeader}
        </div>
      </div>
      <div className="p-2">
        <div className="text-[20px] font-bold">{name}</div>
        <div className="text-[15px] font-bold">
          <ul>
            <li className="flex items-center gap-1 ">
              <IoStarHalfSharp className="text-[#1d923d]" />
              {avgRating}
              <GoDotFill className="inline" />
              <span className="ml-1">{resdata?.info?.sla?.slaString}</span>
            </li>
          </ul>
        </div>

        <div className="text-[15px] text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
          {cuisines.join(", ")}
        </div>
        <div className="text-[14px] text-gray-600">{areaName}</div>
      </div>
    </div>
    </div>
  );
};

export default RestrauntCard;
