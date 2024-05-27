import { useState } from "react";

const useSingleUser = (user) => {
  const [singleUser, setSingleUser] = useState(false);
  const [userLoading, setUserLoading] = useState(true);
  const email = user?.email;
  if (email) {
    fetch(`http://localhost:5000/user?email=${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserLoading(false);
        setSingleUser(data.user);
        console.log(data.user);
      });
  }
  return [singleUser, userLoading];
};

export default useSingleUser;
