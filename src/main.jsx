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
import PrivateRout from "./Components/Rout/PrivateRout/PrivateRout";
import AuthProvider from "./Components/Sheared/AuthProvider/AuthProvider";
import Brand from "./Components/Brand/Brand";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage";
import Register from "./Components/Pages/Register/Register";
import Detail from "./Components/Brand/Detail";
import Update from "./Components/Brand/Update";
import Comment from "./Components/Pages/Home/Comment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://retail-and-e-commerce-server.vercel.app/brandName"),
      },
      {
        path: "/add-products",
        element: (
          <PrivateRout>
            <AddProducts></AddProducts>,
          </PrivateRout>
        ),
      },
      {
        path: "/comment",
        element: (
          <PrivateRout>
            <Comment></Comment>,
          </PrivateRout>
        ),
      },
      {
        path: "/add-cart",
        element: <AddCart></AddCart>,
        loader: () =>
          fetch(`https://retail-and-e-commerce-server.vercel.app/cart`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brand/:id",
        element: <Brand></Brand>,
        loader: ({ params }) =>
          fetch(
            `https://retail-and-e-commerce-server.vercel.app/brandName/${params.id}`
          ),
      },
      {
        path: "/detail/:id",
        element: (
          <PrivateRout>
            <Detail></Detail>
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://retail-and-e-commerce-server.vercel.app/brand/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRout>
            <Update></Update>
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://retail-and-e-commerce-server.vercel.app/brand/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
