import { Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./pages/home/Home";
import { CariMobil } from "./pages/carimobil/CariMobil";
import Detailmobil from "./pages/detailmobil/Detailmobil";


export default function App() {

  return (

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/carimobil" element={<CariMobil/>}/>
          <Route path="/detailmobil" element={<Detailmobil/>}/>
      </Routes>
  );
}
