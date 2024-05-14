import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyAddedFoodCard from './MyAddedFoodCard';

const MyAddedFood = () => {
    const {user} = useContext(AuthContext);
    const [myFoods, setMyFoods] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/food/email/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMyFoods(data)
        })
    }, [user])
    return (
        <>
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
        {
            myFoods.map(myFood => <MyAddedFoodCard key={myFood._id} myFood={myFood}></MyAddedFoodCard>)
        }
      </div>
    </>
    );
};

export default MyAddedFood;