import React, { useState } from "react";
import "./Form.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      toast.warn("Please fill in all the details.");
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.warn(
        "Password must be at least 6 characters long and include both letters and numbers."
      );
      return;
    }

    try {
      const API_BASE_URL = process.env.REACT_APP_API_URL;
      const res = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || data.error || "Could not create account.");
        return;
      }

      toast.success("Account created! Redirecting to login...");
      setLoading(false);
      setTimeout(() => {
        setLoading(true);
        navigate("/login");
      }, 3000);
    } catch (err) {
      console.error("Signup error:", err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (!loading) return <Loading />;

  return (
    <section className="form-bg">
      <div className="form-container">
        
        {/* Left Side - Form */}
        <div className="form-content-side">
          <button className="back-button" onClick={() => navigate("/")}>
            <ArrowBackIcon />
          </button>
          <div className="formCard">
            <div className="form-header">
              <div className="form-icon"></div>
              <h1>Create an account</h1>
            </div>
            
            <form className="form-wrap" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="username">Full Name</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create your password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </button>
                </div>
                <div className="form-text">
                  Password must be at least 6 characters long and include both
                  letters and numbers.
                </div>
              </div>

              <button type="submit" className="form-submit-btn">Create an account</button>
              
              <div className="form-footer">
                <span>Already have an account?</span>
                <Link to="/login" className="form-link">
                  Login
                </Link>
              </div>
            </form>

            <div className="social-icons">
              <FacebookIcon className="social-icon" />
              <TwitterIcon className="social-icon" />
              <InstagramIcon className="social-icon" />
              <LinkedInIcon className="social-icon" />
            </div>
          </div>
        </div>
        {/* Right Side - Hero Background */}
        <div className="form-hero-side"></div>

      </div>
    </section>
  );
};

export default Signup;
