import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/recipe/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data.recipe));
  }, []);

  return <div>recipe details{recipe.recipeName}</div>;
};

export default RecipeDetails;
