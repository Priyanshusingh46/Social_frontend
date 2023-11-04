import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from "../src/Components/Register_page/Register";
import OtpVerification from '../src/Components/OtpVerification_page/OptVerification';
import Login from '../src/Components/Login_page/Login';
import Home from "../src/Components/Home_page/Home";
import ForgetPassword from "../src/Components/Forget_password_page/Forgetpassword"
import NewPassword from './Components/Forget_password_page/Newpassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />}></Route>
      <Route path="/otp/:id" element={<OtpVerification />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path ="/forgetpassword" element={<ForgetPassword />}></Route>
      <Route path ="/newpassword/:id" element={<NewPassword />}></Route>
      </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
