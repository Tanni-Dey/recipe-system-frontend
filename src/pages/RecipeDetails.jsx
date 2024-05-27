import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetch(`https://recipe-system-backend.onrender.com/recipe/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data.recipe));
  }, []);

  return (
    <div>
      recipe details{recipe.recipeName}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/uT-cp7CJIW0?si=OS6bLpm1UM1ByyAp"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default RecipeDetails;
