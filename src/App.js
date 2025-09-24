import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Timesheet from "./components/Timesheet/Timesheet.jsx";
import EmployeeDetail from "./components/employeeDetails/EmployeeDetail.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Timesheet />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
