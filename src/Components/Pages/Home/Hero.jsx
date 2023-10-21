import { useEffect } from "react";
import eventOne from "../../../assets/18th_anniversary_pic.jpg";
import eventTwo from "../../../assets/sale.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: "1000", delay: "100" });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="pt-16 p-6">
        <h3 className="md:text-4xl border-b-2 font-semibold md:font-bold py-4">
          Alif Shop: Your Trusted Partner for Hassle-Free Online Shopping
        </h3>
        <p className="p-4">
          We are not just an e-commerce platform; we are your go-to destination
          for a hassle free shopping experience. We bring you the latest in
          technology, innovation, and authentic products, all designed to
          enhance your comfort. Start exploring our categories of Smartphones,
          Laptops, TV, Refrigerator, Oven, Smartwatches, Perfumes and many more.
          Your satisfaction is our commitment.
        </p>
      </div>

      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            data-aos="zoom-in-right"
            src={eventOne}
            className="md:max-w-xl h-full rounded-lg shadow-2xl"
          />
          <div className="p-4">
            <h1 className="md:text-xl  font-semibold md:font-bold">
              Looking for the best Smartphones in Bangladesh?
            </h1>
            <p className="pt-3 ">
              Find the best smartphone option for you with official warranty
              from Alif shop. Explore our collection of Samsung, Infinix, Tecno,
              realme, OnePlus, itel, Symphony, benco, iPhone, Xiaomi, vivo,
              OPPO, Motorola, Nokia etc and find the device that perfectly
              complements you. Whether you want a camera phone, performance
              phone or gaming phone, Alif shop has an option for you. Get 12
              months official warranty, up to 36 months EMI facility and super
              fast delivery within 3 hours.
              <br /> <br />
            </p>
          </div>
        </div>
      </div>

      {/* section two */}

      <div className="hero pt-14 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            data-aos="zoom-in-left"
            src={eventTwo}
            className="md:max-w-xl rounded-lg shadow-2xl"
          />
          <div className="p-4">
            <p className="md:text-xl  font-semibold md:font-bold">
              Buy laptops, notebooks and tablets at the best price in Bangladesh
              from Alif shop
            </p>
            <p className="py-3">
              At Alif shop, we offer an unbeatable selection of laptops,
              notebooks, and tablets designed to cater to your every need.
              Whether your a professional seeking powerful performance for work
              or a student in search of a lightweight and portable device, we
              have it all. Our range includes the latest models from top brands
              like hp, Apple MacBook, Xiaomi, Asus etc. Avail 0% EMI facility
              and official warranty upon your purchase at Alif shop.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
