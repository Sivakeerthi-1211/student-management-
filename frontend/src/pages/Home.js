import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{
      textAlign: "center",
      backgroundImage: "url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1 style={{ fontSize: "2.5em", marginBottom: "30px", backgroundColor: "rgba(0,0,0,0.5)", padding: "10px 20px", borderRadius: "10px" }}>
        Welcome to Student Team Members Management
      </h1>
      <div>
        <Link to="/add"><button style={styles.button}>Add Member</button></Link>
        <Link to="/members"><button style={styles.button}>View Members</button></Link>
      </div>
    </div>
  );
}

const styles = {
  button: {
    margin: "10px",
    padding: "12px 24px",
    fontSize: "1em",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  }
};
