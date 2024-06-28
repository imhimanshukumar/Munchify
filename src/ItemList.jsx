import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from './cartSlice';

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <div className="p-4">
      {items.map((item, index) => (
        <div
          key={item.card.info.id}
          className="m-4 p-4 border-gray-200 border-b-2 text-left flex justify-between bg-white rounded-lg shadow-md"
        >
          <div className="w-9/12 pr-4">
            <div className="py-2">
              <span className="text-lg font-semibold">{item.card.info.name}</span>
              <span className="text-sm text-gray-600">
                {' '}
                - ₹{' '}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm text-gray-700">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 relative flex flex-col items-center">
            <img
              src={
                'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
                item.card.info.imageId
              }
              className="w-full h-32 object-cover rounded-lg"
              alt={item.card.info.name}
            />
            <div className="absolute bottom-2 flex space-x-2">
              <button
                className="p-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 focus:outline-none"
                onClick={() => handleAddItem(item)}
              >
                +
              </button>
              <button
                className="p-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 focus:outline-none"
                onClick={() => handleRemoveItem(index)}
              >
                -
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
