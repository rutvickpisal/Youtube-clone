import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return pattern
  if (!isMenuOpen) return null;
  return (
    <div className="w-40 shadow-xl px-5 mr-7">
      <h1 className="font-bold">Watch later</h1>
      <ul>
        <li>VIDEO 1</li>
        <li>VIDEO 2</li>
        <li>VIDEO 3</li>
      </ul>
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>VIDEO 1</li>
        <li>VIDEO 2</li>
        <li>VIDEO 3</li>
      </ul>
      <h1 className="font-bold">Trending</h1>
      <ul>
        <li>VIDEO 1</li>
        <li>VIDEO 2</li>
        <li>VIDEO 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;
