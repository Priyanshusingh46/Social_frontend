import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css"; // Assuming your CSS file is in the same directory

function Register() {
  const [roll, setRoll] = useState(0);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null); // Use null initially instead of an empty array
  const navigate = useNavigate();

  function handleSubmit() {
    if (roll.length === 5 && name.length > 6 && password.length > 8 && file) {
      const formData = new FormData();

      formData.append("roll", roll);
      formData.append("name", name);
      formData.append("password", password);
      formData.append("file", file);

      try {
        axios
          .post("http://localhost:3001/register", formData)
          .then((response) => {
            console.log(response.data);

            // Now Routing to otp:id
            let url = "/otp/";
            url += response.data;

            navigate(url);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Some details are inappropriate");
    }
  }

  return (
    <div>
      <h1 id="heading_text">Please Register here !!!</h1>
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
          type="text"
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <input
          className="inputbox"
          type="password"
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <input
          className="inputbox"
          type="file"
          placeholder="Upload file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br></br>
      </div>
      <div className="submitdiv" onClick={handleSubmit}>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Register;
