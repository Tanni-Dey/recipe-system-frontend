import App from "../App";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import NotFound from "../pages/NotFound";
import AddRecipe from "../pages/AddRecipe";
import ProtectedRoute from "./ProtectedRoute";
import RecipeDetails from "../pages/RecipeDetails";
import { createBrowserRouter } from "react-router-dom";
import PurchaseCoin from "../pages/PurchaseCoin";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/add-recipe",
        element: (
          <ProtectedRoute>
            <AddRecipe />
          </ProtectedRoute>
        ),
      },
      {
        path: "/recipe/:id",
        element: (
          <ProtectedRoute>
            <RecipeDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/purchase-coin",
        element: (
          // <ProtectedRoute>
          <PurchaseCoin />
          // </ProtectedRoute>
        ),
      },
    ],
    element: <App />,
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
