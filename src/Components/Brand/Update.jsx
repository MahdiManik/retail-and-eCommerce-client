import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const products = useLoaderData();
  const { _id, name, brand, type, rating, price, details, photo } =
    products || {};

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedProducts = {
      name,
      brand,
      type,
      rating,
      price,
      details,
      photo,
    };

    fetch(`https://retail-and-e-commerce-server.vercel.app/brand/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="border-2 p-20">
      <h2 className="text-4xl font-bold text-center text-black">
        Update The Product
      </h2>

      <form onSubmit={handleUpdate}>
        <div className="form-control grid grid-rows-1 md:grid-cols-2 gap-8 w-max-6xl mx-auto font-sans">
          <div>
            <label className="label text-black">Name</label>
            <label
              className="input-group input-group-vertical 
		  bg-[#F4F3F0]"
            >
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Enter name"
                className="input input-bordered  bg-[#ffffff]"
              />
            </label>
            <label className="label text-black">Brand</label>
            <label
              className="input-group input-group-vertical 
		  bg-[#F4F3F0]"
            >
              <input
                type="text"
                name="brand"
                defaultValue={brand}
                placeholder="Enter brand"
                className="input input-bordered bg-[#ffffff]"
              />
            </label>
            <label className="label text-black">Product Type</label>
            <label className="input-group input-group-vertical bg-[#F4F3F0]">
              <input
                type="text"
                name="type"
                defaultValue={type}
                placeholder="Enter product type"
                className="input input-bordered bg-[#ffffff]"
              />
            </label>
          </div>
          <div>
            <label className="label text-black">Rating</label>
            <label className="input-group input-group-vertical bg-[#F4F3F0]">
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="Enter rating"
                className="input input-bordered bg-[#ffffff]"
              />
            </label>
            <label className="label text-black">Price</label>
            <label className="input-group input-group-vertical bg-[#F4F3F0]">
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Enter price"
                className="input input-bordered bg-[#ffffff]"
              />
            </label>
            <label className="label text-black">Details</label>
            <label className="input-group input-group-vertical bg-[#F4F3F0]">
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Enter details"
                className="input input-bordered bg-[#ffffff]"
              />
            </label>
          </div>
        </div>
        <label className="label text-black font-sans">Product Photo</label>
        <label className="input-group input-group-vertical bg-[#F4F3F0]">
          <input
            type="text"
            name="photo"
            defaultValue={photo}
            placeholder="Enter product photo URL"
            className="input input-bordered font-sans bg-[#ffffff]"
          />
        </label>

        <input
          className="w-full text-center font-bold text-xl 
	hover:bg-[#D2B48C] border-2 border-[#331A15] py-1 text-black
	rounded-lg mt-4"
          type="submit"
          value="Update Product"
        />
      </form>
    </div>
  );
};

export default Update;
