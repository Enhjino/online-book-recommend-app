import React, { useEffect, useState } from "react";
import { Book } from "./Book";
import axios from "axios";
import list from "../../assets/json/list-name.json"
import names from '../../assets/json/list-name.json'
export const BookList = (props) => {

  console.log(list)
  if (props.books) {
    return (
      <div>
      <div className="text-2xl font-semibold">Category : {list[0].list_name}</div>
      <div className="my-0 mx-auto grid grid-cols-5 gap-10  ">
        {props.books.map((book) => (
          <Book key={book.rank} book={book} />
        ))}
      </div>
      </div>
    );
  } else {
    return <div>0 bn+ {console.logpro(props.books)}</div>;
  }
};
