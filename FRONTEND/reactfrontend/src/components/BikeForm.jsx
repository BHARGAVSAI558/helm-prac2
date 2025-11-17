import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/bikes`;

const BikeForm = ({ editMode }) => {
  const [bike, setBike] = useState({ name: "", brand: "", price: "" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (editMode && id) {
      setLoading(true);
      axios
        .get(`${API_URL}/${id}`)
        .then((res) => setBike(res.data))
        .catch(() => setErr("Failed to load bike"))
        .finally(() => setLoading(false));
    }
  }, [editMode, id]);

  const handleChange = (e) => setBike({ ...bike, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("");
    if (!bike.name || !bike.brand || bike.price === "") {
      setErr("All fields are required");
      return;
    }
    setLoading(true);
    const req = editMode ? axios.put(`${API_URL}/${id}`, bike) : axios.post(API_URL, bike);

    req
      .then((res) => navigate(`/bikes/${res.data.id}`))
      .catch(() => setErr("Save failed"))
      .finally(() => setLoading(false));
  };

  const container = { display: "flex", justifyContent: "center", padding: 28 };
  const formStyle = { width: 360, background: "#fff", padding: 20, borderRadius: 10, boxShadow: "0 6px 12px rgba(0,0,0,0.06)" };
  const input = { width: "100%", padding: 10, margin: "8px 0", borderRadius: 6, border: "1px solid #ccc" };
  const btnPrimary = { width: "100%", padding: 10, marginTop: 12, background: "#007bff", color: "#fff", border: "none", borderRadius: 6 };
  const btnSecondary = { width: "100%", padding: 10, marginTop: 8, background: "#6c757d", color: "#fff", border: "none", borderRadius: 6 };

  return (
    <div style={container}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h3 style={{ textAlign: "center", marginTop: 4 }}>{editMode ? "Edit Bike" : "Add New Bike"}</h3>
        {err && <p style={{ color: "red" }}>{err}</p>}
        {loading && <p>Loading...</p>}

        <input style={input} name="name" placeholder="Bike name" value={bike.name} onChange={handleChange} />
        <input style={input} name="brand" placeholder="Brand" value={bike.brand} onChange={handleChange} />
        <input style={input} name="price" placeholder="Price" value={bike.price} onChange={handleChange} />

        <button type="submit" style={btnPrimary} disabled={loading}>
          {editMode ? "Save Changes" : "Add Bike"}
        </button>
        <button type="button" style={btnSecondary} onClick={() => navigate("/bikes")}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default BikeForm;
