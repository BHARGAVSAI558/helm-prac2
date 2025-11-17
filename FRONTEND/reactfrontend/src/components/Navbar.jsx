import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    backgroundColor: "#1e40af", // Darker blue
    padding: "12px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    margin: "0 12px",
    fontWeight: "600",
    padding: "6px 10px",
    borderRadius: "6px",
    transition: "0.2s",
  };

  const linkHover = {
    backgroundColor: "#2563eb",
  };

  return (
    <nav style={navStyle}>
      <h2 style={{ margin: 0, fontSize: "1.5rem" }}> Bike Management</h2>
      <div>
        <Link style={linkStyle} to="/">Dashboard</Link>
        <Link style={linkStyle} to="/bikes">Bikes</Link>
        <Link style={linkStyle} to="/bikes/new">Add Bike</Link>
        <Link style={linkStyle} to="/brands">Brands</Link>
      </div>
    </nav>
  );
};

export default Navbar;
