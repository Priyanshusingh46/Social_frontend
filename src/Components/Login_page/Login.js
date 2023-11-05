import React, { useState } from "react";
import axios from "axios";
import "../Register_page/register.css"; 
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

function Login() {
    const [roll, setRoll] = useState(0);
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    function handleSubmit  (){
        console.log(password);
        try {
          axios.post("http://localhost:3001/login", {
            roll: roll,
            password: password,
          }).then((response) => {
            console.log("login response",response.data);
            Cookies.set('token',response.data);
            navigate("/home");
            
          }).catch((error) => {
            if (error.response.status === 404) {
              alert("User not found. Please check your credentials.");
            } else {
              console.log("Error:", error);
            }
          });
        } catch (error) {
          console.log("Exception occurred:", error);
        }
    }

    function forgetpassword(){
      navigate("/forgetpassword");
    }
    return(
      <div className="Register-main-cointainer">
      <div className="Formdiv">
        <div className="inputContainer">
        <h1 id="heading_text">Please Login here !!!</h1>
        <div className="forminput">
          <input
            className="inputbox"
            type="text"
            placeholder="Enter your Roll no."
            onChange={(e) => setRoll(e.target.value)}
          />
          <br></br>
          <input
            className="inputbox"
            type="password"
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <div className="forgetpassworddiv" onClick={forgetpassword}>
          <h4 id="forgetpasswordtext"> Forget password? </h4>
          </div>
          <br></br>
        </div>
        <div className="submitdiv" onClick={handleSubmit}>
          <div className="submitcontainer">
          <h4 id="submit-text"> Submit</h4>
          </div>
        </div>

        <div className="login-route">
          <h4 id="login-route-text">Not a member?  <a href="./">Signup</a> </h4>
        </div>

      </div>
      </div>
    </div>
    );
}

export default Login;