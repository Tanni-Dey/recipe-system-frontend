import { useAuthState } from "react-firebase-hooks/auth";
import Banner from "../components/Banner";
import DevInfo from "../components/DevInfo";
import SuccessStories from "../components/SuccessStories";
import auth from "../utils/firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const location = useLocation();
  const [user] = useAuthState(auth);
  const [showToast, setShowToast] = useState(false);

  const from = location.state?.from?.pathname;

  useEffect(() => {
    if (!user) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000); // Hide toast after 3 seconds
    }
  }, []);

  return (
    <>
      {!user && from === "/add-recipe"
        ? showToast && (
            <div className="toast toast-end">
              <div className="alert alert-error">
                <span>You need to be logged in to access this page.</span>
              </div>
            </div>
          )
        : ""}
      <Banner />
      <SuccessStories />
      <DevInfo />
    </>
  );
};

export default Home;
