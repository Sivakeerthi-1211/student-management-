import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddMember() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    roll: "",
    email: "",
    phone: "",
    department: "",
    about: "",
    image: null
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFile = e => setForm({ ...form, image: e.target.files[0] });

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    for (let key in form) data.append(key, form[key]);
    try {
      await axios.post("http://localhost:5000/api/members", data);
      alert("Member added successfully!");
      navigate("/"); // Redirect to home page after adding member
    } catch (err) {
      alert("Error adding member.");
    }
  };

  return (
    <div style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
      backgroundSize: "cover",
      minHeight: "100vh",
      padding: "5vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        padding: "30px",
        borderRadius: "15px",
        width: "450px",
        boxShadow: "0 0 20px rgba(0,0,0,0.3)"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add New Team Member</h2>
        <input name="name" placeholder="Full Name" onChange={handleChange} required style={styles.input} />
        <input name="roll" placeholder="Roll Number / Reg No." onChange={handleChange} required style={styles.input} />
        <input name="email" placeholder="Email ID" onChange={handleChange} required style={styles.input} />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} required style={styles.input} />
        <input name="department" placeholder="Department" onChange={handleChange} required style={styles.input} />
        <textarea name="about" placeholder="About / Bio" rows="4" onChange={handleChange} style={styles.input}></textarea>
        <input type="file" name="image" onChange={handleFile} required style={styles.input} />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  input: {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    border: "1px solid #ccc",
    borderRadius: "6px"
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    fontSize: "1em",
    cursor: "pointer"
  }
};
