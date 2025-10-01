import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import Cart from "../../pages/Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = ({
  showNav,
  setShowNav,
  isCartModalOpen,
  setIsCartModalOpen,
  toggleViewCart,
}) => {
  const [isActiveHeader, setIsActiveHeader] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);

    const handleAuthChange = () => {
      const u = localStorage.getItem("user");
      setUser(u ? JSON.parse(u) : null);
    };

    // 👂 Listen for login + logout
    window.addEventListener("userLoggedIn", handleAuthChange);
    window.addEventListener("userLoggedOut", handleAuthChange);

    return () => {
      window.removeEventListener("userLoggedIn", handleAuthChange);
      window.removeEventListener("userLoggedOut", handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    window.dispatchEvent(new Event("userLoggedOut"));
    navigate("/login");
  };

  useEffect(() => {
    function handleScroll() {
      setIsActiveHeader(window.pageYOffset > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => setShowNav((prev) => !prev);

  // ✅ close menu when clicking nav links
  const handleNavClick = () => setShowNav(false);

  return (
    <section>
      <header
        className={`header-wrap ${isActiveHeader ? "show" : ""} ${
          showNav ? "active" : ""
        }`}
      >
        <div className="logo">
          <Link to="/">
            <img src="/images/foood-logo.png" className="logo-img" alt="logo" />
          </Link>
        </div>

        <nav className="nav-list">
          <ul className="nav-menu mx-auto">
            <li className="nav-items">
              <NavLink className="nav-link" to="/" onClick={handleNavClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink
                className="nav-link"
                to="/about"
                onClick={handleNavClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink className="nav-link" to="/menu" onClick={handleNavClick}>
                Menu
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink
                className="nav-link"
                to="/contact"
                onClick={handleNavClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="cart-icon" onClick={toggleViewCart}>
            <span className="cart-qty">{cartItems.length}</span>
            <span className="cart">
              <ShoppingBasketOutlinedIcon />
            </span>
          </div>

          <div className="sign-buttons">
            {user ? (
              <div className="user-section">
                <button className="btn sign-out" onClick={handleLogout}>
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <Link className="formBtn" to="/login" onClick={handleNavClick}>
                  <button className="btn sign-in">Sign In</button>
                </Link>
                <Link className="formBtn" to="/signup" onClick={handleNavClick}>
                  <button className="btn sign-up">Sign Up</button>
                </Link>
              </>
            )}
          </div>
        </nav>

        <div className="mobile-cart-wrapper" onClick={toggleViewCart}>
          <span className="mobile-cart-qty">{cartItems.length}</span>
          <span className="mobile-cart-icon">
            <ShoppingBasketOutlinedIcon />
          </span>
        </div>

        <div className="mobile-menu" onClick={toggleNavbar}>
          <DragHandleIcon className="menu-icon" />
          <CloseIcon className="close-icon" />
        </div>
      </header>

      <Cart
        isCartModalOpen={isCartModalOpen}
        setIsCartModalOpen={setIsCartModalOpen}
        toggleViewCart={toggleViewCart}
      />
    </section>
  );
};

export default Navbar;
