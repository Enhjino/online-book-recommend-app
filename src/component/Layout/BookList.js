import React, { useEffect, useState } from "react";
import { Book } from "./Book";
import axios from "axios";
import list from "../../assets/json/list-name.json";
import names from "../../assets/json/list-name.json";
export const BookList = (props) => {
  console.log(list);
  console.log(props.books);


  
  if (props.books) {
    return (
      <div>
       
        <div className="my-0 mx-auto grid grid-cols-5 gap-10  ">
          {props.books.slice(0, props.times).map((book) => (
            <Book key={book.rank} book={book} />
          ))}
        </div>
      </div>
    );
  } else {
    return <div>0 bn+ {console.log(props.books)}</div>;
  }
};
