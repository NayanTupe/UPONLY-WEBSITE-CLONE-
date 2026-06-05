import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./BookDemo.css";

const BookDemo = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    teamSize: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_mfdcerv",       // replace with your EmailJS service ID
        "template_ufbn2vm",      // replace with your EmailJS template ID
        form,
        "betkM5wJjpPcjw91O"        // replace with your EmailJS public key
      )
      .then(
        (res) => {
          alert("Demo request sent successfully!");
          setForm({
            fullName: "",
            email: "",
            phone: "",
            company: "",
            industry: "",
            teamSize: "",
            message: "",
          });
        },
        (err) => {
          alert("Failed to send demo request. Please try again.");
          console.error(err);
        }
      );
  };

  return (
    <section id="book-demo" className="book-demo-section">
      <div className="book-demo-bg"></div>

      <div className="book-demo-container">
        <div className="demo-left">
          <div className="demo-pill">● BOOK A DEMO</div>

          <h2>
            Stop Tracking. <br />
            Start Concluding.
          </h2>

          <p>
            Join 30,000+ sales professionals who capture every activity,
            measure real efficiency, and conclude deals faster with SMOS.
          </p>

          <a href="tel:+919152110404" className="sales-link">
            ☎ Talk to Sales: +91 9152110404
          </a>
        </div>

        <form className="demo-form" onSubmit={handleSubmit}>
          <h3>Request a Demo</h3>

          <div className="form-grid">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name *"
              value={form.fullName}
              required
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Work Email *"
              value={form.email}
              required
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={form.phone}
              required
              onChange={handleChange}
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
            />
            <select
              name="industry"
              required
              value={form.industry}
              onChange={handleChange}
            >
              <option value="">Industry</option>
              <option>Real Estate</option>
              <option>BFSI — Banking</option>
              <option>BFSI — Insurance</option>
              <option>BFSI — NBFC</option>
              <option>BFSI — Broking</option>
              <option>Wealth Management</option>
              <option>EdTech</option>
              <option>HealthTech</option>
              <option>SaaS / IT Services</option>
              <option>Manufacturing</option>
              <option>Retail & D2C</option>
              <option>Logistics</option>
              <option>Pharma</option>
              <option>Telecom</option>
              <option>Automotive</option>
              <option>Other</option>
            </select>

            <select
              name="teamSize"
              required
              value={form.teamSize}
              onChange={handleChange}
            >
              <option value="">Team Size</option>
              <option>1–10 employees</option>
              <option>11–50 employees</option>
              <option>51–200 employees</option>
              <option>201–500 employees</option>
              <option>501–1000 employees</option>
              <option>1000+ employees</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Tell us about your sales goals..."
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Submit Demo Request →</button>
        </form>
      </div>
    </section>
  );
};

export default BookDemo;