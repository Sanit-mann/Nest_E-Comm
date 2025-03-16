import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("Search Triggered: ", searchTerm);
    }
  };

  return (
    <div className="flex border-Primary text-Text_Primary border-2 w-[700px] h-11 rounded-md overflow-hidden">
      <select className="px-2 py-2 ">
        <option>All Categories</option>
        <option>Women's</option>
        <option>Men's</option>
        <option>Cellphones</option>
        <option>Computer</option>
        <option>Electronics</option>
        <option>Accessories</option>
        <option>Home & Garden</option>
        <option>Luggage</option>
        <option>Shoes</option>
        <option>Mother & Kids</option>
      </select>
      <input
        value={searchTerm}
        onKeyDown={handleInput}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Search"
        className="w-full px-4 py-2 focus:outline-none"
      />
      <button className="px-4 text-Text_Secondary">
        <i className="fi-rs-search"></i>
      </button>
    </div>
  );
};

export default Search;
