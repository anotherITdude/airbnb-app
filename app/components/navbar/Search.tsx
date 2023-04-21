"use client";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="navbar__search_main">
        <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">
          Anywhere
        </div>
        <div className="navbar__search_menu">
          Any Week
        </div>
        <div className="navbar__search_input">
          <div className="hidden sm:block">Add Guests</div>
          <div className="navbar__search_input_icon">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
