/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const MyOrderFoodCard = ({ myFood, myFoods, setMyFoods }) => {
  const { _id, name, image, price, made_by, buyingDate } = myFood;
  const handleDeleteOrderFood = (id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`https://ruchi-bangla-server.vercel.app/purchaseFood/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = myFoods.filter((booking) => booking._id !== id);
            setMyFoods(remaining);
          }
        });
    }
  };
  return (
    <div className="overflow-x-auto">
      <table className="md:w-[90%] shadow-md border mx-auto border-gray-100">
        <tbody>
          <tr className="hover:bg-gray-50 transition duration-300 grid grid-cols-6 items-center">
            <td className="py-4 px-4 flex justify-start">
              <img src={image} className="h-16 w-16 object-cover bg-gray-300" />
            </td>
            <td className="py-4 px-6  text-lg font-medium">{name}</td>
            <td className="py-4 px-6  text-lg font-medium">{price}</td>
            <td className="py-4 px-6 text-lg font-medium">{made_by}</td>
            <td className="py-4 px-6  text-lg font-medium">{buyingDate}</td>
            <td className="py-4 px-6 text-end">
              <Link>
                <button
                  onClick={() => handleDeleteOrderFood(_id)}
                  className="bg-[#8F3034] hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md"
                >
                  X
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyOrderFoodCard;
