import React from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../../assets/images/book-logo.png";

export const Header = (props) => {
  return (
    <div className=" flex flex-row justify-between px-32  h-14 w-full items-center box-border ">
      <div className="h-4/5 p-2 flex flex-row">
        <img className="h-full mr-3" src={logoImage} alt="logo"  />
        <h1 className="text-2xl font-semibold">BestSellerScape</h1>
      </div>
      <div className="h-full w-auto items-center p-2">
        {/* <a href="/login" className="no-underline text-2xl font-semibold">
          Log In
        </a> */}
        
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? null : isActive ? "no-underline text-2xl font-semibold p-2 " :  "no-underline text-2xl font-semibold p-2 "
          }
        >
        Home
        </NavLink>
      </div>
    </div>
  );
};
