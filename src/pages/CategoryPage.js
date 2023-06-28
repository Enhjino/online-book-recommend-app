import React, { useState } from "react";
import { Header } from "../component/Layout/Header";
// import DatePicker from "react-datepicker";
import { DatePicker } from "antd";
import "react-datepicker/dist/react-datepicker.css";
import { BookList } from "../component/Layout/BookList";
import { useLocation } from "react-router-dom";
export const CategoryPage = (props) => {
  const [date, setDate] = useState(new Date());
  const category = "hardcover-nonfiction";
  const location = useLocation();
   const type = new URLSearchParams(location.search).get('type')
  console.log(type);
  
  if (type) {
    return (
      <div className="flex flex-col items-center ">
        <Header className="bg-pink-200" />
        <div className=" w-9/12 ">
          <div className="flex flex-row text-2xl font-semibold justify-between items-center">
            <div>{type}</div>
            <div className="flex justify-center p-2 w-4">
              <DatePicker
                calendarClassName="w-full"
                className="tems-center justify-self-end"
                selected={date}
                onChange={(date) => setDate(date)}
              />
            </div>
          </div>

          <BookList
            category={type}
            times={15}
            date={date.toISOString().substr(0, 10)}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center ">
        <Header className="bg-pink-200" />
        <div className=" w-9/12 ">
          <div className="flex flex-row text-2xl font-semibold justify-between items-center">
            {/* <div>{type}</div> */}
            <div className="flex justify-center p-2 w-4">
              <DatePicker
                calendarClassName="w-full"
                className="tems-center justify-self-end"
                selected={date}
                onChange={(date) => setDate(date)}
              />
            </div>
          </div>

          <BookList
            times={15}
            date={date.toISOString().substr(0, 10)}
          />
        </div>
      </div>
    );
  }
};
