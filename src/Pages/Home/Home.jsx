import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import CustomerReview from "../../Components/CustomerReview/CustomerReview";
import TopFood from "../../Components/TopFoodSection/TopFood";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Ruchi Bangla || Home</title>
      </Helmet>
      <Banner></Banner>
      <TopFood></TopFood>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
