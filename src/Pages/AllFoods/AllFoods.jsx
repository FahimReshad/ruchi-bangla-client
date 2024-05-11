import { useLoaderData } from "react-router-dom";
import AllFoodCards from "../../Components/AllFoodCards/AllFoodCards";
import PageTitle from "./PageTitle/PageTitle";

const AllFoods = () => {
    const allFoodData = useLoaderData();
    console.log(allFoodData);
  return (
    <div>
      <PageTitle></PageTitle>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:container mx-auto mt-10">
    {
        allFoodData.map((foodData, idx) => <AllFoodCards key={idx}  foodData={foodData}></AllFoodCards>)
        
    }
    </div>
    </div>
  );
};

export default AllFoods;
