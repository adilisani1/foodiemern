import React, { useState } from "react";
import "./Form.css";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      alert("Please fill in all the details.");
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 6 characters long and include both letters and numbers."
      );
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (data.message === "User already exists.") {
        alert("User already exists.");
      } else {
        setLoading(false);
        setTimeout(() => {
          setLoading(true);
          navigate("/login");
        }, 3000);
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong.");
    }
  };

  if (!loading) return <Loading />;

  return (
    <section className="form-bg">
      <div className="f-wrapper mx-auto">
        <div className="formCard">
          <h1 className="mb-3 mt-5 text-center">Sign Up</h1>
          <form className="form-wrap" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label>Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
              />
              <div className="form-text">
                Password must be at least 6 characters long and include both
                letters and numbers.
              </div>
            </div>
            <button type="submit">Sign Up</button>
            <div className="col-12 text-center member">
              <span>Already a member?</span>
              <Link to="/login" className="push-signin">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
