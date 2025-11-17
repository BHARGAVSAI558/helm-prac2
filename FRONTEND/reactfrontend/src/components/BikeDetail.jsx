import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/bikes`;

const BikeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bike, setBike] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => setBike(res.data))
      .catch(() => setErr("Bike not found"));
  }, [id]);

  const handleDelete = () => {
    if (!window.confirm("Delete this bike?")) return;
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => navigate("/bikes"))
      .catch(() => alert("Delete failed"));
  };

  if (err) return <p style={{ textAlign: "center", marginTop: 40 }}>{err}</p>;
  if (!bike) return <p style={{ textAlign: "center", marginTop: 40 }}>Loading...</p>;

  const card = {
    background: "#fff",
    padding: 20,
    borderRadius: 10,
    width: 300,
    margin: "40px auto",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };
  const btn = { margin: "5px", padding: "8px 12px", borderRadius: 6, border: "none", cursor: "pointer" };

  return (
    <div style={card}>
      <h2>{bike.name}</h2>
      <p><strong>Brand:</strong> {bike.brand}</p>
      <p><strong>Price:</strong> ₹{bike.price}</p>

      <div>
        <Link to={`/bikes/${id}/edit`}>
          <button style={{ ...btn, background: "#ffc107" }}>Edit</button>
        </Link>
        <button onClick={handleDelete} style={{ ...btn, background: "#dc3545", color: "#fff" }}>
          Delete
        </button>
        <button onClick={() => navigate("/bikes")} style={{ ...btn, background: "#6c757d", color: "#fff" }}>
          Back
        </button>
      </div>
    </div>
  );
};

export default BikeDetail;
