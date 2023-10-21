import "react-rater/lib/react-rater.css";
import MyCart from "./MyCart";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Sheared/AuthProvider/AuthProvider";

const AddCart = () => {
  const { user } = useContext(AuthContext);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch(
      `https://retail-and-e-commerce-server-lxikmggt6.vercel.app/userCart/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, [user]);

  return (
    <div className="py-8 max-w-5xl mx-auto grid md:grid-cols-3 grid-cols-1 gap-4">
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
