import React from "react";
export const Book = (props) => {
  console.log( 'ene hed maana haana bn '+props.book.volumeInfo.imageLinks.smallThumbnail)
  return (
    // <div className="flex flex-col border-solid border-2 border-gray-400 rounded-md p-6 cursor-pointer ease-out duration-300 bg-black ">
    //   <img src={props.book.volumeInfo.imageLinks.smallThumbnail} alt="book image"/>
    //   <h2>{props.book.volumeInfo.title}</h2>
    // <p>{props.book.volumeInfo.authors}</p>
    // </div>
    <div className="bg-red-500">Book</div>
  );
};
