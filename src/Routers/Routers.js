import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Views/Home/Home";
import { AddProduct } from "../Views/Product/AddProduct";
import { Auth } from "../Views/Auth/Auth";
import { Login } from "../Views/Auth/Login";
import { Register } from "../Views/Auth/Register";
import { HomeSlider } from "../Assets/Components/HomeSlider/HomeSlider";
import { Profil } from "../Views/User/Profil";
import { CardHomePage } from "../Assets/Components/CardHomePage/CardHomePage";
import { NavbarAfterLogin } from "../Assets/Components/NavBar/NavbarAfterLogin";

import { Dummy } from "../Views/Dummy";

import { DetailProduct } from "../Views/Product/Detail-Product/DetailProduct";

import { InfoPenawaran } from "../Views/InfoPenawaran/InfoPenawaran";

import { NavbarComponent } from "../Assets/Components/NavBar/NavbarComponent";
import { NavbarBeforeLogin } from "../Assets/Components/NavBar/NavbarBeforeLogin";



export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cobahomeslider" element={<HomeSlider />} />
      <Route path="/coba" element={<NavbarBeforeLogin/>} />

      {/* Auth */}
      <Route path="/auth" element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/profil" element={<Profil />} />

      {/* Product */}
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/dummy" element={<Dummy />} />
      
      <Route path="/detail-product" element={<DetailProduct/>} />

      <Route path="/info-penawaran" element={<InfoPenawaran/>} />

    </Routes>
  );
};
