import React from 'react'
import { useLocation } from "react-router-dom";
import { Header } from '../component/Layout/Header';
import { BookList } from '../component/Layout/BookList';
export const SearchPage = (props) => {
      const location = useLocation();
      console.log(location.state);
     
      return <div>
            <Header/>
            <BookList text= {location.state.value}/>
      </div>;
      }