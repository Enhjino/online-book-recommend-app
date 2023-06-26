import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../component/Layout/Header";
const BookDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  function back() {
    navigate("/");
  }
  const [visible, setVisible] = useState(false);
  console.log(location.state);
  return (
    <div className="flex flex-col items-center  bg-pink-100  h-screen">
      <Header />
      <div className="flex flex-col w-3/4 text-2xl font-semibold justify-between items-center bg-white rounded-3xl p-10">
        <div className="flex flex-row w-5/6 justify-start items-start">
          <li className=" list-none text-5xl  font-semibold  text-gray-500">
            {location.state.book.rank} <br />
            {location.state.book.rank_last_week === 0 ? (
              ""
            ) : location.state.book.rank_last_week - location.state.book.rank >
              0 ? (
              <span>&uarr;</span>
            ) : (
              <span>&darr;</span>
            )}
          </li>
          <div className="flex flex-col mx-10">
            <img
              className="h-3/5"
              src={location.state.book.book_image}
              alt=" image"
            />
          </div>
          <div className="">
            <div className="text-2xl"> {location.state.book.title}</div>
            <div className="text-lg text-gray-400 ">
              by {location.state.book.author}
            </div>
            <p className="text-lg py-4"> {location.state.book.description}</p>

            <div className="flex flex-row justify-between">
              {" "}
              <p className="text-lg">
                Weeks On List: {location.state.book.weeks_on_list}
              </p>
              {location.state.book.rank_last_week === 0 ? (
                ""
              ) : (
                <p className="text-lg">
                  Rank Last Week: {location.state.book.rank_last_week}
                </p>
              )}{" "}
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-lg">
                Publisher : {location.state.book.publisher}
              </p>
              <p className="text-lg">
                ISBN : {location.state.book.primary_isbn10}
              </p>
            </div>

            <div class=" relative inline-block w-full pt-4">
              <div className="flex flex-row ">
                <div className="w-full mr-2">
                  <button
                    class="bg-pink-100 p-3 text-xl border-none text-pink-600 w-full  rounded-full "
                    onClick={() => setVisible(!visible)}
                  >
                    Buy Book
                  </button>
                </div>
                <div className="w-full ml-2">
                  <button
                    class="bg-gray-100 p-3 text-xl border-none text-gray-500 w-full  rounded-full "
                    onClick={back}
                  >
                    Back
                  </button>
                </div>
              </div>

              <div
                class={`${
                  visible ? "" : "hidden"
                } absolute bg-pink-300 min-w-160 shadow-lg z-10 hover:dropdown-content-visible`}
              >
                <a
                  className="text-lg text-black px-4 py-3 no-underline block"
                  href={location.state.book.buy_links[0].url}
                >
                  {location.state.book.buy_links[0].name}
                </a>
                <a
                  className="text-lg text-black px-4 py-3 no-underline block"
                  href={location.state.book.buy_links[1].url}
                >
                  {location.state.book.buy_links[1].name}
                </a>
                <a
                  className="text-lg text-black px-4 py-3 no-underline block"
                  href={location.state.book.buy_links[2].url}
                >
                  {location.state.book.buy_links[2].name}
                </a>
                <a
                  className="text-lg text-black px-4 py-3 no-underline block"
                  href={location.state.book.buy_links[3].url}
                >
                  {location.state.book.buy_links[3].name}
                </a>
                <a
                  className="text-lg text-black px-4 py-3 no-underline block"
                  href={location.state.book.buy_links[4].url}
                >
                  {location.state.book.buy_links[4].name}
                </a>
                <a
                  className="text-lg text-black px-4 py-3 no-underline block"
                  href={location.state.book.buy_links[5].url}
                >
                  {location.state.book.buy_links[5].name}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookDetail;
