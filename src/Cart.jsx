import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemList from "./ItemList";
import { clearCart } from "./cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice =
      item.card?.info?.price / 100 || item.card?.info?.defaultPrice / 100;
    return total + itemPrice;
  }, 0);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-3xl font-bold">Cart</h1>
      <div className="w-full md:w-6/12 mx-auto">
        <ItemList items={cartItems} />

        <div className="mt-4 mb-2">
          <p className="text-lg font-bold">
            Total Price: ₹{totalPrice.toFixed(2)}
          </p>
        </div>

        <button
          className="p-2 md:p-4 m-2 md:m-4 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear
        </button>

        {cartItems.length > 0 && (
          <Link to="/Delivery">
            <button className="p-2 md:p-4 m-2 md:m-4 bg-blue-500 text-white rounded-lg">
              Add Address
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
