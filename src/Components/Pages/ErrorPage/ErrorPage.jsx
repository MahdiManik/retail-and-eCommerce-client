import { Link } from "react-router-dom";
import error from "../../../assets/404.gif";
const ErrorPage = () => {
  return (
    <div className="">
      <div>
        <div></div>
        <img src={error} alt="" />
        <div
          className="flex flex-col justify-center items-center h-[500px]
		   bg-white p-4 rounded-lg shadow-lg"
        >
          <h4 className="text-4xl font-bold text-[#e10491] pb-3">Oops!!!</h4>
          <h3 className="text-4xl font-bold text-black mb-6">
            This page got lost in conversation.
          </h3>
          <button>
            <Link
              className="flex items-center gap-2 hover:text-white
			 hover:bg-[#041e42] border-2 py-4 px-10 
			 rounded-xl
			  border-[#041e42]
			 text-black"
              to={"/"}
            >
              Go Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
