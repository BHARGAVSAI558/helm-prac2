import React from "react";

const BrandPage = () => {
  const brands = ["Yamaha", "Royal Enfield", "KTM", "Suzuki", "Honda", "BMW"];

  const containerStyle = { textAlign: "center", padding: "40px" };
  const listStyle = { listStyleType: "none", padding: 0 };
  const itemStyle = {
    backgroundColor: "white",
    margin: "10px auto",
    padding: "10px",
    width: "200px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
  };

  return (
    <div style={containerStyle}>
      <h1>🏍️ Popular Bike Brands</h1>
      <ul style={listStyle}>
        {brands.map((brand, index) => (
          <li key={index} style={itemStyle}>{brand}</li>
        ))}
      </ul>
    </div>
  );
};

export default BrandPage;
