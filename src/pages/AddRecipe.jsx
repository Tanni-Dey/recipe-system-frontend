import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../utils/firebase.init";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CustomInput from "../components/CustomInput";

const AddRecipe = () => {
  const [user] = useAuthState(auth);
  const location = useNavigate();

  useEffect(() => {
    if (!user) {
      location("/");
    }
  }, []);

  // form submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const image = e.target.recipeImg.files[0];

    const formData = new FormData();
    formData.append("image", image);
    fetch(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_APP_immbbApikey
      }`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((uploadImg) => {
        if (uploadImg.success) {
          const img = uploadImg.data.url;

          console.log(img);

          const recipe = {
            recipeName: e.target.recipeName.value,
            videoLink: e.target.videoLink.value,
            country: e.target.country.value,
            category: e.target.category.value,
            recipeDes: e.target.recipeDes.value,
            recipeImg: img,
            creatorEmail: user.email,
            watchCount: 0,
            purchasedBy: [],
          };

          console.log(recipe);

          fetch("http://localhost:5000/recipes", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(recipe),
          })
            .then((res) => res.json())
            .then((addRecipe) => {
              if (addRecipe.recipe?.insertedId) {
                alert("Recipe Added");
              } else {
                alert("Recipe not Added. Already have this recipe");
              }
              console.log("addRecipe", addRecipe);
            });
        }
      });
  };

  return (
    <div className=" px-10 md:px-20 py-24 h-full">
      <div className="md:w-1/2 mx-auto">
        <h3 className="text-3xl mb-2">Add New Recipe</h3>
        <form onSubmit={handleSubmit}>
          <CustomInput
            name="recipeName"
            placeholder="Recipe Name"
            type="text"
          />

          <CustomInput
            name="videoLink"
            placeholder="YouTube Vide Link"
            type="text"
          />
          <CustomInput name="country" placeholder="Country" type="text" />

          <select
            className="py-2 px-5 mt-5 focus:outline-primary border-primary border rounded-lg w-full"
            id="category"
            name="category"
            required
          >
            <option value="" disabled selected>
              Select Recipe Catagory
            </option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="appetizer ">Appetizer </option>
            <option value="salad">Salad</option>
            <option value="dessert">Dessert</option>
            <option value="vegetarian">Vegetarian</option>
          </select>
          <textarea
            rows="4"
            cols="50"
            className="py-2 px-5 focus:outline-primary  border-primary border  rounded-lg mt-5 w-full"
            name="recipeDes"
            placeholder="Recipe Details"
            type="text"
            required
          />
          <CustomInput
            name="recipeImg"
            placeholder="Recipe Image"
            type="file"
          />
          <p className="text-error mt-5">* All field are required</p>
          <input
            className="text-white bg-primary rounded-lg px-10 py-2 my-5 border-2 border-primary drop-shadow-xl  transition ease-in-out  hover:scale-110  duration-700"
            type="submit"
            value="Add Recipe"
          />
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
