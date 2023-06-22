import React from "react";
export const Book = (props) => {
return (
    <div className="flex flex-col  bg-gray-100  rounded-md p-2 cursor-pointer ease-out duration-300  w-full justify-start items-center my-4 ">
      <div className="flex flex-col  justify-center items-center ">
      <div className="flex flex-row justify-center ">
          <li className="list-none text-2xl  font-semibold " >{props.book.rank}</li>
          <img className="w-1/2 m-2"
        src={props.book.book_image}
        alt="book image"
      />
      </div>
      <p className="text-gray-400 text-xs">{props.book.weeks_on_list ===1  ? "NEW THIS WEEK"  : props.book.weeks_on_list +"WEEKS ON LIST" } </p>
      <h3 className="text-black text-base font-bold">{props.book.title}</h3>
      <p>by {props.book.author}</p>
      </div>
    </div>

    // <div className="bg-red-500"> {props.book.id}</div>
  );
};
