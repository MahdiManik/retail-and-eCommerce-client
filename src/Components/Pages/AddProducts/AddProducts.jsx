import Swal from "sweetalert2";

const AddProducts = () => {
  const handleAdd = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const bannerPhoto = form.bannerPhoto.value;
    const productValue = {
      name,
      brand,
      type,
      rating,
      price,
      details,
      photo,
      bannerPhoto,
    };
    console.log(productValue);

    fetch("http://localhost:7000/brand/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productValue),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Add product successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <>
      <div className="bg-[#F4F3F0] p-20">
        <h2 className="text-4xl font-bold text-center text-black">
          Add New Products
        </h2>

        <form onSubmit={handleAdd}>
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
                  placeholder="Enter brand"
                  className="input input-bordered bg-[#ffffff]"
                />
              </label>
              <label className="label text-black">Product Type</label>
              <label className="input-group input-group-vertical bg-[#F4F3F0]">
                <input
                  type="text"
                  name="type"
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
                  placeholder="Enter rating"
                  className="input input-bordered bg-[#ffffff]"
                />
              </label>
              <label className="label text-black">Price</label>
              <label className="input-group input-group-vertical bg-[#F4F3F0]">
                <input
                  type="text"
                  name="price"
                  placeholder="Enter price"
                  className="input input-bordered bg-[#ffffff]"
                />
              </label>
              <label className="label text-black">Details</label>
              <label className="input-group input-group-vertical bg-[#F4F3F0]">
                <input
                  type="text"
                  name="details"
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
              placeholder="Enter product photo URL"
              className="input input-bordered font-sans bg-[#ffffff]"
            />
          </label>

          <input
            className="w-full text-center font-bold text-xl 
		hover:bg-[#D2B48C] border-2 border-[#331A15] py-1 text-black
		rounded-lg mt-4"
            type="submit"
            value="Add Products"
          />
        </form>
      </div>
    </>
  );
};

export default AddProducts;

//  https://i.ibb.co/QNQ1vZG/Smartwatch.jpg

// https://i.ibb.co/Tb6hvVP/Amazon-appstore-Gamescom-36712162161.jpg
