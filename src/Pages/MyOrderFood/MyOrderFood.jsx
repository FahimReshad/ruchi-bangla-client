import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyOrderFoodCard from "./MyOrderFoodCard";
import { Helmet } from 'react-helmet-async';
const MyOrderFood = () => {
  const { user, loading } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);
  useEffect(() => {
    fetch(`https://ruchi-bangla-server.vercel.app/purchaseFood/${user?.email}`, {
      credentials: "include"
    }
    )
      .then((res) => res.json())
      .then((data) => {
        setMyFoods(data);
      });
  }, [user]);

  if (loading) {
    return <div className="w-10 h-10">
       <div className="grid grid-cols-2 justify-center items-center gap-2 rounded-full">
         <span className="h-5 w-5 rounded-tl-full bg-blue-500 animate-[ping_1.4s_linear_infinite]"></span>{" "}
         <span className="h-5 w-5 rounded-tr-full bg-blue-500 animate-[ping_1.8s_linear_infinite]"></span>
         <span className="h-5 w-5 rounded-bl-full bg-blue-500 animate-[ping_2.2s_linear_infinite]"></span>
         <span className="h-5 w-5 rounded-br-full bg-blue-500 animate-[ping_2.6s_linear_infinite]"></span>
       </div>
     </div>;
   }
  return (
    
    <>
    <Helmet><title>Ruchi Bangla || My Ordered Food</title></Helmet>
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
