import React, { useEffect, useState } from "react";
import { Book } from "./Book";
import list from "../../assets/json/list-name.json";
import "react-datepicker/dist/react-datepicker.css";
export const BookList = (props) => {
  console.log(list);
  console.log(props.books);
  const [books, setBooks] = useState([]);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const booksSubset = books.slice(0, props.times);
  const getApiData = async () => {
    if (loading) return;
    setLoading(true);
    let apiUrl;
    if (props.category ) {
      apiUrl = `https://api.nytimes.com/svc/books/v3/lists/${props.date}/${props.category}.json?api-key=Tl5NJoC6hKHIGcdrq1AChaB7M44GDIVz`;
    } else {
      apiUrl = `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=Tl5NJoC6hKHIGcdrq1AChaB7M44GDIVz`;
    }
    fetch(apiUrl)
      .then((response) => response.json())
      .then((res) => {
        if (props.category) {
          setBooks(res.results.books);
        } else {
          setLists(res.results.lists);
        }
      })
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
  if (props.category) {
    return (
      <div>
        <div className="my-0 mx-auto grid grid-cols-5 gap-10  ">
          {booksSubset.map((book) => (
            <Book key={book.rank} book={book} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {lists.map((list) => (
          <div key={list.list_name}>
            <h2 className="text-2xl mb-4" >{list.list_name}</h2>
            <div className="mb-10 mx-auto grid grid-cols-5 gap-10  ">
              {list.books.map((book, index) => (
                <Book key={index} book={book} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
};
