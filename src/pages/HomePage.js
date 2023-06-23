import React from "react";
import { Header } from "../component/Layout/Header";
import bgImage from "../assets/images/bg.png";
import { BookList } from "../component/Layout/BookList";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const currentDate = new Date().toISOString().substr(0, 10);
  function handleClick() {
    navigate("/category");
  }
  return (
    <div className="flex flex-col items-center">
      <div
        className="flex flex-col  bg-cover w-full text-white justify-between items-center  pb-20 bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}>
        <Header />
        <p className=" text-4xl font-semibold pt-40 w-1/2 ">
          Welcome to the BestSellerScape New York Times Best Sellers Books
          Website! <br> </br> <br> </br>
          <button
            className="border-solid border-2 rounded-lg text-2xl"
            onClick={handleClick}>
            Choose Your Category & nbsp;
          </button>
        </p>
        <br> </br>
      </div>
      <div className=" w-9/12  flex flex-row text-2xl font-semibold justify-between items-center">
        <BookList date={currentDate} />
      </div>
    </div>
  );
};
export default HomePage;
