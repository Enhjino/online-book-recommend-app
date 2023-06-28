import React, { useEffect, useState, Suspense } from "react";
import { Book } from "./Book";
import list from "../../assets/json/list-name.json";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
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
    if (props.category) {
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
  if (loading) {
    return (
      <div class="flex justify-center items-center"><svg className="animate-spin " fill="pink"  height={40} width={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg></div>
    );
  }
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
            <Link to={`/category?type=${list.list_name}`}>
            <h2 className="text-2xl mb-4">{list.list_name}</h2>
            </Link>
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
