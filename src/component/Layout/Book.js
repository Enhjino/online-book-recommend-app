import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate,useLocation } from "react-router-dom";
export const Book = (props) => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState("");
  const id = 5;
  function goToDetail(){
    setDetail(props.book.title)
    {console.log(props.book.title)}
    navigate('/detail', {state : {book : props.book}})
  }
  return (
    <div
      className="flex flex-col  bg-green-100   rounded-xl p-2 cursor-pointer ease-out duration-300  w-full justify-start items-center "
      onClick={goToDetail}
    >
      <div className="flex flex-col  justify-center items-center ">
        <div className="flex flex-row justify-center ">
          <li className="list-none text-2xl  font-semibold mt-4 text-gray-500">
            {props.book.rank}
          </li>
          <img
            className="w-3/5 m-4 "
            src={props.book.book_image}
            alt="book image"
            onClick={goToDetail}
          />
        </div>
        <p className="text-gray-400 text-xs px-2">
          {props.book.weeks_on_list === 1
            ? "NEW THIS WEEK"
            : props.book.weeks_on_list + " WEEKS ON LIST"}{" "}
        </p>
        <h2 className="text-black text-base font-bold px-2">
          {props.book.title}
        </h2>
        <p className="px-2 text-base">by {props.book.author}</p>
      </div>
    </div>
  );
};
