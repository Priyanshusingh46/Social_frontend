import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

function PrivateComponent({ Component }) {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  async function checktoken() {
    const x = Cookies.get("token");
    if (x) {
      try {
        const response = await axios.post(
          "http://localhost:3001/tokenverification",
          {
            token:x,
          }
        );

        if (response.status === 200) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (error) {
        console.log(error);
        setIsAuth(false);
      }
    } else {
      setIsAuth(false);
    }
    setLoading(false);
  }

  useEffect(() => {
    checktoken();
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  } else {
    if (!isAuth) {
      return <Navigate to="/login" />;
    }
    // Render the Component prop if the user is authenticated
    return <Component />;
  }
}

export default PrivateComponent;
