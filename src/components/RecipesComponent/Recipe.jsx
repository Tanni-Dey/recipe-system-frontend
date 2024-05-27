/* eslint-disable react/prop-types */
import auth from "../../utils/firebase.init";
import Swal from "sweetalert2/dist/sweetalert2.js";
import useSingleUser from "../../hooks/useSingleUser";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Recipe = ({ recipe }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user] = useAuthState(auth);
  const [singleUser] = useSingleUser(user);
  const purchasedByUser = recipe.purchasedBy.find(
    (userEmail) => userEmail === user?.email
  );

  //view recipe button function
  const handleViewRecipe = () => {
    if (!user) {
      //   navigate("/recipes");
      Swal.fire({
        icon: "error",
        title: "Alert!",
        text: "You need to be logged in to access this page.",
      });
      return <Navigate to="/recipes" state={{ from: location }} replace />;
    } else if (user) {
      console.log(singleUser);
      if (user.email === recipe.creatorEmail) {
        navigate(`/recipe/${recipe._id}`);
      } else {
        if (singleUser.coin > 10) {
          Swal.fire({
            title: "Would you want purchase the recipe ?",
            text: "You have enough coin. Spend your 10 coins for purchase the recipe",
            showCancelButton: true,
            confirmButtonText: "Yes",
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              const sendData = {
                recipeCreator: recipe.creatorEmail,
                recipeId: recipe._id,
                recipeBuyer: user.email,
              };
              fetch(
                "https://recipe-system-backend.onrender.com/recipe-details",
                {
                  method: "PUT",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(sendData),
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  if (data.status === "success") {
                    Swal.fire({
                      icon: "success",
                      title: "Purchase Done",
                    });
                    navigate(`/recipe/${recipe._id}`);
                  }
                });
            }
          });
        } else if (singleUser.coin < 10) {
          navigate("/purchase-coin");
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
          {purchasedByUser ? (
            <button
              disabled
              className="btn btn-primary"
              onClick={handleViewRecipe}
            >
              View The Recipe
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleViewRecipe}>
              View The Recipe
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
