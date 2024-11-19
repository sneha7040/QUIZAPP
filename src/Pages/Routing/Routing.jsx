import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Cms/Home/Home";
import Register from "../Auth/Register/Register";
import Login from "../Auth/Login/Login";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import Food from "../Cms/Food/Food";
import Webdevfrontend from "../Cms/Webdevfrontend/Webdevfrontend";

import Environ from "../Cms/Environ/Environ";
import Travel from "../Cms/Travel/Travel";
import Lit from "../Cms/Lit/Lit";
import Database from "../Cms/Database/Database";
import Scandtech from "../Cms/Scandtech/Scantech";

import Sportsitem from "../Cms/Sprorts/Sportsitem";
import Webdevbackitem from "../Cms/webdevback/Webdevbackitem";

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/food" element={<Food />} />
          <Route path="/webdevfront" element={<Webdevfrontend />} />
          <Route path="/webdevback" element={<Webdevbackitem />} />
          <Route path="/sports" element={<Sportsitem />} />
          <Route path="/environ" element={<Environ />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/lit" element={<Lit />} />
          <Route path="/database" element={<Database />} />
          <Route path="/scantech" element={<Scandtech />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Routing;
