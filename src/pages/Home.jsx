import { useEffect, useState } from "react";
import Banner from "../components/HomeComponents/Banner";
import auth from "../utils/firebase.init";
import DevInfo from "../components/HomeComponents/DevInfo";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useAuthState } from "react-firebase-hooks/auth";
import SuccessStories from "../components/HomeComponents/SuccessStories";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [recipe, setRecipe] = useState({});

  const from = location.state?.from?.pathname;

  const recipeRegex = /^\/recipe\/([a-zA-Z0-9]+)$/;

  // useEffect(() => {
  if (user) {
    if (from) {
      console.log("from", from);
      const matchFrom = from.match(recipeRegex);
      console.log("matchFrom", matchFrom);
      if (matchFrom) {
        const recipeId = matchFrom[1];
        console.log("recipe id", recipeId);
        fetch(`http://localhost:5000/recipe/${recipeId}`)
          .then((res) => res.json())
          .then((data) => {
            setRecipe(data.recipe);
            console.log("data", data);
            if (data.recipe.creatorEmail === user.email) {
              console.log("email matched");
              //  navigate((from, { replace: true }));
              console.log("matched", from);
              return <Navigate to={from} />;
            } else {
              navigate("/");
              console.log("dgdfgfd");
            }
            console.log(data.recipe);
          });
        console.log(recipe);
      } else if (user) {
        navigate(from, { replace: true });
      }
    }
  }
  // }, [user]);

  useEffect(() => {}, []);

  // console.log(recipe);
  // after login navigation
  // if (user) {
  //   navigate(from, { replace: true });
  // }
  // useEffect(() => {
  //   if (user) {
  //     fetch(`http://localhost:5000/user?email=${user.email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.user.email && data.user.coin > 10) {
  //           console.log(data);
  //           Swal.fire({
  //             title: "Alert!",
  //             text: "Spend your 10 coins for purchsed recipe",
  //           });

  //           Swal.fire({
  //             title: "Spend your 10 coins for purchsed recipe",
  //             // showDenyButton: true,
  //             showCancelButton: true,
  //             confirmButtonText: "Ok",
  //             // denyButtonText: `Don't save`
  //           });
  //           // .then((result) => {
  //           /* Read more about isConfirmed, isDenied below */
  //           // if (result.isConfirmed) {
  //           //   Swal.fire("Saved!", "", "success");
  //           // } else if (result.isDenied) {
  //           //   Swal.fire("Changes are not saved", "", "info");
  //           // }
  //           // });
  //         }
  //       });
  //   }
  // }, [user]);

  return (
    <>
      <Banner />
      <SuccessStories />
      <DevInfo />
    </>
  );
};

export default Home;
