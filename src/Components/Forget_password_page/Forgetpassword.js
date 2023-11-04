import react, { useState } from "react";
import Css from "../OtpVerification_page/otpVerification.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [roll, setRoll] = useState(0);
  const navigate = useNavigate();
  let { id } = useParams();

  async function HandleSubmit() {
    console.log("hello", roll);
    try {
      const res = await axios.post("http://localhost:3001/forgetpassword", {
        roll: roll,
      });

      console.log("res", res.data);

      /* redirecting to new url */
      let url = "/newpassword/";
            url += res.data._id;
            navigate(url);
    } catch (error) {
      console.log(error);
      if (error?.response?.status) {
        alert(error?.response?.data);
      }
    }
  }

  return (
    <div className="outerdivotp">
      <div className="Firstdiv">
        <h1 id="otptext">Reset Your Password</h1>
        <input
          className="inputbox"
          type="text"
          placeholder="Enter your Roll No"
          onChange={(e) => setRoll(e.target.value)}
        />
        <br></br>

        <div className="submitdiv1" onClick={HandleSubmit}>
          <div className="submitcontainer1">
            <h4 id="submit-text1"> Submit</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
