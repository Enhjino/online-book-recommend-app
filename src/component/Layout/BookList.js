import React, { useEffect, useState } from "react";
import { Book } from "./Book";
import axios from "axios";
import list from "../../assets/json/list-name.json"
import names from '../../assets/json/list-name.json'
export const BookList = (props) => {
  const [books, setBooks] = useState([]);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const date = "2023-06-22";

  const getApiData = async () => {
    if (loading) return;
    setLoading(true);
    fetch(
      `https://api.nytimes.com/svc/books/v3/lists/${date}/hardcover-nonfiction.json?api-key=Tl5NJoC6hKHIGcdrq1AChaB7M44GDIVz `
    )
      .then((response) => response.json())
      .then((res) => setBooks(res.results.books))
      .catch((err) => {
        console.log("book download error", err); 
      })
      .finally(() => {
        setLoading(false);
      });
  
  };
  useEffect(() => {
    getApiData();
  }, [props]);

  if (loading) return <div>loading</div>;
  if (books) console.log("ene bol ehnii " + books[0]);

  if (books) {
    return (
      <div className="my-0 mx-auto grid grid-cols-5 gap-10  ">
        {books.map((book) => (
          // {console.log(book.id)}
          <Book key={book.rank} book={book} />
        ))}
      </div>
    );
  } else {
    return <div>0 bn+ {console.log(books)}</div>;
  }
};
