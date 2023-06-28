import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logIn=()=> {
    navigate("/login");
  }
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
axios.post('https://reqres.in/api/register', {
      email : email,
    password : password
    })
    .then(function (response) {
      if(response.status==200) {
            alert("Амжилттай бүртгэгдлээ")
            logIn()
      }else{
            alert("Бүртгэл амжилтгүй")
      }
      // console.log(response.status);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className=" flex bg-pink-200 w-screen h-screen text-white justify-center items-center">
          <div className="flex flex-col bg-white w-1/2 h-1/2 rounded-3xl justify-center items-center text-black">
            <p className="text-3xl text-black font-semibold ">
              Create your account
            </p>
            <input
              type="email"
              id="email"
              //     pattern=".+@globex\.com"
              size="30"
              placeholder="Email "
              required
              className="text-xl solid border-2 border-l-gray-500 rounded-xl m-2 placeholder: px-5"
              onChange={handleChangeEmail}
            ></input>
            <input
              type="password"
              id="password"
              size="30"
              placeholder="Password "
              required
              className="text-xl solid border-2 border-l-gray-500 m-2  rounded-xl placeholder: px-5"
              //     onChange={handleChangePassword}
            ></input>
            <input
              type="password"
              id="password"
              size="30"
              placeholder="Comfirm Password "
              required
              className="text-xl solid border-2 border-l-gray-500 m-2  rounded-xl placeholder: px-5"
              onChange={handleChangePassword}
            ></input>
            <div>
              <button
                className="bg-pink-100 text-pink-500 rounded-xl p-2 mx-4 "
                onClick={logIn}
              >
                Log In
              </button>
              <button
                className="bg-green-100 text-green-500 rounded-xl p-2 mx-4  "
                type="submit"
              >
                Create New Account
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
