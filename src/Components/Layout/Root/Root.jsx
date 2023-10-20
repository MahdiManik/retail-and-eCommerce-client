import { Outlet } from "react-router-dom";
import Navbar from "../../Sheared/Navbar/Navbar";

const Root = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
