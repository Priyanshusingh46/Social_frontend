import React, { useState } from "react";
import axios from "axios";
import "../Register_page/register.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
  const [roll, setRoll] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!roll || !password) {
      setErrorMsg("Both fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/login", {
        roll,
        password,
      });

      console.log("Login response:", response.data);
      Cookies.set("token", response.data);
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
      if (error?.response?.status === 404) {
        setErrorMsg("User not found. Please check your credentials.");
      } else {
        setErrorMsg("Something went wrong. Please try again.");
      }
    }
  };

  const goToForgetPassword = () => {
    navigate("/forgetpassword");
  };

  return (
    <div className="Register-main-cointainer">
      <div className="Formdiv">
        <div className="inputContainer">
          <h1 id="heading_text">Please Login Here</h1>

          <form onSubmit={handleSubmit}>
            <input
              className="inputbox"
              type="text"
              placeholder="Enter your Roll No."
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
              required
            />
            <br />

            <input
              className="inputbox"
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />

            <div className="forgetpassworddiv" onClick={goToForgetPassword}>
              <h4 id="forgetpasswordtext">Forgot password?</h4>
            </div>

            {errorMsg && (
              <div style={{ color: "red", marginTop: "10px" }}>{errorMsg}</div>
            )}

            <br />

            <div className="submitdiv">
              <button type="submit" className="submitcontainer">
                <h4 id="submit-text">Submit</h4>
              </button>
            </div>
          </form>

          <div className="login-route">
            <h4 id="login-route-text">
              Not a member? <a href="./">Signup</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;