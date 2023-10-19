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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:7000/brandName/"),
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
      {
        path: "/brand/:id",
        element: (
          <PrivateRout>
            <Brand></Brand>
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:7000/brandName/${params.id}`),
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
