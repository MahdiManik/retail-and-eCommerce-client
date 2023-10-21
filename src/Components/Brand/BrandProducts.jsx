import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

const BrandProducts = ({ brandName }) => {
  const {
    _id,
    name = "Default Name",
    type = "Default Type",
    rating = 0,
    photo,
    brand,
    price,
  } = brandName || {};

  return (
    <>
      <div className=" md:h-72  lg:card-side shadow-xl border-2 flex flex-col">
        <figure>
          <img className="w-full h-full p-2" src={photo} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <div className="flex flex-col justify-center items-start gap-2">
            <p>{brand}</p>
            <p>{type}</p>
            <p>Price ${price}</p>
            <div className="font-bold text-xl">
              <Rater total={5} rating={parseInt(rating)} />
            </div>
          </div>
          <div className="card-actions justify-end mt-auto">
            <Link to={`/detail/${_id}`} className="py-2 px-5 border-2">
              Detail
            </Link>
            <Link to={`/update/${_id}`} className="py-2 px-5 border-2">
              Update
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

BrandProducts.propTypes = {
  brandName: PropTypes.object,
};

export default BrandProducts;
