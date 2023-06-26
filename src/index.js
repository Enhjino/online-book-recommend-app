import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CategoryPage } from "./pages/CategoryPage";
import BookDetail from "./pages/BookDetail";
import { LogInPage } from "./pages/LogInPage";
import { SignUp } from "./pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/category",
    element: <CategoryPage />,
  },
  {
    path: "/detail",
    element: <BookDetail/>
  },
  {
    path: "/login",
    element: <LogInPage/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
