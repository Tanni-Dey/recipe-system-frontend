import App from "../App";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import AddRecipe from "../pages/AddRecipe";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../pages/NotFound";

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
    ],
    element: <App />,
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
