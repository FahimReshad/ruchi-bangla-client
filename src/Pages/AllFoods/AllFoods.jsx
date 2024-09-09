import { useLoaderData } from "react-router-dom";
import AllFoodCards from "../../Components/AllFoodCards/AllFoodCards";
import PageTitle from "./PageTitle/PageTitle";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const AllFoods = () => {
  const allFoodData = useLoaderData();
  const [searchFoods, setSearchFoods] = useState("");

  const [searchResults, setSearchResults] = useState([]);
  const handleSearchFoods = () => {
    fetch(`https://ruchi-bangla-server.vercel.app/food/search/${searchFoods}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Ruchi Bangla || All Foods</title>
      </Helmet>
      <PageTitle></PageTitle>
      <div className="flex justify-center items-center mt-2 md:mt-8 lg:mt-14">
        <input
          value={searchFoods}
          onChange={(e) => setSearchFoods(e.target.value)}
          placeholder="Search for food..."
          className="rounded-l-lg h-[52px] border-2 border-r-0 border-red-800 bg-transparent px-4 py-2 text-white duration-200 focus:outline-none"
          type="text"
        />
        <button
          onClick={handleSearchFoods}
          className="group relative flex w-36 items-center rounded-r-lg border-2 border-l-0 border-red-800 p-3 text-white"
        >
          <span>Search</span>
          <span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-red-700 duration-300 group-hover:w-5/6">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path
                  d="M4 12H20M20 12L14 6M20 12L14 18"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </span>
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:container mx-auto my-10">
        {searchResults.length > 0
          ? searchResults.map((foodData, idx) => (
              <AllFoodCards key={idx} foodData={foodData}></AllFoodCards>
            ))
          : allFoodData.map((foodData, idx) => (
              <AllFoodCards key={idx} foodData={foodData}></AllFoodCards>
            ))}
      </div>
    </div>
  );
};

export default AllFoods;
