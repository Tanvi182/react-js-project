import React from "react";

const Slider = () => {
  return (
    <section
      style={{
        background: "#007bff",
        color: "#fff",
        textAlign: "center",
        padding: "100px 20px",
      }}
    >
      <h1>Welcome To My Website</h1>
      <p>Learn React Component Based Design</p>

      <button
        style={{
          padding: "10px 20px",
          marginTop: "15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </section>
  );
};

export default Slider;