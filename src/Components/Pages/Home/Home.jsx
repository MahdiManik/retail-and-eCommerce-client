import bgHome from "../../../assets/Online-Shopping-AD-Banner-Design-in-Photoshop-1180x664.jpg";
import { Link, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from "./Hero";

const Home = () => {
  const brands = useLoaderData();
  useEffect(() => {
    AOS.init({ duration: "1500", delay: "400" });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="pb-10">
        <div
          className="hero h-[600px]"
          data-aos="zoom-in"
          style={{
            backgroundImage: `url(${bgHome})`,
          }}
        >
          <div className="hero-content text-center text-neutral-content"></div>
        </div>

        <div
          className="md:flex text-center justify-center gap-6 items-center my-16"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="flex flex-col justify-center gap-2 p-8 items-center">
            <h4 className="text-xl font-bold">BEAUTICIANS</h4>
            <p className="">
              Our beauticians are specialists in best products, make-up,
              clothing and home, garden products etc. They listen attentively to
              our customers Andrew expertly interpret those expectations to
              deliver and you get your order.
            </p>
          </div>
          <div className="flex flex-col justify-center p-8  gap-1 items-center">
            <h4 className="text-xl font-bold">QUALITY SERVICES</h4>
            <p className="">
              From sample product to technology and everything in-between, here
              at alif shop we follow the latest beauty trends and use
              high-quality products and technology from renowned brands you know
              and love.
            </p>
          </div>
          <div className="flex flex-col justify-center p-8 gap-1 items-center">
            <h4 className="text-xl font-bold">BEAUTY PRODUCTS</h4>
            <p className="">
              After your order, you want to be sure to maintain your new
              product. We offer the finest payment maintinence and save
              after-care products at affordable prices. Make sure to check out
              our monthly special for combination deals on our in-house
              products.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mt-10  grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-6">
            {brands?.map((brnd) => (
              <Link
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                key={brnd?.name}
                to={`/brand/${brnd?._id}`}
                className="p-4 rounded-sm border-2 shadow-2xl"
              >
                <div className="pb-4 ">
                  <h2 className="card-title md:text-3xl font-bold ">
                    {brnd?.name}
                  </h2>
                </div>
                <figure>
                  <img
                    className="md:h-72 rounded-sm hover:scale-[1.08] duration-1000"
                    src={brnd?.bannerPhoto}
                    alt="brand name"
                  />
                </figure>
              </Link>
            ))}
          </div>
        </div>
        <Hero></Hero>
      </div>
      <div className="my-16 flex justify-center items-center">
        <Link className="px-8 py-3 border-2" to={"/comment"}>
          Give your comments here
        </Link>
      </div>
    </>
  );
};

export default Home;
