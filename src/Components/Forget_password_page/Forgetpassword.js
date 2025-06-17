import React, { useState } from "react";
import "../OtpVerification_page/otpVerification.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [roll, setRoll] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Roll Number:", roll);

    try {
      const res = await axios.post("http://localhost:3001/forgetpassword", {
        roll,
      });

      console.log("Response:", res.data);
      navigate(`/newpassword/${res.data._id}`);
    } catch (error) {
      console.error("Error:", error);
      if (error?.response?.status) {
        alert(error?.response?.data);
      }
    }
  };

  return (
    <div className="outerdivotp">
      <div className="Firstdiv">
        <h1 id="otptext">Reset Your Password</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="inputbox"
            type="text"
            placeholder="Enter your Roll No"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            required
          />
          <br />
          <div className="submitdiv1">
            <button type="submit" className="submitcontainer1">
              <h4 id="submit-text1">Submit</h4>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
