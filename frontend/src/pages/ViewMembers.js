import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ViewMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/members").then(res => setMembers(res.data));
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      backgroundImage: "url('https://images.unsplash.com/photo-1506784365847-bbad939e9335')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "30px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "30px"
    }}>
      {members.map(m => (
        <div key={m._id} style={{
          width: "300px",
          height: "300px",
          backgroundColor: "rgba(255, 255, 255, 0.96)",
          borderRadius: "14px",
          padding: "18px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          fontSize: "16px"
        }}>
          {m.image && (
            <img
              src={"http://localhost:5000/uploads/" + m.image}
              alt="Profile"
              width="100"
              height="100"
              style={{ borderRadius: "50%", objectFit: "cover", marginTop: "6px" }}
            />
          )}
          <div>
            {m.name && <p><strong>Name</strong>: {m.name}</p>}
            {m.email && <p><strong>Email</strong>: {m.email}</p>}
          </div>
          <Link to={"/members/" + m._id}>
            <button style={{
              marginBottom: "10px",
              padding: "8px 16px",
              fontSize: "14px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#007bff",
              color: "white",
              cursor: "pointer"
            }}>
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
