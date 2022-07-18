import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./pages/home/Home";
import { CariMobil } from "./pages/carimobil/CariMobil";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/carimobil" element={<CariMobil/>}/>
          
      </Routes>
    </BrowserRouter>

  );
}
