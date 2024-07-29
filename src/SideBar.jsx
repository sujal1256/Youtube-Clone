import React from "react";

const SideBar = () => {
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
    <div className=" flex flex-col w-[12%] shadow-lg mt-5">
      <ul className=" flex flex-col gap-3 border-b-[1px] pb-6">
        {firstContainer.map((e) => {
          return (
            <>
              <a href="/" >
                <li className={`${sidebarStyle} text-gray-700`}>{e.text}</li>
              </a>
            </>
          );
        })}
      </ul>
      <ul className="flex flex-col gap-2">
        {secondContainer.map((e) => {
          return (
            <a href='/'>
              <li className={`${sidebarStyle} text-gray-700`}>{e.text}</li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
