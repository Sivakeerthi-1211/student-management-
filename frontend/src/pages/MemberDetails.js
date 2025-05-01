import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function MemberDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/api/members/" + id).then(res => setMember(res.data));
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      await axios.delete("http://localhost:5000/api/members/" + id);
      alert("Member deleted.");
      navigate("/members");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundImage: "url('https://images.unsplash.com/photo-1544717302-de2939b7ef71')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        padding: "25px",
        borderRadius: "10px",
        width: "350px",
        color: "white"
      }}>
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <img
            src={"http://localhost:5000/uploads/" + member.image}
            alt="Profile"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "8px"
            }}
          />
        </div>
        <p><strong>Name</strong>        : {member.name || "N/A"}</p>
        <p><strong>Roll Number</strong> : {member.roll || "N/A"}</p>
        <p><strong>Email</strong>       : {member.email || "N/A"}</p>
        <p><strong>Phone</strong>       : {member.phone || "N/A"}</p>
        <p><strong>Department</strong>  : {member.department || "N/A"}</p>
        <p><strong>About</strong>       : {member.about || "N/A"}</p>
        <button onClick={handleDelete} style={{
          marginTop: "20px",
          padding: "10px",
          width: "100%",
          backgroundColor: "#dc3545",
          border: "none",
          color: "white",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Delete Member
        </button>
      </div>
    </div>
  );
}
