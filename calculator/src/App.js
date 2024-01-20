import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./Components/CalculatorComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;
