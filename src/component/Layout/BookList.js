import React, { useEffect, useState } from "react";
import { Book } from "./Book";
import axios from "axios";
import list from "../../assets/json/list-name.json";
import DatePicker from "react-datepicker";
// import list from "../assets/json/list-name.json";
import "react-datepicker/dist/react-datepicker.css";
import names from "../../assets/json/list-name.json";
export const BookList = (props) => {
  console.log(list);
  console.log(props.books);
  const [books, setBooks] = useState([]);
  const [lists, setLists] = useState([]);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const booksSubset = books.slice(0, props.times);
  // const date = "2023-06-22";

  // const category = "hardcover-nonfiction";

  // const getApiData = async () => {
  //   if (loading) return;
  //   setLoading(true);
  //   fetch(
  //     `https://api.nytimes.com/svc/books/v3/lists/${props.date}/${props.category}.json?api-key=Tl5NJoC6hKHIGcdrq1AChaB7M44GDIVz `
  //   )
  //     .then((response) => response.json())
  //     .then((res) => setBooks(res.results.books))
  //     .catch((err) => {
  //       console.log("book download error", err);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };
  // useEffect(() => {
  //   getApiData();
  // }, [props]);
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
      .then(response => response.json())
      .then(res => {
        if (props.category) {
          setBooks(res.results.books);
        } else {
          // const allBooks = res.results.map(category => category.books).flat();
          // setBooks(allBooks);
          setLists(res.results.lists);
        }
      })
      .catch(err => {
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
        {/* <div> DATE : {props.date} </div> */}
        <div className="my-0 mx-auto grid grid-cols-5 gap-10  ">
          {/* {props.books.slice(0, props.times).map((book) => (
            <Book key={book.rank} book={book} />
          ))} */}
          {/* {books.slice(0, props.times).map((book) => (
            <Book key={book.rank} book={book}  />
          ))} */}

          {/* {books.map(book =>(
             <Book key={book.rank} book={book}  />
          ))} */}
   
          {booksSubset.map((book) => (
            <Book key={book.rank} book={book} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {/* <div> DATE : {props.date} </div> */}
        <div >
          {/* {props.books.slice(0, props.times).map((book) => (
            <Book key={book.rank} book={book} />
          ))} */}
          {/* {books.slice(0, props.times).map((book) => (
            <Book key={book.rank} book={book}  />
          ))} */}

          {/* {books.map(book =>(
             <Book key={book.rank} book={book}  />
          ))} */}
   {
    lists.map((list) => (
      <div key={list.list_name}>
        <h2>{list.list_name}</h2>
        <div className="my-0 mx-auto grid grid-cols-5 gap-10  ">
        {list.books.map((book,index)=> (
          <Book key={index}  book={book} />
        ))}
      </div> </div>
    ))
   }
        </div>
      </div>
    );
  }
};
