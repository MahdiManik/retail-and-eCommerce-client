import { useContext } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Sheared/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Detail = () => {
  const { user } = useContext(AuthContext);
  const productDetails = useLoaderData();
  console.log(productDetails);
  const { name, type, rating, photo, brand, details } = productDetails || {};

  const handleAddToCart = () => {
    fetch(`https://retail-and-e-commerce-server.vercel.app/cart`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...productDetails, email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Add product to cart successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="my-12 bg-white md:grid md:grid-cols-2 justify-center items-center gap-6 p-6">
      <div className="p-2 ">
        <img className="" src={photo} alt="" />
      </div>
      <div className="flex flex-col  justify-center w-9/12 p-2 items-start mt-12">
        <h1 className="mb-5 text-4xl font-bold">{name}</h1>
        <p className="mb-5 ">{details}</p>
        <p className="mb-5 ">{type}</p>
        <p className="mb-5 ">{brand}</p>
        <div className="font-bold text-xl">
          <Rater total={5} rating={parseInt(rating)} />
        </div>

        <button onClick={handleAddToCart} className="py-2 px-5 border-2 mt-5">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Detail;
