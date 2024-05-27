import { useEffect, useState } from "react";
import Recipe from "../components/RecipesComponent/Recipe";
import Loading from "../components/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../utils/firebase.init";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const [allRecipe, setAllRecipe] = useState([]);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname;
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch("https://recipe-system-backend.onrender.com/recipes")
      .then((res) => res.json())
      .then((data) => setAllRecipe(data));
  }, []);

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, []);

  if (allRecipe.length === 0) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto my-20">
      {allRecipe.map((recipe) => (
        <Recipe key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Recipes;
