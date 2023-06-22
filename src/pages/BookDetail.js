import React, { useEffect, useState, useParams } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
const BookDetail = (props) => {
//   const params = useParams(); 
//   const title = params.title;
// const location = useLocation();
// console.log(location.state);
// const [madetail, setMadetail] = useState(location.state.value);
// console.log(location.state.value);
// const location = useLocation();
// const { value, location: bookLocation } = location.state;
// console.log(location.state);
// const [searchField, setSearchField] = useState(location.state.value);
// setSearchField(location.state.value)
// console.log(searchField)
// const location = useLocation();
//   const { title } = location.state || {};
const location = useLocation();
console.log(location.state);
// console.log(title)
  return(
      <div>
      <div>{location.state.id}</div>
    </div>
  )
};
export default BookDetail;
