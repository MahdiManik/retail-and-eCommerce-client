import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Sheared/AuthProvider/AuthProvider";

const Login = () => {
  const { loginWithEmailAndPassword, googleSignIn, logOut } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();

  const navigate = useNavigate();

  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    loginWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result.user);

        Swal.fire({
          title: "Great job!",
          text: "Sign-in successful.",
          imageUrl:
            "https://i.ibb.co/0qPwzsm/8595c4eafa8f5a482d2b0a5d8b414459-youre-welcome.jpg",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Welcome image",
        });

        navigate(location?.state ? location.state : "/");
      })

      .catch((error) => {
        setError("Email Or Password doesn't match.", error.message);
        console.error(error);
      });
    logOut();
  };

  const handleGoogleLogin = () => {
    logOut();
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Great job!",
          text: "Sign-in successful.",
          imageUrl:
            "https://i.ibb.co/0qPwzsm/8595c4eafa8f5a482d2b0a5d8b414459-youre-welcome.jpg",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Welcome image",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <>
      <div className="hero my-20 bg-white">
        <div className="hero-content flex-col w-full gap-8">
          <div className="text-center lg:text-left">
            <p className="text-red-600  pb-6">{error}</p>

            <h1 className="text-4xl text-center text-[#000000] font-bold">
              Login now!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm max-h-screen shadow-2xl">
            <form
              onSubmit={handleLogin}
              className="card-body bg-white shadow-2xl"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="flex justify-center items-center gap-2 mt-auto hover:text-white
			  hover:bg-[#041e42] border-2 py-2 px-6 text-[#041e42] rounded-xl border-[#041e42]"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="pb-8 px-6 text-[#041e42] bg-white">
              Do Not have an account?
              <Link
                className="ml-2 mt-auto hover:text-white
				hover:bg-[#041e42] border-2 py-2 px-6 text-[#041e42] rounded-xl border-[#041e42]"
                to={"/register"}
              >
                Register
              </Link>
            </p>
            <div className="m-8 flex justify-center items-center bg-white">
              <button
                onClick={handleGoogleLogin}
                className="flex items-center gap-2 mt-auto hover:text-white
			  hover:bg-[#041e42] border-2 py-2 px-6 text-[#041e42] rounded-xl border-[#041e42]"
              >
                <p className="font-bold text-2xl">
                  <FcGoogle></FcGoogle>{" "}
                </p>{" "}
                Login with google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
