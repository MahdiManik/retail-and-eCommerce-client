import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import AddProducts from "./Components/Pages/AddProducts/AddProducts";
import AddCart from "./Components/Pages/AddCart/AddCart";
import Login from "./Components/Pages/Login/Login";
import Root from "./Components/Layout/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-products",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/add-cart",
        element: <AddCart></AddCart>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
