import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    const email = form.email.value;
    // const photoURL = form.photoURL.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        if (result.user) {
          navigate("/");
          toast.success("Registration Successfully");
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero min-h-screen bg-[#dd5903]/20 ">
      <Helmet>
        <title>Ruchi Bangla || Register</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="w-full">
          <img
            className="w-full"
            src="https://i.ibb.co/hM17dpn/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cl.png"
            alt=""
          />
        </div>
        <div className="card shrink-0 w-1/2 shadow-sm ">
          <h1 className="text-4xl font-bold text-center mt-6 font-barlow text-[#dd5903]">
            Register Form
          </h1>
          <p className="text-center text-xl mt-4 font-barlow font-semibold">
            Do not have an account?.
          </p>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
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
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
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
              <button className="btn bg-[#dd5903] text-white text-lg font-barlow">
                Register
              </button>
            </div>
          </form>
          <p className="my-2 text-center font-bold">
            Already have an account.?
            <Link
              to="/login"
              className="text-orange-600 font-bold ml-2 hover:underline"
            >
              Please Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
