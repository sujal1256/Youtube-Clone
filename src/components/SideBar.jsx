import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const SideBar = () => {
  const openSidebar = useSelector((state) => state.toggleSidebar.open);

  const firstContainer = [
    {
      text: "Home",
    },
    {
      text: "Shorts",
    },
    {
      text: "Subsrciptions",
    },
  ];
  const secondContainer = [
    {
      text: "You >",
    },
    {
      text: "Your Channel",
    },
    {
      text: "History",
    },
    {
      text: "Playlists",
    },
    {
      text: "Your videos",
    },
    {
      text: "Watch Later",
    },
    {
      text: "Liked videos",
    },
    {
      text: "Your clips",
    },
  ];

  const sidebarStyle = "p-2 px-4 rounded hover:bg-gray-300 w-full";
  return (
    <div
      className={`flex flex-col w-[12%] bg-white shadow-lg pt-4 ${
        openSidebar ? "" : "hidden"
      }`}
    >
      <ul className=" flex flex-col gap-3 border-b-[1px] pb-6 ">
        {firstContainer.map((e, index) => {
          return (
              <li key={index} className={`${sidebarStyle} text-gray-700`} >
                <a href="/">{e.text}</a>
              </li>
          );
        })}
      </ul>
      <ul className="flex flex-col gap-2">
        {secondContainer.map((e, index) => {
          return (
            <li key={index} className={`${sidebarStyle} text-gray-700`}>
              <a href="/">{e.text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
