import React from 'react';
import ItemList from './ItemList';
import { IoIosArrowDown } from "react-icons/io";

const RestaurantCategory = ({ data, showItems, setshowIndex }) => {
  const handleClick = () => {
    setshowIndex();
  };

  return (
    <div className="w-8/12 mx-auto my-4">
      <div className="bg-white shadow-md rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-semibold text-lg text-gray-800">
            {data.title} ({data.itemCards.length})
          </span>
          <span className={`transform transition-transform duration-300 ${showItems ? 'rotate-180' : ''}`}>
            <IoIosArrowDown />
          </span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
