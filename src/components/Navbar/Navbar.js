import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom"
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
const Navbar = () => {

    const [isActiveHeader, setIsActiveHeader] = useState(false);
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 50) {
                setIsActiveHeader(true);
            } else {
                setIsActiveHeader(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleNavbar = () => {
        setShowNav(prevState => !prevState);
    };

    return (
        <section className=''>
            <header className={`header-wrap ${isActiveHeader ? "show" : ""} ${showNav ? "active" : ""}`}>
                <div className='logo'>
                    <a href='#'><img src='/images/foood-logo.png' className="logo-img" /></a>
                </div>


                <nav className="nav-list">
                    <ul className="nav-menu mx-auto">
                        <li className="nav-items">
                            <NavLink className="nav-link active" to="/">Home</NavLink>
                        </li>
                        <li className="nav-items">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-items">
                            <NavLink className="nav-link" to="/menu">Menu</NavLink>
                        </li>
                        <li className="nav-items">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>

                    </ul>


                    <div className='cart-icon'>
                        <span className='cart-qty'>1</span>
                        <span className='cart'><ShoppingBasketOutlinedIcon /></span>
                    </div>

                    <div className='sign-buttons'>
                        <button className='btn sign-in'>Sign In</button>
                        <button className='btn sign-up'>Sign Up</button>
                    </div>



                </nav>




                <div className='mobile-menu' onClick={toggleNavbar}>
                    <DragHandleIcon className='menu-icon ' />
                    <CloseIcon className='close-icon ' />
                </div>


            </header>
        </section >



    )
}

export default Navbar