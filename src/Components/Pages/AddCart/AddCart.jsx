import { useLoaderData } from "react-router-dom";
import "react-rater/lib/react-rater.css";
import MyCart from "./MyCart";
import { useState } from "react";

const AddCart = () => {
  const loadedData = useLoaderData();
  const [carts, setCarts] = useState(loadedData);

  return (
    <div className="py-8 max-w-5xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-4">
      {carts?.map((cart) => (
        <MyCart
          key={cart._id}
          cart={cart}
          carts={carts}
          setCarts={setCarts}
        ></MyCart>
      ))}
    </div>
  );
};

export default AddCart;
