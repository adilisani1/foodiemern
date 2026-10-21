import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import "./Form.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      toast.warn("Please fill in all the details");
      return;
    }

    try {
      const API_BASE_URL = process.env.REACT_APP_API_URL;
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || data.error || "Invalid credentials");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);

      window.dispatchEvent(new Event("userLoggedIn"));

      toast.success("Logged in successfully!");

      setLoading(false);
      setTimeout(() => {
        setLoading(true);
        navigate("/");
      }, 1500);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (!loading) return <Loading />;

  return (
    <section className="form-bg">
      <div className="form-container">
     
        {/* Left Side - Form */}
        <div className="form-content-side">
          <button type="button" className="back-button" onClick={() => navigate("/")}>
            <ArrowBackIcon />
            <span>Back</span>
          </button>
          <div className="formCard">
            <div className="form-header">
              <img
                src="/images/foood-logo-black.png"
                alt="Foodie"
                className="form-logo"
              />
              <h1>Sign In</h1>
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
                <label htmlFor="password">Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </button>
                </div>
              </div>

              <button type="submit" className="form-submit-btn">Sign In</button>
              
              <div className="form-footer">
                <span>Don't have an account?</span>
                <Link to="/signup" className="form-link">
                  Sign Up
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
        <div className="form-hero-side">
          <div className="form-hero-shade" aria-hidden="true" />
          <div className="form-hero-floaters" aria-hidden="true">
            <img src="/images/pizza-r.png" alt="" className="form-floater form-floater--1" />
            <img src="/images/fries-r.png" alt="" className="form-floater form-floater--2" />
            <img src="/images/noodle-r.png" alt="" className="form-floater form-floater--3" />
            <img src="/images/desert-r.png" alt="" className="form-floater form-floater--4" />
            <img src="/images/drinks-r.png" alt="" className="form-floater form-floater--5" />
          </div>
          <img
            src="/images/burger-3d.png"
            alt=""
            className="form-hero-img form-hero-img--burger"
          />
          <div className="form-hero-copy">
            <img
              src="/images/foood-logo.png"
              alt="Street Food"
              className="form-hero-logo"
            />
            <p className="form-hero-tagline">
              Fresh street flavors, ready when you are.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Login;
