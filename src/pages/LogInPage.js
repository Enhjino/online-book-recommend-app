import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (response.ok) {
        // Login successful
        alert("Амжилттай нэвтэрлээ")
        const data = await response.json();
        localStorage.setItem('token',(data.token))
      } else {
        alert("Амжилтгүй боллоо, Ахин оролдно уу", 
        )
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    handleSignIn()
  };

  const handleSignUp = () => {
    navigate("/signup");
  };
 const handleSignIn= () => {
  navigate("/" );
};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className=" flex bg-pink-200 w-screen h-screen text-white justify-center items-center">
          <div className="flex flex-col bg-white w-1/2 h-1/2 rounded-3xl justify-center items-center text-black ">
            <p className="text-3xl text-black font-semibold ">Log In</p>
            <input
              type="email"
              id="email"
              size="30"
              placeholder="Email "
              required
              autoComplete="email"
              onChange={handleChangeEmail}
              className="text-xl solid border-2 border-l-gray-500 rounded-xl m-2 placeholder: px-5"
            ></input>
            <input
              type="password"
              id="password"
              size="30"
              placeholder="Password "
              required
              onChange={handleChangePassword}
              className="text-xl solid border-2 border-l-gray-500 m-2  rounded-xl placeholder: px-5"
            ></input>
            <div>
              <button
                className="bg-pink-100 text-pink-500 rounded-xl p-2 mx-4 "
                type="submit"
              >
                Sign In
              </button>
              <button
                className="bg-green-100 text-green-500 rounded-xl p-2 mx-4  "
                onClick={handleSignUp}
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
