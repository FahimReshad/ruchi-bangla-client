import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  const { signInUser, googleSignIn, facebookSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          console.log(result.user);
          navigate(from);
          toast.success("Login successfully");
          return;
        }
      })
      .catch(() =>
        toast.error("Your email and password do not match each other")
      );
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          navigate(from);
          toast.success("You login successfully");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Your email & password do not match each other");
      });
  };

  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then((result) => {
        console.log(result);
        if (result.user) {
          navigate(from);
          toast.success("You login successfully");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Your email or number and password do not match each other")
      });
  };
  return (
    <div className="flex lg:h-screen items-center justify-center bg-[#dd5903]/20 p-6 md:p-0">
      <div className="flex flex-col lg:flex-row h-full w-full overflow-hidden rounded-lg shadow-md  md:h-[90%] md:w-[80%] lg:h-[80%] items-center">
        {/* register design side  */}
        <div className="lg:w-1/2">
          <img
            className="w-full"
            src="https://i.ibb.co/hM17dpn/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cl.png"
            alt=""
          />
        </div>
        {/* input side  */}
        <div className="flex w-full flex-col justify-center  py-10 lg:w-[60%]">
          <h2 className="pb-8 text-center text-4xl font-bold text-[#dd5903] font-barlow">
            Login Here
          </h2>
          <form
            onSubmit={handleLogin}
            className="flex  w-full flex-col items-center justify-center gap-4"
          >
            <input
              className="w-[80%] rounded-lg border border-[#dd5903] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#dd5903]/50 md:w-[60%]"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className="w-[80%] rounded-lg border border-[#dd5903] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#dd5903]/50 md:w-[60%]"
              type="password"
              placeholder="Password"
              name="password"
            />
            <p className="text-lg font-semibold text-gray-700 font-barlow">
              Do not have an account ?{" "}
              <Link to="/register" className="text-[#dd5903] ">
                Please Register
              </Link>
            </p>
            <input
              className="w-[80%] rounded-lg bg-[#dd5903] px-6 py-2 font-medium text-white md:w-[60%]"
              type="submit"
            />
          </form>
          {/* divider  */}
          <div className="my-8 flex items-center px-8">
            <hr className="flex-1" />
            <div className="mx-4 text-gray-400">OR</div>
            <hr className="flex-1" />
          </div>
          {/* sign with google */}
          <div className="flex gap-6 mx-auto w-1/2">
            <div
              onClick={handleGoogleSignIn}
              className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow"
            >
              <div className="flex h-full w-[50%] items-center bg-[#dd5903] pl-4 text-sm text-white">
                Sign With
              </div>
              <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#dd5903] group-hover:hidden"></span>
              <span className="pr-4 text-4xl font-bold text-white">G+</span>
            </div>
            <div
              onClick={handleFacebookSignIn}
              className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow"
            >
              <div className="flex h-full w-[50%] items-center bg-[#dd5903] pl-4 text-sm text-white hover:cursor-pointer">
                Sign With
              </div>
              <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#dd5903] group-hover:hidden"></span>
              <button className="pr-4 text-4xl font-bold text-blue-500 hover:cursor-pointer">
                <FaFacebook />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
