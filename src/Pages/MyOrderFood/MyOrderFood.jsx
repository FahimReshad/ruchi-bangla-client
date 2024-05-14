import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyOrderFoodCard from "./MyOrderFoodCard";

const MyOrderFood = () => {
  const { user } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/purchaseFood/${user?.email}`, {
      credentials: "include"
    }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyFoods(data);
      });
  }, [user]);
  return (
    <>
      <table className="md:w-[90%] shadow-md border mx-auto border-gray-100 mt-8">
        <thead>
          <tr className="bg-[#8F3034] text-white grid grid-cols-6  ">
            <th className="py-4 px-6 text-lg text-left border-b">Food Image</th>
            <th className="py-4 px-6 text-lg text-left border-b ">Food Name</th>
            <th className="py-4 px-6 text-lg text-left border-b">Price</th>
            <th className="py-4 px-6 text-lg text-left border-b">Food Owner</th>
            <th className="py-4 px-6 text-lg text-left border-b">Added Time</th>          
            <th className="py-4 px-6 text-lg border-b text-end">Action</th>
          </tr>
        </thead>
      </table>
      <div>
        {Array.isArray(myFoods) && myFoods.length > 0 ? (
          myFoods.map((myFood) => (
            <MyOrderFoodCard key={myFood._id} myFood={myFood} myFoods={myFoods} setMyFoods={setMyFoods}></MyOrderFoodCard>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </>
  );
};

export default MyOrderFood;
