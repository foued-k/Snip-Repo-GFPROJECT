import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function RequireAuth(props) {
  const [loggedIn, setLoggedIn] = useState(null);

  const checkAuth = async () => {
    try {
      await axios.get("http://localhost:3020/checkAuth", {
        withCredentials: true,
      });
      setLoggedIn(true);
    } catch (err) {
      console.log(err);
      setLoggedIn(false);
    }
  };

  useEffect(() => {
      checkAuth();
  }, []);

  if (loggedIn === null) {
    return <div>Loading...</div>;
  }
  if (loggedIn === false) {
    return <Navigate to="/login" />;
  }

  return <div>{props.children}</div>;
}

export default RequireAuth;
