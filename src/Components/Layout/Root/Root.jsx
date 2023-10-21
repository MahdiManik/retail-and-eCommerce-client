import { Outlet } from "react-router-dom";
import Navbar from "../../Sheared/Navbar/Navbar";
import Footer from "../../Sheared/Footer/Footer";

const Root = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
