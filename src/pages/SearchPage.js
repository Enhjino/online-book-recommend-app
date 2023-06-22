import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../component/Layout/Header";
import searchImage from "../assets/images/search.png";
import { BookList } from "../component/Layout/BookList";
import { Routes, Route, useNavigate } from "react-router-dom";
export const SearchPage = (props) => {
  const location = useLocation();
  console.log(location.state);
  const navigate = useNavigate();
  const [searchField, setSearchField] = useState(location.state.value);
  const [searchValue, setSearchValue] = useState(location.state.value);
  const handleSearchChange = (event) => {
    setSearchField(event.target.value);
    console.log(searchField);
  };

  //   const filteredBooks = books.filter((el) =>
  //     el.name.toLowerCase().includes(searchField.toLowerCase())
  //   );
  function handleClick() {
    navigate("/search");
  }
  console.log("asd+", searchValue);
  return (
    <div className="flex flex-col items-center"> 
      <Header />
      <div className="flex  w-1/2 h-10 border-4 border-white-400 leadinng-10  rounded-3xl bg-white">
        <input
          className=" outline-none w-5/6 h-full text-gray-500 "
          type="search"
          placeholder="Search book name here..."
          onChange={handleSearchChange}
          value={searchField}
          //     filter={filteredBooks}
        ></input>
        <button
          className=" w-1/8"
          onClick={() => {
            setSearchValue(searchField);
          }}
        >
          <img className=" h-3/4 w-3/4" src={searchImage} alt="search" />
        </button>
      </div>
      <div className=" w-9/12 ">  <BookList  text={searchValue} /></div>
    
    </div>
  );
};
