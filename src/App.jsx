import React from "react";
import MainLayout from "./Layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Courses from "./Pages/Courses/Courses";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/courses" element={<Courses />}/>
      </Routes>
    </MainLayout>
  )
};
export default App;
