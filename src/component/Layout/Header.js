import React from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../../assets/images/book-logo.png";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  return (
    <div className=" flex flex-row justify-between px-32  h-14 w-full items-center box-border my-5 ">
      <div className="h-4/5 p-2 flex flex-row">
        <img className="h-full mr-3" src={logoImage} alt="logo"  />
        <h1 className="text-2xl font-semibold">BestSellerScape</h1>
      </div>
      <SearchBar />
      <div className="h-full w-auto items-center p-2">
      
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? null : isActive ? "no-underline text-2xl font-semibold p-2 " :  "no-underline text-2xl font-semibold p-2 "
          }
        >
        Home
        </NavLink>
        <NavLink
          to="/logIn"
          className={({ isActive, isPending }) =>
            isPending ? null : isActive ? "no-underline text-2xl font-semibold p-2 " :  "no-underline text-2xl font-semibold p-2 "
          }
        >
        Log in
        </NavLink>
      </div>
    </div>
  );
};
