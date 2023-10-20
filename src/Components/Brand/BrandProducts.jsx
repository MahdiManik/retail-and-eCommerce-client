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
  } = brandName || {};

  return (
    <div className="card md:h-full lg:card-side bg-white shadow-xl flex flex-col">
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
        <div className="card-actions justify-end mt-auto">
          <Link to={`/detail/${_id}`} className="btn">
            Detail
          </Link>
          <Link to={`/update/${_id}`} className="btn">
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

BrandProducts.propTypes = {
  brandName: PropTypes.object,
};

export default BrandProducts;
