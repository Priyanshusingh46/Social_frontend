import react ,{useState} from "react"
import Css from "./otpVerification.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function OtpVerification() {
  const[otp,setOtp] = useState(0);
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
    
    <div className="Firstdiv">
        <h1>Hello from otp Verification</h1>
        <input type="text" placeholder="Enter your 4 Digit otp Sent in your Mail"  onChange={(e)=>setOtp(e.target.value)}/><br></br>
        <button type="Submit" onClick={HandleSubmit}>Submit</button>
    </div>
  );
}

export default OtpVerification;