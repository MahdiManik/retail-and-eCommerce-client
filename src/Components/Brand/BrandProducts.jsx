import PropTypes from "prop-types";

const BrandProducts = ({ brandName }) => {
  console.log(brandName);

  const {
    name = "Default Name",
    type = "Default Type",
    rating = 0,
    photo,
    brand,
    details,
    bannerPhoto,
  } = brandName || {};

  return (
    <div className="card lg:card-side bg-white shadow-xl">
      <figure>
        <img className="w-52 p-6" src={photo} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <div className="flex justify-center items-center gap-2">
          <p>Brand {brand}</p>
          <img className="w-12 rounded-full" src={bannerPhoto} alt="" />
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to card</button>
        </div>
      </div>
    </div>
  );
};

BrandProducts.propTypes = {
  brandName: PropTypes.object,
};

export default BrandProducts;
