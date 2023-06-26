import React, { useState } from "react";
import searchImage from "../../assets/images/search.png";
import {  useNavigate } from "react-router-dom";
export const SearchBar = (props) => {
  const [searchField, setSearchField] = useState();

  const navigate = useNavigate();
  function categoryField() {
    navigate("/category", { state : { jiijy : { searchField } } });
  }

  const handleSearchChange = (event) => {
    setSearchField(event.target.value);
    console.log(searchField);
  };
  return (
    <div className="flex  justify-around w-1/2 h-10 border-4 border-white-400 leadinng-10  rounded-3xl bg-white">
      <input
        className=" outline-none w-5/6 h-full text-gray-500 "
        type="search"
        placeholder="Search Book Name..."
        onChange={handleSearchChange}
      ></input>
      <button
        className=" w-1/8"
        onClick={() => {
          categoryField()
        }}
      >
        <img className=" h-3/4 w-3/4" src={searchImage} alt="search" />
      </button>
    </div>
  );
};
