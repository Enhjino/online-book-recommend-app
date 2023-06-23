import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../component/Layout/Header";
const BookDetail = (props) => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  console.log(location.state);
  return (
    <div>
      <Header />
      <h3 className="text-2xl ">Book Details</h3>
      <div className="flex flex-row w-5/6 justify-start items-start">
        <li className=" list-none text-5xl  font-semibold ">
          {location.state.book.rank} <br></br>
          {location.state.book.rank_last_week == 0 ? (
            ""
          ) : location.state.book.rank_last_week - location.state.book.rank >
            0 ? (
            <span>&uarr;</span>
          ) : (
            <span>&darr;</span>
          )}
        </li>
        <img
          className=" m-2"
          width={location.state.book.book_image_width}
          height={location.state.book.book_image_height}
          src={location.state.book.book_image}
          alt="book image"
        />
        <div>
          <div className="text-3xl">
            WEEKS ON LIST : {location.state.book.weeks_on_list}
          </div>
          {location.state.book.rank_last_week == 0 ? (
            ""
          ) : (
            <div className="text-3xl">
              RANK LAST WEEK : {location.state.book.rank_last_week}
            </div>
          )}
          <div className="text-3xl"> TITLE : {location.state.book.title}</div>
          <div className="text-2xl">AUTHOR : {location.state.book.author}</div>
          <div className="text-xl">
            BOOK DESCRIPTION :{location.state.book.description}
          </div>
          <div className="text-xl">
            PUBLISHER : {location.state.book.publisher}
          </div>
          <div class="relative inline-block">
            <button
              class="bg-pink-100 p-3 text-xl border-none text-pink-600"
              onClick={() => setVisible(!visible)}
            >
              Buy Book
            </button>
            <div
              class={`${
                visible ? "" : "hidden"
              } absolute bg-pink-300 min-w-160 shadow-lg z-10 hover:dropdown-content-visible`}
            >
              <a
                className="text-black px-4 py-3 no-underline block"
                href={location.state.book.buy_links[0].url}
              >
                {location.state.book.buy_links[0].name}
              </a>
              <a
                className="text-black px-4 py-3 no-underline block"
                href={location.state.book.buy_links[1].url}
              >
                {location.state.book.buy_links[1].name}
              </a>
              <a
                className="text-black px-4 py-3 no-underline block"
                href={location.state.book.buy_links[2].url}
              >
                {location.state.book.buy_links[2].name}
              </a>
              <a
                className="text-black px-4 py-3 no-underline block"
                href={location.state.book.buy_links[3].url}
              >
                {location.state.book.buy_links[3].name}
              </a>
              <a
                className="text-black px-4 py-3 no-underline block"
                href={location.state.book.buy_links[4].url}
              >
                {location.state.book.buy_links[4].name}
              </a>
              <a
                className="text-black px-4 py-3 no-underline block"
                href={location.state.book.buy_links[5].url}
              >
                {location.state.book.buy_links[5].name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookDetail;
