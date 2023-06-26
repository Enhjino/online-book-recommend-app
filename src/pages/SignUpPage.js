import React from 'react'
import { useNavigate } from 'react-router-dom'
export const SignUp = () =>{


      
      const navigate = useNavigate();
      function logIn() {
        navigate("/login");
      }
      return(
            <div className=" flex bg-pink-200 w-screen h-screen text-white justify-center items-center">
      <div className="flex flex-col bg-white w-1/2 h-1/2 rounded-3xl justify-center items-center text-black" >
        <p className="text-3xl text-black font-semibold ">Create your account</p>
        <input
          type="email"
          id="email"
          pattern=".+@globex\.com"
          size="30"
          placeholder="Email "
          required
          className="text-xl solid border-2 border-l-gray-500 rounded-xl m-2 placeholder: px-5"
        ></input>
         <input
          type="text"
          id="text"
          size="30"
          placeholder="User Name "
          required
          className="text-xl solid border-2 border-l-gray-500 rounded-xl m-2 placeholder: px-5"
        ></input>
        <input
          type="password"
          id="password"
          size="30"
          placeholder="Password "
          required
          className="text-xl solid border-2 border-l-gray-500 m-2  rounded-xl placeholder: px-5"
        ></input>
        <input
          type="password"
          id="password"
          size="30"
          placeholder="Comfirm Password "
          required
          className="text-xl solid border-2 border-l-gray-500 m-2  rounded-xl placeholder: px-5"
        ></input>
        <div >
          <button className="bg-pink-100 text-pink-500 rounded-xl p-2 mx-4 " onClick={logIn}>
            Log In
          </button>
          <button className="bg-green-100 text-green-500 rounded-xl p-2 mx-4  ">
            Create New Account
          </button>
        </div>
      </div>
    </div>
      )
}