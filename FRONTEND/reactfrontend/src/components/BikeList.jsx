import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/bikes`;

const BikeList = () => {
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(API_URL)
      .then((res) => {
        setBikes(res.data);
        setFilteredBikes(res.data);
      })
      .catch(() => setErr("Failed to fetch bikes"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const value = search.toLowerCase().trim();
    setFilteredBikes(
      !value
        ? bikes
        : bikes.filter(
            (bike) =>
              bike.id.toString().includes(value) ||
              bike.name.toLowerCase().includes(value) ||
              bike.brand.toLowerCase().includes(value)
          )
    );
  }, [search, bikes]);

  const handleDelete = (id) => {
    if (!window.confirm("Delete this bike?")) return;
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => setBikes((prev) => prev.filter((b) => b.id !== id)))
      .catch(() => alert("Delete failed"));
  };

  const container = { textAlign: "center", padding: 20, backgroundColor: "#f1f5f9", minHeight: "80vh" };
  const tableStyle = { width: "90%", margin: "20px auto", borderCollapse: "collapse", background: "#fff", boxShadow: "0px 6px 12px rgba(0,0,0,0.1)", borderRadius: 10, overflow: "hidden" };
  const thTd = { borderBottom: "1px solid #ddd", padding: 12, textAlign: "center" };
  const th = { backgroundColor: "#1e40af", color: "white" };
  const btn = { margin: "0 5px", padding: "6px 12px", border: "none", borderRadius: 6, cursor: "pointer" };
  const searchStyle = { padding: 8, width: "250px", borderRadius: 6, border: "1px solid #ccc", marginBottom: 20 };

  return (
    <div style={container}>
      <h2 style={{ color: "#1e40af" }}>All Bikes</h2>

      <input
        type="text"
        placeholder="Search by ID, name, or brand..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={searchStyle}
      />

      {err && <p style={{ color: "red" }}>{err}</p>}
      {loading && <p>Loading bikes...</p>}
      {!loading && filteredBikes.length === 0 && <p>No bikes found.</p>}

      {filteredBikes.length > 0 && (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={{ ...thTd, ...th }}>ID</th>
              <th style={{ ...thTd, ...th }}>Name</th>
              <th style={{ ...thTd, ...th }}>Brand</th>
              <th style={{ ...thTd, ...th }}>Price</th>
              <th style={{ ...thTd, ...th }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBikes.map((bike) => (
              <tr key={bike.id}>
                <td style={thTd}>{bike.id}</td>
                <td style={thTd}>{bike.name}</td>
                <td style={thTd}>{bike.brand}</td>
                <td style={thTd}>₹{bike.price}</td>
                <td style={thTd}>
                  <Link to={`/bikes/${bike.id}`} style={{ ...btn, backgroundColor: "#17a2b8", color: "white" }}>
                    View
                  </Link>
                  <Link to={`/bikes/${bike.id}/edit`} style={{ ...btn, backgroundColor: "#ffc107", color: "#111" }}>
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(bike.id)} style={{ ...btn, backgroundColor: "#dc3545", color: "white" }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Link to="/bikes/new">
        <button style={{ ...btn, marginTop: 20, backgroundColor: "#007bff", color: "#fff" }}>+ Add Bike</button>
      </Link>
    </div>
  );
};

export default BikeList;
