import React from "react";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <h2>My logo</h2>
      <nav style={{ display: "flex", gap: "30px" }}>
        <span onClick={() => navigate("/")}>Home</span>
        <span onClick={() => navigate("/contacts")}>Contacts</span>
        <span onClick={() => navigate("/weather")}>Weather</span>
      </nav>
    </div>
  );
};

export default TopBar;
