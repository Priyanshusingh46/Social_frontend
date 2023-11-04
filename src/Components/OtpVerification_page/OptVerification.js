import react ,{useState} from "react"
import Css from "./otpVerification.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function OtpVerification() {
  const[otp,setOtp] = useState(0);
  const navigate = useNavigate();
  let {id} = useParams();
  function HandleSubmit(){
      if(otp.length==4)
      {
          // Calling Backend Url
        
          try {
            axios.post("http://localhost:3001/otpVerification",{
              otp:otp,
              id: id

            }).then((response)=>{
              console.log(response.data);
              navigate("/login");
            })
            .catch((error) => {
              console.log(error);
            });
          } 
          catch (error) {
            console.log(error);
          }

      }
      else{
        alert("Wrong Otp");
      }
  }

  return (
    <div className="outerdivotp">
    <div className="Firstdiv">
        <h1 id="otptext">Enter Your OTP</h1>
        <input  className="inputbox" type="text" placeholder="Enter your OTP"  onChange={(e)=>setOtp(e.target.value)}/><br></br>
       
        <div className="submitdiv1" onClick={HandleSubmit}>
        <div className="submitcontainer1">
        <h4 id="submit-text1"> Submit</h4>
        </div>
      </div>
    </div>
    </div>
  );
}

export default OtpVerification;
