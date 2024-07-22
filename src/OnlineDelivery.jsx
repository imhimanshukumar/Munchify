import React, { useState, useEffect } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const OnlineDelivery = () => {
  const [data, setData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [title, setTitle] = useState({});
  const [searchText, setSearchText] = useState("");
  const location = useSelector((state) => state.address.location);
  const initialStateLocation = { lat: 19.2234284, lng: 73.14427169999999 };

  useEffect(() => {
    if (location && location.lat && location.lng) {
      fetchRestaurants(location.lat, location.lng);
    } else {
      fetchRestaurants(initialStateLocation.lat, initialStateLocation.lng);
    }
  }, [location]);

  const fetchRestaurants = async (lat, lng) => {
    try {
      const proxyUrl = 'https://api.allorigins.win/get?url=';
      const targetUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
      const response = await fetch(`${proxyUrl}${encodeURIComponent(targetUrl)}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      // AllOrigins wraps the response in a 'contents' field
      const apiData = JSON.parse(result.contents);
      const restaurants =
        apiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      const restinfo = apiData?.data?.cards[2]?.card?.card;
      setData(restaurants || []);
      setTitle(restinfo || {});
      setFilteredRestaurants(restaurants || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  };

  const handleTopRatedClick = () => {
    const filteredList = data.filter((res) => res.info.avgRating > 4);
    setFilteredRestaurants(filteredList);
  };

  const handleSearch = () => {
    const filteredRestaurants = data.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  };

  if (data.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="text-[25px] font-bold">
        {title?.title || "Restaurants with online food delivery"}
      </div>
      <div className="grid grid-cols-5 gap-2 my-4">
        <div className="col-span-1 flex items-center justify-center">
          <div className="w-full p-2 rounded-full shadow-lg bg-white-500 text-black text-center font-semibold">
            <button onClick={handleTopRatedClick}>Top Rated</button>
          </div>
        </div>
        <div className="col-span-4 flex items-center space-x-2">
          <input
            className="search-box border border-solid border-black rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search restaurants..."
          />
          <button
            className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300 ease-in-out"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 my-5">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <RestrauntCard resdata={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OnlineDelivery;














