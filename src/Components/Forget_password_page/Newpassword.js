import react, { useState } from "react";
import Css from "../OtpVerification_page/otpVerification.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NewPassword() {
  const [otp,setOtp] = useState();
  const [password, setPassword] = useState("");
  let {id} = useParams();
  const navigate = useNavigate();
  /* Backend Call */
    async function HandleSubmit (){ 
        console.log("otp",otp);
        console.log("password",password);
        console.log("id",id);

        if(password.length<8){
            alert("Too Small Password");
        }
        else{
        try{
        const user =  await axios.post("http://localhost:3001/newotpVerification",{
            otp:otp,
            password:password,
            id:id
        });
        console.log(user);
        navigate("/login");
    }
    catch(error){
        if (error?.response?.status) {
            alert(error?.response?.data);
          }
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
          placeholder="Enter Your Otp"
          onChange={(e) => setOtp(e.target.value)}
        />
        <br></br>

        <input
          className="inputbox"
          type="password"
          placeholder="Enter Your NewPassword"
          onChange={(e) => setPassword(e.target.value)}
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

export default NewPassword;
