import { useEffect, useState } from "react";
import BrandProducts from "./BrandProducts";
import { useLoaderData } from "react-router-dom";

const Brand = () => {
  const dataLoaded = useLoaderData();
  //  console.log(dataLoaded);

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/brand")
      .then((res) => res.json())
      .then((data) => {
        const dataFilter = data.filter(
          (item) => item.brand.toLowerCase() === dataLoaded.brand.toLowerCase()
        );
        setBrands(dataFilter);
        //console.log(dataFilter);
      });
  }, [dataLoaded.brand]);

  return (
    <div
      className="hero"
      style={{
        backgroundImage: "url('your-image-url-here')",
      }}
    >
      <div className="p-5 hero-overlay bg-opacity-60">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {brands.map((brand) => (
            <BrandProducts key={brand._id} brandName={brand}></BrandProducts>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
