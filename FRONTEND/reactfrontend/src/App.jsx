import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import BrandPage from "./pages/BrandPage";
import BikeList from "./components/BikeList";
import BikeForm from "./components/BikeForm";
import BikeDetail from "./components/BikeDetail";

const App = () => {
  const appStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f6f8",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  };

  return (
    <Router>
      <div style={appStyle}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bikes" element={<BikeList />} />
          <Route path="/bikes/new" element={<BikeForm />} />
          <Route path="/bikes/:id/edit" element={<BikeForm editMode />} />
          <Route path="/bikes/:id" element={<BikeDetail />} />
          <Route path="/brands" element={<BrandPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
