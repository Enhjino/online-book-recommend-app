import React, { useEffect, useState } from "react";
import { Book } from "./Book";
import axios from "axios";
export const BookList = (props) => {
  const [books, setBooks] = useState([]);

  const getApiData = async () => {
        fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent((props.text))}`
        ).then((response) => response.json()).then(res => setBooks(res.items))

      //   setBooks(response);
      //   console.log(books[0]);
      };

      useEffect(() => {
        getApiData();
      }, []);

if(books) console.log("ene bol ehnii "+books[0])

  if (books) {

    return <div>
      {books.map(book  => {
            //    <Book key={book.id} book={book}/>         
            <Book/>   
      })}
   
    </div>;
  } else {
    return <div>0  bn+ {console.log(books)}</div>;
  }
}