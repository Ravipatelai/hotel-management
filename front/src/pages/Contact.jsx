import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Contact Our Hotel</h1>

        {/* Contact Info Section */}
        <div style={styles.infoSection}>
          <div style={styles.card}>
            <h3>📞 Phone</h3>
            <p>+91 9876543210</p>
          </div>

          <div style={styles.card}>
            <h3>📧 Email</h3>
            <p>support@hotel.com</p>
          </div>

          <div style={styles.card}>
            <h3>📍 Address</h3>
            <p>MG Road, Indore, India</p>
          </div>

          <div style={styles.card}>
            <h3>💬 WhatsApp</h3>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Chat Now
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div style={styles.formSection}>
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              style={styles.textarea}
            />
            <button type="submit" style={styles.button}>
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div style={styles.mapSection}>
          <h2>Find Us Here</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2269547127444!2d75.8683953!3d22.7198043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0c40bc00d1%3A0x86f6c5653d2d910a!2sMahatma%20Gandhi%20Rd%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1771241729628!5m2!1sen!2sin" width="600" height="450"  referrerpolicy="no-referrer-when-downgrade" style={{ border:'1px' }}></iframe>
        </div>

        {/* Social Media */}
        <div style={styles.socialSection}>
          <h3>Follow Us</h3>
          <div style={styles.socialLinks}>
            <a href="#" style={styles.link}>Facebook</a>
            <a href="#" style={styles.link}>Instagram</a>
            <a href="#" style={styles.link}>Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    
    background: "#f4f6f9",
    padding: "40px 0"
  },
  container: {
    width: "85%",
    margin: "auto",
    textAlign: "center"
  },
  title: {
    marginBottom: "30px"
  },
  infoSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "40px"
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
  },
  formSection: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    marginBottom: "40px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  textarea: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minHeight: "100px"
  },
  button: {
    padding: "10px",
    background: "#2a5298",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  mapSection: {
    marginBottom: "40px"
  },
  socialSection: {
    marginBottom: "20px"
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  },
  link: {
    textDecoration: "none",
    color: "#2a5298",
    fontWeight: "bold"
  }
};

export default Contact;