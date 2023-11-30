import React, { useEffect, useState } from "react";
import logo from "../assets/yt.png";
import user_icon from "../assets/user_icon.png";
import search from "../assets/search.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { VIDEO_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestions(searchCache[searchText]);
      } else {
        getSuggestions(searchText);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSuggestions = async (searchquery) => {
    const result = await fetch(
      VIDEO_SEARCH_API.replace("SEARCHHERE", searchquery)
    );
    const data = await result.json();
    setSuggestions(data.items);
    
    dispatch(cacheResults({
      [searchText]: data.items
    }))
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex align-middle col-span-1">
        <img
          className="h-9 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
          onClick={() => handleToggleMenu()}
        />
        <a href="/">
          <img className="h-9 mx-2" alt="youtube-logo" src={logo} />
        </a>
      </div>
      <div className="col-span-10">
        <div className="flex">
          <input
            type="text"
            className="w-1/2 border border-gray-400 rounded-l-full px-4"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          ></input>
          <button className="border border-gray-400 rounded-r-full p-2">
            <img alt="search_icon" src={search} className="h-8"></img>
          </button>
        </div>
        {suggestions && (
          <div className="fixed bg-white px-4 w-[35rem] shadow-2xl rounded-xl border border-gray-200">
            <ul>
              {suggestions.map((sugg) => {
                return (
                  <li
                    key={sugg.id.videoId}
                    className="cursor-auto py-0.5 border-b-2 border-gray-200 hover:bg-slate-100"
                  >
                    {sugg.snippet.title}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-9" alt="user" src={user_icon}></img>
      </div>
    </div>
  );
};

export default Head;
