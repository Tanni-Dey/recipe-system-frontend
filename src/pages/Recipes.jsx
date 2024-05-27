import { useEffect, useState } from "react";
import Recipe from "../components/RecipesComponent/Recipe";

const Recipes = () => {
  const [allRecipe, setAllRecipe] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((res) => res.json())
      .then((data) => setAllRecipe(data));
  }, []);

  return (
    <div className="container mx-auto my-20">
      {allRecipe.map((recipe) => (
        <Recipe key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Recipes;
{
  /* <div
          key={recipe._id}
          className="card card-side bg-base-100  mb-5 shadow-xl"
        >
          <figure>
            <img
              className="w-[30%] mr-auto"
              src={recipe.recipeImg}
              alt="recipe_img"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div> */
}
