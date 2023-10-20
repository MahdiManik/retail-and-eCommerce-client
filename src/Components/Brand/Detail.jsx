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
    <div className="my-12">
      <div className="h-3/6 flex flex-col justify-center items-center">
        <img src={photo} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center mt-12">
        <h1 className="mb-5 text-5xl font-bold">{name}</h1>
        <p className="mb-5 px-6 w-4/6">{details}</p>
        <p className="mb-5 px-6 w-4/6">{type}</p>
        <p className="mb-5 px-6 w-4/6">{brand}</p>
        <div className="font-bold text-xl">
          <Rater total={5} rating={parseInt(rating)} />
        </div>

        <button onClick={handleAddToCart} className="btn mb-20">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Detail;
