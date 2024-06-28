import React, { useState, useEffect } from 'react';

const Grocery = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const proxyUrl = 'https://api.allorigins.win/get?url=';
        const targetUrl = 'https://www.swiggy.com/api/instamart/category-listing?categoryName=Fresh%20Vegetables&storeId=1388387&offset=0&filterName=&taxonomyType=All%20Listing';
        const response = await fetch(`${proxyUrl}${encodeURIComponent(targetUrl)}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const responseData = await response.json();
        console.log('Fetched data:', responseData);
        
        // AllOrigins wraps the response in a 'contents' field
        const parsedData = JSON.parse(responseData.contents);
        
        setData(parsedData.data); // Update to set parsedData.data
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || !data.categories || data.categories.length === 0) {
    return <div>No categories available</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
      {data.categories.map((category) => (
        <div key={category.id} className="max-w-xs rounded overflow-hidden shadow-lg bg-white border border-gray-200 p-4">
          {category.imageId && (
            <img
              className="w-full h-32 object-cover mb-4"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${category.imageId}`}
              alt={category.displayName}
            />
          )}
          <div className="text-center">
            <div className="font-bold text-xl mb-2">{category.displayName}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Grocery;




















// import React, { useState, useEffect } from 'react';

// const Grocery = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://www.swiggy.com/api/instamart/category-listing?categoryName=Fresh%20Vegetables&storeId=1388387&offset=0&filterName=&taxonomyType=All%20Listing");
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const responseData = await response.json();
//         console.log('Fetched data:', responseData);
//         setData(responseData.data); // Update to set responseData.data
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!data || !data.categories || data.categories.length === 0) {
//     return <div>No categories available</div>;
//   }

//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
//       {data.categories.map((category) => (
//         <div key={category.id} className="max-w-xs rounded overflow-hidden shadow-lg bg-white border border-gray-200 p-4">
//           {category.imageId && (
//             <img
//               className="w-full h-32 object-cover mb-4"
//               src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${category.imageId}`}
//               alt={category.displayName}
//             />
//           )}
//           <div className="text-center">
//             <div className="font-bold text-xl mb-2">{category.displayName}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Grocery;
