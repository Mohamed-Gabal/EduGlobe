import React from "react";
import MainLayout from "./Layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </MainLayout>
  )
};
export default App;
