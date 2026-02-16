import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427"
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        ...styles.container,
        backgroundImage: `url(${images[currentIndex]})`
      }}
    >
      <div style={styles.overlay}>
        <h1>Welcome To Our Hotel</h1>
        <p>Luxury Rooms | Best Service | Affordable Price</p>
        <button
          style={styles.button}
          onClick={() => navigate("/booknow")}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin:"-10px",
    height: "85vh",
    width: "103%",
    marginTop:"-22px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "background-image 1s ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflowX: "hidden"
  },
  overlay: {
    //backgroundColor: "rgba(0,0,0,0.5)",
    padding: "40px",
    borderRadius: "10px",
    textAlign: "center",
    color: "white"
  },
  button: {
    marginTop: "15px",
    padding: "12px 25px",
    fontSize: "16px",
    backgroundColor: "#ff9800",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Home;