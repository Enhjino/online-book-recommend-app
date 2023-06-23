import React, { useState, useEffect } from "react";
import { Header } from "../component/Layout/Header";
import bgImage from "../assets/images/bg.png";
import searchImage from "../assets/images/search.png";
import { CategoryPage } from "./CategoryPage";
import list from "../assets/json/list-name.json";
import { BookList } from "../component/Layout/BookList";
import { Routes, Route, useNavigate } from "react-router-dom";
const HomePage = (props) => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const currentDate = new Date().toISOString().substr(0, 10);
  const category = "hardcover-nonfiction";
  // const [category, setCategory] = useState([]);

  // const getApiData = async () => {
  //   if (loading) return;
  //   setLoading(true);

  //   fetch(
  //     `https://api.nytimes.com/svc/books/v3/lists/${date}/${category}.json?api-key=Tl5NJoC6hKHIGcdrq1AChaB7M44GDIVz `
  //   )
  //     .then((response) => response.json())
  //     .then((res) => setBooks(res.results.books))
  //     .catch((err) => {
  //       console.log("book download error", err);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };
  // useEffect(() => {
  //   getApiData();
  // }, [props]);
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
          Website!<br></br>
          <br></br>
          <button
            className="border-solid border-2 rounded-lg text-2xl"
            onClick={handleClick}
          >
            Choose Your Category &nbsp;
          </button>
        </p>
        <br></br>
      </div>
      <div className=" w-9/12 ">
        <BookList books={books}  times={5} date={currentDate} />
      </div>
    </div>
  );
};
export default HomePage;
