import bgHome from "../../../assets/sale.jpg";
import { Link, useLoaderData } from "react-router-dom";
const Home = () => {
  const brands = useLoaderData();

  return (
    <>
      <div className="pb-10 ">
        <div
          className="hero h-[700px]"
          style={{
            backgroundImage: `url(${bgHome})`,
          }}
        >
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <i className="mb-5 text-white p-2 rounded-lg bg-black text-6xl font-bold">
                Alif Shop
              </i>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mt-10  grid grid-cols-3 items-center justify-between gap-6">
            {brands?.map((brnd) => (
              <Link
                key={brnd?.name}
                to={`/brand/${brnd?._id}`}
                className="p-4  rounded-sm  shadow-2xl"
              >
                <div className="pb-3 p-1">
                  <h2 className="card-title md:text-3xl font-bold text-orange-500">
                    {brnd?.name}
                  </h2>
                </div>
                <figure>
                  <img
                    className="md:h-96 rounded-sm"
                    src={brnd?.bannerPhoto}
                    alt="brand name"
                  />
                </figure>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
