import PropTypes from "prop-types";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import Swal from "sweetalert2";

const MyCart = ({ cart, carts, setCarts }) => {
  const { _id, name, brand, type, rating, price, photo } = cart || {};

  console.log("cart", cart);
  console.log("carts", carts);

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
      if (result.isConfirmed) {
        fetch(`https://retail-and-e-commerce-server.vercel.app/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your cart has been deleted.", "success");
              const remaining = carts.filter((data) => data._id !== _id);
              setCarts(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <figure>
        <img className="w-52 p-6" src={photo} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <div className="flex justify-center items-center gap-2">
          <p>{brand}</p>
          <div className="font-bold text-xl">
            <Rater total={5} rating={parseInt(rating)} />
          </div>
          <p>{type}</p>
        </div>
        <div className="card-actions justify-end mt-auto">{price}</div>
      </div>
      <button onClick={() => handleDelete(_id)} className="btn">
        Delete
      </button>
    </div>
  );
};

MyCart.propTypes = {
  cart: PropTypes.object,
  carts: PropTypes.array,
  setCarts: PropTypes.func,
};

export default MyCart;