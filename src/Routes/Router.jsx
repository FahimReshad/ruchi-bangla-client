import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SingleFoodPage from "../Pages/SingleFoodPage/SingleFoodPage";
import PurchasePage from "../Pages/PurchasePage/PurchasePage";
import PrivateRoute from "./PrivateRoute";
import MyAddedFood from "../Pages/MyAddedFood/MyAddedFood";
import AddFood from "../Pages/AddFood/AddFood";
import MyOrderFood from "../Pages/MyOrderFood/MyOrderFood";
import GalleryCards from "../Pages/Gallery/GalleryCards";
import UpdatedAddedFood from "../Pages/UpdatedAddedFood/UpdatedAddedFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allFoods",
        element: <AllFoods></AllFoods>,
        loader: () => fetch("https://ruchi-bangla-server.vercel.app/food"),
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allFoods/:id",
        element: <SingleFoodPage></SingleFoodPage>,
        loader: ({ params }) =>
          fetch(`https://ruchi-bangla-server.vercel.app/food/id/${params.id}`),
      },
      {
        path: "/purchase/:id",
        element: (
          <PrivateRoute>
            <PurchasePage></PurchasePage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://ruchi-bangla-server.vercel.app/food/id/${params.id}`),
      },
      {
        path: "/myAddedFood",
        element: <MyAddedFood></MyAddedFood>,
      },
      {
        path: "/addFood",
        element: <AddFood></AddFood>,
      },
      {
        path: "/myOrderFood",
        element: <MyOrderFood></MyOrderFood>,
      },
      {
        path: "/updatedFood/:id",
        element: <UpdatedAddedFood></UpdatedAddedFood>,
        loader: ({ params }) =>
          fetch(`https://ruchi-bangla-server.vercel.app/food/id/${params.id}`),
      },
    ],
  },
]);
export default router;
