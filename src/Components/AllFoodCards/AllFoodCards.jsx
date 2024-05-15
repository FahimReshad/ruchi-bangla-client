import { Link } from "react-router-dom";

const AllFoodCards = ({foodData}) => {
    const { _id, name, image, category, price, quantity} = foodData;
  return (
    <div className=" space-y-6 rounded-2xl bg-slate-100/70 px-6 py-4 shadow-md dark:bg-[#18181B] hover:scale-105 transform transition duration-300">
      {/* Card Image */}
      <img
        className="h-[250px] w-full rounded-2xl bg-gray-400 object-cover"
        src={image}
        alt="card navigate ui"
      />
      {/* Card Heading */}
      <div className="space-y-2">
        <h2 className="font-semibold font-barlow text-slate-800 sm:text-lg md:text-2xl dark:text-white/90">
          {name}
        </h2>
        {/* rating  */}
      </div>
      {/* Price and action button */}
      <div className="mt-5 flex items-center justify-between">
        <h2 className="font-medium text-gray-700 md:text-xl dark:text-white/60">
         Price: $ {price}
        </h2>
        <h2 className="font-medium text-gray-700 md:text-xl dark:text-white/60">Category: {category}</h2>
        
      </div>
      <h2 className="font-medium text-gray-700 md:text-xl dark:text-white/60">Quantity: {quantity}</h2>
      <div>
      <Link to={`/allFoods/${_id}`}><button className="rounded-lg bg-[#AD1A19] px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-lg md:text-xl w-full">
          Details
        </button></Link>
      </div>
    </div>
  );
};

export default AllFoodCards;
