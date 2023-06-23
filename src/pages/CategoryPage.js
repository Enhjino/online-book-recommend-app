import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../component/Layout/Header";
import DatePicker from "react-datepicker";
import list from "../assets/json/list-name.json";
import 'react-datepicker/dist/react-datepicker.css';
import searchImage from "../assets/images/search.png";
import { BookList } from "../component/Layout/BookList";
import { Routes, Route, useNavigate } from "react-router-dom";
export const CategoryPage = (props) => {
  const navigate = useNavigate();
  // const [books, setBooks] = useState([]);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const formattedDate = date.toISOString().substr(0, 10);
  // const date = "2023-06-22";

  const category = "hardcover-nonfiction";

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

  if (loading) return <div>loading</div>;
  // if (books) console.log("ene bol ehnii " + books[0]);

  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className=" w-9/12 ">

        <div className="flex flex-row text-2xl font-semibold justify-between items-center">
       
          {list[0].list_name}
            <DatePicker  className="tems-center justify-self-end" selected={date} onChange={(date) => setDate(date)} />
            {/* <div>{date}</div> */}
        </div>
        {/* <BookList books={books} category={category} times={15} date={date}  /> */}
        <BookList  category={category} times={15} date={date.toISOString().substr(0, 10)}  />
      </div>
    </div>
  );
};
