import React, { useState } from "react";
import { Header } from "../component/Layout/Header";
import bgImage from "../assets/images/bg.png";
import searchImage from "../assets/images/search.png";
import { CategoryPage } from "./CategoryPage";
import { BookList } from "../component/Layout/BookList";
import { Routes, Route, useNavigate } from "react-router-dom";
const HomePage = (props) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/category");
  }
  return (
    <div className="flex flex-col ">
      <div
        className="flex flex-col  bg-cover w-full text-white justify-between items-center  pb-20 bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Header />
        <p className=" text-4xl font-semibold pt-40 w-1/2 ">
          Welcome to the BestSellerScape New York Times Best Sellers Books
          Website!<br></br><br></br>
          <button className="border-solid border-2 rounded-lg text-2xl" onClick={handleClick}>
          Choose Your Category  &nbsp;
        </button>
        </p>
        <br></br>
      </div>
      <div>Discover the Weekly Best Sellers in Over 58 Categories: </div>
    </div>
  );
};
export default HomePage;
