import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      <h2>Contact Us</h2>

      <form
        style={{
          width: "300px",
          margin: "20px auto",
        }}
      >
        <input
          type="text"
          placeholder="Enter Name"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="email"
          placeholder="Enter Email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <textarea
          placeholder="Enter Message"
          rows="4"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        ></textarea>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;