import { Link, useLoaderData } from "react-router-dom";

const SingleFoodPage = () => {
  const foodData = useLoaderData();
  console.log(foodData);
  const {_id, name, image, price, category, made_by, origin, description } =
    foodData;
  return (
    <div>
      <div className="container mx-auto space-y-6 rounded-2xl px-6 py-4 shadow-md ">
        {/* Card Image */}
        <img
          className="h-[550px] w-full rounded-2xl"
          src={image}
          alt="Image not found"
        />
        {/* Card Heading */}
        <div className="space-y-2 flex items-center gap-16">
          <h2 className="text-slate-800 sm:text-lg md:text-4xl font-semibold font-barlow">
            <span className="font-bold text-black">{name}</span>{" "}
          </h2>
          <h3 className="text-slate-800 sm:text-lg md:text-4xl font-semibold font-barlow">
            <span className="font-bold text-black">Category: {category}</span>{" "}
          </h3>
        </div>
        <div>
          <h1 className="text-2xl font-semibold font-barlow">{description}</h1>
        </div>
        {/* Price and action button */}
        <div className="mt-5 flex items-center justify-between">
          <h2 className="font-semibold md:text-xl lg:text-2xl">
            Price: $ {price}
          </h2>
          <h2 className="font-semibold md:text-xl lg:text-2xl">
            Made by: {made_by}{" "}
          </h2>
          <h2 className="font-semibold md:text-xl lg:text-2xl">
            Food Origin: {origin}{" "}
          </h2>
        </div>
        <div>
          <Link to={`/purchase/${_id}`}>
            <button className="rounded-lg bg-[#AD1A19] px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-lg md:text-xl w-full">
              Purchase
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodPage;
