import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import ChooseYourCharacter from '../pages/ChooseYourCharacter';
import Dashboard from "../pages/Dashboard";
import Overview from "../pages/Overview";
import Projects from "../pages/Projects";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ChooseYourCharacter />} />

      <Route path="/dashboard" element={<Dashboard />} >
                <Route index element={<Navigate to="overview" replace />}/>
                <Route path="overview" element={<Overview />} />
                <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}