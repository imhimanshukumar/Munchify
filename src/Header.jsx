import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoIosHelpBuoy } from "react-icons/io";
import { MdPersonOutline } from "react-icons/md";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";
import Address from "./Address";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useSelector } from "react-redux";

const Header = () => {
  const [toggleAddress, settoggleAddress] = useState(false);
  const [toggleSignIn, settoggleSignIn] = useState(false);
  const [toggleSignUp, settoggleSignUp] = useState(false);
  const address = useSelector((state) => state.address.address);

  const showAddressMenu = () => {
    settoggleAddress(true);
  };

  const hideAddressMenu = () => {
    settoggleAddress(false);
  };

  const showSignInMenu = () => {
    settoggleSignIn(true);
  };

  const hideSignInMenu = () => {
    settoggleSignIn(false);
  };

  const showSignUpMenu = () => {
    settoggleSignUp(true);
  };

  const hideSignUpMenu = () => {
    settoggleSignUp(false);
  };

  const cartItems = useSelector((store) => store.cart.items);

  // Function to get the main three words of the address
  const getMainThreeWords = (fullAddress) => {
    if (!fullAddress) return "";
    const words = fullAddress.split(" ");
    if (words.length <= 3) return fullAddress;
    return `${words[0]} ${words[1]} ${words[2]}`;
  };

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500 z-40"
        onClick={hideAddressMenu}
        style={{
          opacity: toggleAddress ? 1 : 0,
          visibility: toggleAddress ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] bg-white h-full absolute duration-[400ms] z-50"
          style={{
            left: toggleAddress ? "0%" : "-100%",
          }}
        >
          <Address />
        </div>
      </div>

      <div
        className="black-overlay w-full h-full fixed duration-500 z-40"
        onClick={hideSignInMenu}
        style={{
          opacity: toggleSignIn ? 1 : 0,
          visibility: toggleSignIn ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] bg-white h-full absolute duration-[400ms] z-50"
          style={{
            right: toggleSignIn ? "0%" : "-100%",
          }}
        >
          <SignIn
            showSignUpMenu={() => {
              hideSignInMenu();
              showSignUpMenu();
            }}
          />
        </div>
      </div>

      <div
        className="black-overlay w-full h-full fixed duration-500 z-40"
        onClick={hideSignUpMenu}
        style={{
          opacity: toggleSignUp ? 1 : 0,
          visibility: toggleSignUp ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] bg-white h-full absolute duration-[400ms] z-50"
          style={{
            right: toggleSignUp ? "0%" : "-100%",
          }}
        >
          <SignUp />
        </div>
      </div>

      <header className="p-3 shadow-xl text-[#686b78] relative  sticky top-0 bg-white z-[999]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <Link to={"/"}>
              <img
                src="images/Logo.png"
                className="w-full bg-white"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="ml-4">
            <span
              className="font-bold border-b-[3px] border-black cursor-pointer"
              onClick={showAddressMenu}
            >
              Other
            </span>{" "}
            <span className="cursor-pointer" onClick={showAddressMenu}>
              {getMainThreeWords(address)}
            </span>
            <RxCaretDown
              onClick={showAddressMenu}
              fontSize={25}
              className="font-bold inline text-[#fc8019] cursor-pointer"
            />
          </div>
          <nav className=" flex list-none gap-8 ml-auto font-bold text-[18px]">
            <li className="flex hover:text-[#fc8019] items-center gap-3">
              <Link to={"/Grocery"}>
                <BsShop />
              </Link>
              <Link to={"/Grocery"}>Grocery</Link>
            </li>
            <li className="flex hover:text-[#fc8019] items-center gap-3">
              <RiDiscountPercentLine />
              <Link to={"/"}>Offers</Link>
            </li>
            <li className="flex hover:text-[#fc8019] items-center gap-3">
              <Link to={"/Help"}>
                <IoIosHelpBuoy />
              </Link>
              <Link to={"/Help"}>Help</Link>
            </li>
            <li className="flex hover:text-[#fc8019] items-center gap-3">
              <MdPersonOutline
                onClick={showSignInMenu}
                className="cursor-pointer"
              />
              <div onClick={showSignInMenu}>Sign In</div>
            </li>
            <li className="flex hover:text-[#fc8019] items-center gap-2">
              <Link to={"/Cart"}>
                <PiShoppingCartSimpleDuotone />
              </Link>
              <Link to={"/Cart"}>Cart</Link>
              <span className="text-[#fc8019]">{cartItems.length}</span>
            </li>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
