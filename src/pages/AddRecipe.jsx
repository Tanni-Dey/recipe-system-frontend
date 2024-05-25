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
  const handleSubmit = (e) => {};

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
            name="recipeImg"
            placeholder="Recipe Image"
            type="fill"
          />

          <CustomInput
            name="videoLink"
            placeholder="YouTube Vide Link"
            type="text"
          />
          <CustomInput name="country" placeholder="Country" type="text" />
          <CustomInput name="category" placeholder="Category" type="text" />
          <textarea
            rows="4"
            cols="50"
            className="py-2 px-5 focus:outline-primary  border-primary border  rounded-lg mt-5 w-full"
            name="recipeDes"
            placeholder="Recipe Details"
            type="text"
            required
          />
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
