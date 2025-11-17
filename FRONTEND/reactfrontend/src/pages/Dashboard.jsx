import React from "react";

const Dashboard = () => {
  const containerStyle = {
    padding: "40px 20px",
    textAlign: "center",
    minHeight: "80vh",
    backgroundColor: "#f1f5f9",  
  };

  const cardStyle = {
    backgroundColor: "white",
    padding: "30px 20px",
    margin: "20px auto",
    borderRadius: "12px",
    width: "80%",
    maxWidth: "700px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.2s",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: "#1e40af", marginBottom: 20 }}>   Bike Dashboard</h1>
      <div
        style={cardStyle}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
      >
        <p style={{ fontSize: "1.1rem", marginBottom: 10 }}>
          Welcome to the Bike Management 🏍️...!
        </p>
        
      </div>
    </div>
  );
};

export default Dashboard;
