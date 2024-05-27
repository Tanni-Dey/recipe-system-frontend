import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../utils/firebase.init";
import { useEffect, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <p>Loading</p>;
  }

  if (!user) {
    Swal.fire({
      icon: "error",
      title: "Alert!",
      text: "You need to be logged in to access this page.",
    });
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
