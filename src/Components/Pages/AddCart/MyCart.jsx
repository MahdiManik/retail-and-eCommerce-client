import PropTypes from "prop-types";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MyCart = ({ cart, carts, setCarts }) => {
  const { _id, name, brand, type, rating, price, photo } = cart || {};

  useEffect(() => {
    AOS.init({ duration: "1500", delay: "400" });
    AOS.refresh();
  }, []);
  //  console.log("Email", email);
  //  console.log("cart", cart);
  //  console.log("carts", carts);
  //  console.log("setCarts", setCarts);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result?.isConfirmed) {
        fetch(
          `https://retail-and-e-commerce-server-e7c8007ra.vercel.app/cart/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data?.deletedCount > 0) {
              Swal.fire("Deleted!", "Your cart has been deleted.", "success");
              const remaining = carts.filter((data) => data?._id !== _id);
              setCarts(remaining);
            }
          });
      }
    });
  };

  return (
    <div className=" shadow-2xl w-80 mt-6" data-aos="flip-left">
      <figure>
        <img className="h-60 w-full p-3" src={photo} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <div className="flex flex-col justify-center items-start gap-2">
          <p>{brand}</p>
          <div className="text-lg font-semibold">
            <p>Price: ${price}</p>
          </div>
          <p>{type}</p>
        </div>
        <Rater total={5} rating={parseInt(rating)} />
        <div className="card-actions justify-end mt-auto">
          <button
            onClick={() => handleDelete(_id)}
            className="border-2 py-2 px-5"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

MyCart.propTypes = {
  cart: PropTypes.object,
  carts: PropTypes.array,
  setCarts: PropTypes.func,
};

export default MyCart;
