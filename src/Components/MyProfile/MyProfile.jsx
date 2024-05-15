import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const MyProfile = () => {
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, []);
  return (
    <div ref={dropDownRef} className="relative mx-auto w-fit text-black">
      <button onClick={() => setOpen((prev) => !prev)}>
        <img
          width={60}
          height={60}
          className="size-12 rounded-full bg-slate-500 object-cover duration-500 hover:scale-x-[98%] hover:opacity-80"
          src={user.photoURL}
          alt="profile not found"
        />
      </button>
      <ul
        className={`${
          open ? "visible duration-300" : "invisible"
        } absolute right-0 top-12 z-50 w-60 rounded-sm bg-slate-200 shadow-md`}
      >
        <Link to='/myAddedFood'>
          <li
             className={`rounded-sm text-center text-white font-bold  bg-red-700 p-2 ${
                open ? "opacity-100 duration-500" : "opacity-0 duration-200"
              } hover:bg-red-500`}
          >
            My added food items
          </li>
        </Link>
        <Link to='/addFood'>
          <li
            className={`rounded-sm text-center text-white font-bold  bg-red-700 p-2 ${
              open ? "opacity-100 duration-500" : "opacity-0 duration-200"
            } hover:bg-red-500`}
          >
            Add a food item
          </li>
        </Link>
        <Link to='/myOrderFood'>
          <li
            className={`rounded-sm text-center text-white font-bold  bg-red-700 p-2 ${
              open ? "opacity-100 duration-500" : "opacity-0 duration-200"
            } hover:bg-red-500`}
          >
            My ordered food items
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default MyProfile;
