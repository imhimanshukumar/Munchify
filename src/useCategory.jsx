import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useCategory = () => {
  const location = useSelector((state) => state.address.location);
  const initialStateLocation = { lat: 19.2234284, lng: 73.14427169999999 }; 
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (location && location.lat && location.lng) {
      fetchCategory(location.lat, location.lng);
    } else {
      fetchCategory(initialStateLocation.lat, initialStateLocation.lng);
    }
  }, [location]);

  const fetchCategory = async (lat, lng) => {
    try {
      const proxyUrl = 'https://api.allorigins.win/get?url=';
      const targetUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
      const response = await fetch(`${proxyUrl}${encodeURIComponent(targetUrl)}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // AllOrigins wraps the response in a 'contents' field
      const parsedData = JSON.parse(result.contents);

      setCategories(parsedData?.data?.cards[0]?.card?.card?.imageGridCards?.info || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategories([]);
    }
  };

  return categories;
};

export default useCategory;



















