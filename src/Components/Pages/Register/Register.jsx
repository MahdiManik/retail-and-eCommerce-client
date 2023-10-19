import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Sheared/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");
    console.log(email, password, name, photo);

    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~\\-]).{6,}$/.test(password)
    ) {
      setError(
        "At least one uppercase letter, At least one special character, A minimum length of 6 characters"
      );
    } else {
      setError("");

      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          Swal.fire({
            title: "Sweet!",
            text: "Registration successful.",
            imageUrl:
              "https://i.ibb.co/0qPwzsm/8595c4eafa8f5a482d2b0a5d8b414459-youre-welcome.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Welcome image",
          });
        })

        .catch((error) => console.error(error));
    }
  };

  return (
    <>
      <div className="hero my-20 ">
        <div className="hero-content flex-col w-full gap-8">
          <div className="text-center lg:text-left">
            <p className="text-red-600  pb-6">{error}</p>

            <h1 className="text-4xl text-center text-[#000000] font-bold">
              Please Register
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm max-h-screen shadow-2xl bg-base-100">
            <form
              onSubmit={handleRegister}
              className="card-body bg-white shadow-2xl"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URl</span>
                </label>
                <input
                  type="photo"
                  name="photo"
                  placeholder="Photo url"
                  className="input input-bordered"
                  required
                />
              </div>

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
                  Register
                </button>
              </div>
            </form>
            <p className="pb-8 px-6 text-[#041e42] bg-white">
              Already have an account?
              <Link
                className="ml-6 mt-auto hover:text-white
				hover:bg-[#041e42] border-2 py-2 px-6 text-[#041e42] rounded-xl border-[#041e42]"
                to={"/login"}
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
