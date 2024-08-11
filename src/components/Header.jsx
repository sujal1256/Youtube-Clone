import React from "react";
import Logo from "./Logo";
import { BELL, MENU_BAR, MICROPHONE, USER, VIDEO } from "./icons";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/SidebarSlice";

const Header = () => {
  const state = useSelector((state) => state.toggleSidebar.open);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className={`bg-white flex justify-between py-2 items-center px-6`}>
      <div className="w-[12%] flex justify-start gap-6 items-center">
        <button
          className={`text-gray-600 hover:bg-gray-300 rounded-full p-2 ${
            state ? "bg-gray-200" : ""
          }`}
          onClick={handleClick}
        >
          {MENU_BAR}
        </button>
        <a href="/" className=" h-fit">
          <Logo />
        </a>
      </div>
      <div className=" w-[40%] flex h-9 relative">
        <SearchBar />
        <button className="w-auto mx-2 h-[90%] bg-gray-200 rounded-full p-1 text-black">
          {MICROPHONE}
        </button>
      </div>

      <div className="flex w-[8%] justify-between items-center">
        <button className="text-gray-600 hover:bg-gray-300 rounded-full p-2">
          {VIDEO}
        </button>
        <button className="text-gray-600 hover:bg-gray-300 rounded-full p-2">
          {BELL}
        </button>
        <button className="text-black bg-gray-400 p-2 rounded-full">
          {USER}
        </button>
      </div>
    </div>
  );
};

export default Header;
