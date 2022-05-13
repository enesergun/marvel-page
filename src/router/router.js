import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CharacterDetail from "../pages/CharacterDetail";



function Router() {


  return (
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="character/:id" element={<CharacterDetail />} />

      
    </Routes>
  )
}


export default Router;