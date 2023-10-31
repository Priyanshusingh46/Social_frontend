import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../src/App";
import OtpVerification from '../src/Components/OptVerification';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/otp/:id" element={<OtpVerification />}></Route>
      </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
