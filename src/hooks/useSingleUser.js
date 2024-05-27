import { useEffect, useState } from "react";

const useSingleUser = (user) => {
  const [singleUser, setSingleUser] = useState(false);
  const [userLoading, setUserLoading] = useState(true);
  const email = user?.email;

  useEffect(() => {
    if (email) {
      fetch(`https://recipe-system-backend.onrender.com/user?email=${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserLoading(false);
          setSingleUser(data.user);
        });
    }
  }, [email]);
  return [singleUser, userLoading];
};

export default useSingleUser;
