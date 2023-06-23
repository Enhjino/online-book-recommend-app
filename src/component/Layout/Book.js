import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Book = (props) => {
  const navigate = useNavigate();
  function goToDetail(){
    setDetail(props.book.title)
    {console.log(props.book.title)}
    navigate('/detail', {state : {book : props.book}})
  }
  return (
    <div
      className="flex flex-col  bg-gray-100  rounded-md p-2 cursor-pointer ease-out duration-300  w-full justify-start items-center my-4 "
      onClick={goToDetail}
    >
      <div className="flex flex-col  justify-center items-center ">
        <div className="flex flex-row justify-center ">
          <li className="list-none text-2xl  font-semibold ">
            {props.book.rank}
          </li>
          <img
            className="w-1/2 m-2"
            src={props.book.book_image}
            alt="book image"
            onClick={goToDetail}
          />
        </div>
        <p className="text-gray-400 text-xs px-2">
          {props.book.weeks_on_list === 1
            ? "NEW THIS WEEK"
            : props.book.weeks_on_list + " WEEKS ON LIST"}
        </p>
        <h3 className="text-black text-base font-bold px-2">
          {props.book.title}
        </h3>
        <p className="px-2">by {props.book.author}</p>
      </div>
    </div>
  );
};
