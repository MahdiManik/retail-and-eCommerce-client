import { useEffect, useState } from "react";
import BrandProducts from "./BrandProducts";
import { useLoaderData } from "react-router-dom";
import image1 from "../../assets/amazon.webp";
import image2 from "../../assets/alibaba.jpg";
import image3 from "../../assets/bestbuy.jpg";

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
      <div className=" bg-blue-900 h-96">
        <div className="w-full h-full relative overflow-hidden">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  src={image1}
                  alt="Image 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src={image2}
                  alt="Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src={image3}
                  alt="Image 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hero"
        style={{
          backgroundImage: "url('your-image-url-here')",
        }}
      >
        <div className="p-5 hero-overlay ">
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
