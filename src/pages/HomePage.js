import React, { useState } from "react";
import { Header } from "../component/Layout/Header";
import bgImage from "../assets/images/bg.png";
import searchImage from "../assets/images/search.png";
import BookDetail from "./BookDetail";
import { SearchPage } from "./SearchPage";
import { Book } from "../component/Layout/Book";
import { BookList } from "../component/Layout/BookList";
import { Routes, Route, useNavigate } from "react-router-dom";
const HomePage = (props) => {
  const navigate = useNavigate();
  // const [books, setBooks] = useState([]);
  const [searchField, setSearchField] = useState("");
  const handleSearchChange = (event) => {
    setSearchField(event.target.value);
    console.log(searchField);
  };

  // const filteredBooks = books.filter((el) =>
  //   el.name.toLowerCase().includes(searchField.toLowerCase())
  // );
  function handleClick() {
    navigate("/search");
  }
  return (
    <div className="flex flex-col ">
      <div
        className="flex flex-col  bg-cover w-full text-white justify-between items-center  pb-20"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <Header />
        <p className=" text-4xl font-semibold pt-40 w-1/2 ">
        Welcome to the New York Times Best Seller Books Website!
        </p>
        <br></br>
        <div className="flex  justify-around w-1/2 h-10 border-4 border-white-400 leadinng-10  rounded-3xl bg-white">
          <input
            className=" outline-none w-5/6 h-full text-gray-500 "
            type="search"
            placeholder="Search book name here..."
            onChange={handleSearchChange}
            // filter={filteredBooks}
          ></input>
          <button
            className=" w-1/8"
            onClick={() =>
              navigate("/search", { state: { value: searchField } })
            }
          >
            <img className=" h-3/4 w-3/4" src={searchImage} alt="search" />
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default HomePage;
