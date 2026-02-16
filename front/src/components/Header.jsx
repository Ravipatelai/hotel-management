import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div style={styles.header}>
        <h2 style={styles.logo}>
          <Link to="/home" style={styles.link}>Home</Link>
        </h2>

        <div style={styles.navLinks}>
          <Link to="/service" style={styles.link}>Service</Link>
          <Link to="/booknow" style={styles.link}>Book Now</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
          <Link to="/register" style={styles.link}>Login / Register</Link>
          <Link to="/admin" style={styles.link}>Admin</Link>
        </div>
      </div>

      {/* Spacer to prevent content hiding behind fixed header */}
      <div style={{ height: "70px" }}></div>
    </>
  );
};

const styles = {
  header: {
    position: "fixed",
   
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "black",
    color: "white",
    zIndex: 1000,
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default Header;