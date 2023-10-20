import { NavLink } from "react-router-dom";
import logo from "../../../assets/Elegant Orange Smile Shop Logo.png";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };
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
            className="menu menu-sm dropdown-content text-white mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to={"/"}>Home</NavLink>
            {user && <NavLink to={"/add-products"}>Add Product</NavLink>}
            {user && <NavLink to={"/add-cart"}>My Cart</NavLink>}
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
          {user && (
            <NavLink
              className="hover:underline hover:text-black"
              to={"/add-products"}
            >
              Add Product
            </NavLink>
          )}
          {user && (
            <NavLink
              className="hover:underline hover:text-black"
              to={"/add-cart"}
            >
              My Cart
            </NavLink>
          )}
          <NavLink className="hover:underline hover:text-black" to={"/login"}>
            Login
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end p-1 text-white">
        {user && <p className="text-black"> {user?.displayName}</p>}
        {user && (
          <img
            className="w-12 h-12 mx-2 rounded-full "
            src={user?.photoURL}
            alt=""
          />
        )}
        {!user ? (
          <NavLink to={"/login"} className="btn btn-error">
            Login
          </NavLink>
        ) : (
          <button onClick={handleLogOut} className="btn btn-info">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
