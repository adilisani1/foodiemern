import React from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom"
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
const Navbar = () => {
    return (
        <section className=''>
            <header className='header-wrap'>
                <div className='logo'>
                    <a href='#'><img src='/images/food-logo.png' className="logo-img" /></a>
                </div>


                <div className='nav-list active'>
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
                    <div className='header-right '>
                        <span className='cart-icon'>
                            <button className='cart'><ShoppingBasketOutlinedIcon /></button>
                        </span>

                        <button className='btn sign-in'>Sign In</button>
                        <button className='btn sign-up'>Sign Up</button>
                    </div>
                </div>


                <div className='mobile-menu'>
                    <DragHandleIcon className='menu-icon active' />
                    <CloseIcon className='close-icon' />
                </div>


            </header>
        </section >



    )
}

export default Navbar