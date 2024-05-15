import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyAddedFoodCard from "./MyAddedFoodCard";
import { Helmet } from "react-helmet-async";
const MyAddedFood = () => {
  const { user } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);
  useEffect(() => {
    fetch(`https://ruchi-bangla-server.vercel.app/food/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyFoods(data);
      });
  }, [user]);
  return (
    <>
      <Helmet>
        <title>Ruchi Bangla || My Added Food</title>
      </Helmet>
      <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 mt-8">
        <thead>
          <tr className="bg-[#8F3034] text-white grid grid-cols-4">
            <th className="py-4 px-6 text-lg text-left border-b">Food Image</th>
            <th className="py-4 px-6 text-lg text-left border-b ">Food Name</th>
            <th className="py-4 px-6 text-lg text-left border-b">Price</th>
            <th className="py-4 px-6 text-lg border-b text-end">Action</th>
          </tr>
        </thead>
      </table>
      <div>
        {myFoods.map((myFood) => (
          <MyAddedFoodCard key={myFood._id} myFood={myFood}></MyAddedFoodCard>
        ))}
      </div>
    </>
  );
};

export default MyAddedFood;
