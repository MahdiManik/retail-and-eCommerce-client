import { Outlet } from "react-router-dom";
import Navbar from "../../Sheared/Navbar/Navbar";

const Root = () => {
  return (
    <div className="font-myFont bg-white">
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
