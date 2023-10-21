import { useEffect, useState } from "react";
import BrandProducts from "./BrandProducts";
import { useLoaderData } from "react-router-dom";
import HeroSlider from "./HeroSlider";

const Brand = () => {
  const dataLoaded = useLoaderData();
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("https://retail-and-e-commerce-server.vercel.app/brand")
      .then((res) => res.json())
      .then((data) => {
        const dataFilter = data.filter(
          (item) =>
            item?.brand?.toLowerCase() === dataLoaded?.brand?.toLowerCase()
        );
        setBrands(dataFilter);
      });
  }, [dataLoaded.brand]);

  return (
    <>
      <HeroSlider></HeroSlider>
      <div className="hero my-12">
        <div className="p-5 pt-8 ">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {brands.map((brand) => (
              <BrandProducts key={brand?._id} brandName={brand}></BrandProducts>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
