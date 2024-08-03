import React from "react";
import { useSelector } from "react-redux"; 
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

  const sidebarStyle = "p-2 px-4 rounded hover:bg-gray-300 w-[full]";
  return (
    <div
      className={`flex flex-col w-[12%] bg-white shadow-lg pt-4 ${
        openSidebar ? "" : "hidden"
      }`}
    >
      <ul className=" flex flex-col gap-3 border-b-[1px] pb-6 ">
        {firstContainer.map((e, index) => {
          return (
              <a key={index} href="/" className={`${sidebarStyle} text-gray-700`} >
                <li >{e.text}</li>
              </a>
          );
        })}
      </ul>
      <ul className="flex flex-col gap-2">
        {secondContainer.map((e, index) => {
          return (
            <a key={index} href="/" className={`${sidebarStyle} text-gray-700`}>
              <li >{e.text}</li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
