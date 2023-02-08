import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Relays from "../pages/Relays";
import Sensors from "../pages/Sensors";
import Settings from "../pages/Settings";

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/dashboard" element={<Dashboard />} />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/relays" element={<Relays />} />
        <Route path="/sensors" element={<Sensors />} />
        <Route path="/settings" element={<Settings />} />
     </Routes>
  );
};

export default Router;