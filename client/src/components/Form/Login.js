import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./Form.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      alert("Please fill in all the details");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Invalid credentials");
        return;
      }

      // ✅ Save token + user in localStorage
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);

      // 🔥 Trigger custom auth event for Navbar
      window.dispatchEvent(new Event("userLoggedIn"));

      setLoading(false);
      setTimeout(() => {
        setLoading(true);
        navigate("/");
      }, 1500);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  if (!loading) return <Loading />;

  return (
    <section className="form-bg">
      <div className="f-wrapper mx-auto">
        <div className="formCard">
          <h1 className="mb-3 mt-5 text-center">Sign In</h1>
          <form className="form-wrap" onSubmit={handleSubmit}>
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
            </div>
            <button type="submit">Sign In</button>
            <div className="col-12 text-center member">
              <a href="/signup">Don’t have an account?</a>
              <Link to="/signup" className="push-signin">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
