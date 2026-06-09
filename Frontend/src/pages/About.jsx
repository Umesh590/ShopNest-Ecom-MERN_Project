import React from "react";

const About = () => {
  const containerStyle = {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "40px",
    background: "#18181b",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.05)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
    color: "#fff",
  };

  const cardStyle = {
    background: "#27272a",
    padding: "20px",
    borderRadius: "12px",
    marginTop: "20px",
  };

  return (
    <div style={containerStyle}>
      <h1
        style={{
          textAlign: "center",
          color: "#f97316",
          marginBottom: "20px",
        }}
      >
        About ShopNest
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#a1a1aa",
          fontSize: "1.1rem",
          lineHeight: "1.8",
        }}
      >
        Welcome to <strong>ShopNest</strong>, your one-stop destination for
        discovering quality products across multiple categories. Our goal is to
        provide a seamless and user-friendly shopping experience with secure
        authentication, easy product browsing, and efficient order management.
      </p>

      <div style={cardStyle}>
        <h2 style={{ color: "#f97316" }}>Our Mission</h2>
        <p style={{ color: "#d4d4d8", lineHeight: "1.7" }}>
          To make online shopping simple, fast, and accessible for everyone by
          providing a modern e-commerce platform built with the latest web
          technologies.
        </p>
      </div>

      <div style={cardStyle}>
        <h2 style={{ color: "#f97316" }}>What We Offer</h2>
        <ul style={{ color: "#d4d4d8", lineHeight: "2" }}>
          <li>Wide range of products across multiple categories</li>
          <li>Fast product search and category filtering</li>
          <li>Secure user authentication and email verification</li>
          <li>Easy cart and checkout experience</li>
          <li>Order tracking and management</li>
          <li>Responsive design for desktop and mobile devices</li>
        </ul>
      </div>

      <div style={cardStyle}>
        <h2 style={{ color: "#f97316" }}>Technologies Used</h2>
        <p style={{ color: "#d4d4d8", lineHeight: "1.7" }}>
          ShopNest is built using the MERN Stack:
          <br />
          React.js • Node.js • Express.js • MongoDB • JWT Authentication •
          Cloudinary Image Uploads
        </p>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2 style={{ color: "#f97316" }}>Thank You for Visiting ShopNest ❤️</h2>
        <p style={{ color: "#a1a1aa" }}>
          We are committed to delivering a smooth and enjoyable online shopping
          experience.
        </p>
      </div>
    </div>
  );
};

export default About;