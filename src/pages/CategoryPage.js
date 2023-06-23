import React, { useState } from "react";
import { Header } from "../component/Layout/Header";
import DatePicker from "react-datepicker";
import list from "../assets/json/list-name.json";
import "react-datepicker/dist/react-datepicker.css";
// import searchImage from "../assets/images/search.png";
import { BookList } from "../component/Layout/BookList";

export const CategoryPage = (props) => {

//   const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const category = "hardcover-nonfiction";
//   if (loading) return <div> loading </div>;
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className=" w-9/12 ">
        <div className="flex flex-row text-2xl font-semibold justify-between items-center">
          {list[0].list_name}
          <DatePicker
            className="tems-center justify-self-end"
            selected={date}
            onChange={(date) => setDate(date)}
          />
        </div>
        <BookList category={category} date={date.toISOString().substr(0, 10)} />
      </div>
    </div>
  );
};
