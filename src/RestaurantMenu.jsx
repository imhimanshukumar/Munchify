import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuInfo = useRestaurantMenu(resId);
  const [showIndex, setshowIndex] = useState(null);

  if (menuInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage,city,avgRating, } =
    menuInfo?.cards[2]?.card?.card?.info || {};
  const itemCards =
    menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards || [];
  const categories =
    menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const toggleShowIndex = (index) => {
    setshowIndex(showIndex === index ? null : index);
  };

  return (
    <div className="menu text-center py-8 bg-gray-100 min-h-screen">
      <h1 className="font-bold my-5 text-3xl text-gray-900">{name}</h1>
      <div className="text-xl text-gray-700 mb-4">
          <p className="my-2">{cuisines?.join(", ")}</p>
          <p className="my-2">{costForTwoMessage}</p>
          <p className="my-2">{city}</p>
        </div>
      <div className="space-y-4">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setshowIndex={() => toggleShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
