import { NavLink } from "react-router-dom";
import logo from "../../../assets/Elegant Orange Smile Shop Logo.png";
const Navbar = () => {
  return (
    <div className="navbar h-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/add-products"}>Add Product</NavLink>
            <NavLink to={"/add-cart"}>Add Cart</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img className="w-10 rounded-full " src={logo} alt="" />
          <i className="text-2xl text-black font-bold">Alif Shop</i>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal md:flex md:gap-16 text-base  text-[#474747] px-1 ">
          <NavLink className="hover:underline hover:text-black" to={"/"}>
            Home
          </NavLink>
          <NavLink
            className="hover:underline hover:text-black"
            to={"/add-products"}
          >
            Add Product
          </NavLink>
          <NavLink
            className="hover:underline hover:text-black"
            to={"/add-cart"}
          >
            Add Cart
          </NavLink>
          <NavLink className="hover:underline hover:text-black" to={"/login"}>
            Login
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
