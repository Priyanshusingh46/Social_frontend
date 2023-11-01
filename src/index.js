import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from "../src/App";
import OtpVerification from '../src/Components/OptVerification';
import Login from './Components/Login';
import Home from "./Components/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />}></Route>
      <Route path="/otp/:id" element={<OtpVerification />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
      </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
