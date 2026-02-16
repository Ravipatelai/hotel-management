import React from "react";
import "../css/Service.css";

const Service = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Hotel Services</h1>

      <div className="services-grid">

        <div className="service-card">
          <h3>Luxury Rooms</h3>
          <p>Experience premium comfort with fully furnished AC rooms, king-size beds, and modern interiors.</p>
        </div>

        <div className="service-card">
          <h3>Free Wi-Fi</h3>
          <p>High-speed internet available in all rooms and public areas.</p>
        </div>

        <div className="service-card">
          <h3>24/7 Room Service</h3>
          <p>Order food and services anytime with our round-the-clock support.</p>
        </div>

        <div className="service-card">
          <h3>Restaurant & Dining</h3>
          <p>Multi-cuisine restaurant offering delicious breakfast, lunch, and dinner.</p>
        </div>

        <div className="service-card">
          <h3>Swimming Pool</h3>
          <p>Relax and refresh in our clean and well-maintained swimming pool.</p>
        </div>

        <div className="service-card">
          <h3>Airport Pickup</h3>
          <p>Convenient airport pickup and drop service available on request.</p>
        </div>

      </div>
    </div>
  );
};

export default Service;