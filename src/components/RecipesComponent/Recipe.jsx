import React from "react";
import auth from "../../utils/firebase.init";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2/dist/sweetalert2.js";
import useSingleUser from "../../hooks/useSingleUser";

const Recipe = ({ recipe }) => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [singleUser] = useSingleUser(user);

  const handleViewRecipe = () => {
    if (!user) {
      //   navigate("/recipes");
      Swal.fire({
        icon: "error",
        title: "Alert!",
        text: "You need to be logged in to access this page.",
      });
    } else if (user) {
      if (user.email === recipe.creatorEmail) {
        navigate(`/recipe/${recipe._id}`);
      } else {
        if (singleUser.coin > 10) {
          Swal.fire({
            title: "Spend your 10 coins for purchsed recipe",
            // showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Ok",
            // denyButtonText: `Don't save`
          });
          // .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          // if (result.isConfirmed) {
          //   Swal.fire("Saved!", "", "success");
          // } else if (result.isDenied) {
          //   Swal.fire("Changes are not saved", "", "info");
          // }
          // });
        }
      }
    }
  };

  return (
    <div
      key={recipe._id}
      className="card lg:card-side bg-base-100 mb-5 shadow-xl"
    >
      <figure>
        <img
          className="w-[70%] mr-auto"
          src={recipe.recipeImg}
          alt="recipe_img"
        />
      </figure>
      <div className="card-body w-[170%]">
        <h2 className="card-title">{recipe.recipeName}</h2>
        <p>Country : {recipe.country}</p>
        <p>Purchaed By : {recipe.purchasedBy[0] || ""}</p>
        <p>Recipe Creator : {recipe.creatorEmail}</p>
        <div className="card-actions justify-end">
          {/* <Link to={`/recipe/${recipe._id}`}> */}
          <button className="btn btn-primary" onClick={handleViewRecipe}>
            View The Recipe
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
