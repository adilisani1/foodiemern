import React, { useState } from "react";
import "./Contact.css";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(true);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, email, message } = formData;

    if (!name || !phone || !email || !message) {
      toast.warn("Please fill in all the details");
      return;
    }

    try {
      const API_BASE_URL = process.env.REACT_APP_API_URL;
      const res = await fetch(`${API_BASE_URL}/api/contact-us`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: name, email, message }),
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || data.error || "Something went wrong");
        return;
      }

      toast.success("Message sent successfully!");
      setLoading(false);
      setTimeout(() => {
        setLoading(true);
        navigate("/");
      }, 3000);
    } catch (err) {
      console.error("Contact submit error:", err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (!loading) {
    return <Loading />;
  }

  return (
    <div className="contact-page-wrapper">
      <div className="contact-main-container">
        <div className="contact-header">
          <p className="contact-eyebrow">Say hello</p>
          <h1 className="contact-main-title">We're here to help</h1>
          <p className="contact-intro">
            Questions about an order, catering, or feedback? Reach us by phone,
            email, or the form — we usually reply within a day.
          </p>
        </div>

        <div className="contact-content-wrapper">
          <div className="contact-form-section">
            <h2 className="section-title">Send a message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                />
              </div>
              <button type="submit" className="contact-submit-btn">
                Send message
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <div className="contact-info-card">
              <h2 className="section-title">Contact info</h2>
              <div className="contact-info-item">
                <PhoneIcon className="contact-icon" />
                <div className="contact-info-text">
                  <span className="contact-info-label">Phone</span>
                  <span className="contact-info-value">770-380-0463</span>
                </div>
              </div>
              <div className="contact-info-item">
                <EmailIcon className="contact-icon" />
                <div className="contact-info-text">
                  <span className="contact-info-label">Email</span>
                  <span className="contact-info-value">
                    office@thehouseofharts.com
                  </span>
                </div>
              </div>
              <div className="contact-info-item">
                <LocationOnIcon className="contact-icon" />
                <div className="contact-info-text">
                  <span className="contact-info-label">Address</span>
                  <span className="contact-info-value">
                    9000 Main Street, Bldg 3, Suite 200, Woodstock, GA 30188
                  </span>
                </div>
              </div>
            </div>

            <div className="business-hours-card">
              <h2 className="section-title">Hours</h2>
              <div className="business-hours-grid">
                <div className="hours-item">
                  <span className="hours-day">Mon – Fri</span>
                  <span className="hours-time">9:00 am – 5:00 pm</span>
                </div>
                <div className="hours-item">
                  <span className="hours-day">Saturday</span>
                  <span className="hours-time">9:00 am – 4:00 pm</span>
                </div>
                <div className="hours-item">
                  <span className="hours-day">Sunday</span>
                  <span className="hours-time">9:00 am – 3:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
