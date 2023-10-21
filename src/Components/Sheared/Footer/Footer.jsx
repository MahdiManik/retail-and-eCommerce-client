import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { LiaUniversitySolid } from "react-icons/lia";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-16 bg-[#041e42] text-white">
        <aside>
          <h4 className="md:text-2xl mb-6 font-bold flex justify-center items-center">
            <span className="text-red-400 text-4xl flex justify-center items-center">
              <LiaUniversitySolid></LiaUniversitySolid>
            </span>
            <span className="text-red-400 flex justify-center items-center">
              Alif
            </span>{" "}
            -Shop social
          </h4>
          <div>
            <p className="font-semibold mb-3 text-md flex">
              @MAlif Shop
              <span className="text-2xl ml-1 font-bold">
                <FiFacebook></FiFacebook>
              </span>
            </p>
            <p className="font-semibold mb-3 text-md flex">
              @MAlif Shop
              <span className="text-2xl ml-2 font-bold">
                <FiInstagram></FiInstagram>
              </span>
            </p>
            <p className="font-semibold mb-3 text-md flex">
              @MAlif Shop
              <span className="text-2xl ml-2 font-bold">
                <FiLinkedin></FiLinkedin>
              </span>
            </p>
          </div>
        </aside>
        <nav>
          <header className="footer-title text-white">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
