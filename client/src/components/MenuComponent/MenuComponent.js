import React from 'react';
import CustomerSlider from '../CustomerSlider/CustomerSlider';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import "./MenuComponent.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { getDishCalories, getDishPersons, getDishType } from '../../utils/dishMeta';

const MenuComponent = ({ dishes }) => {

    const dispatch = useDispatch()

    return (
        < >

            <div className='menu-t'>
                <h2 className='menu-title'>Our menu</h2>
                <p className='menu-subtitle'>
                    Handpicked favorites made fresh. Burgers, pizzas, noodles, and more ready to order.
                </p>
            </div>
            <section
                className="our-menu section repeat-img" id="menu">
                <div className="sec-wp">
                    <div className="container">

                        <div className="menu-list-row">
                            <div className="row g-xxl-5 bydefault_show" id="menu-dish">

                                {dishes.map((item) => {
                                    return (<div className="col-lg-4 col-sm-6 dish-box-wp lunch" data-cat="lunch" key={item._id}>

                                        <div className="dish-box text-center">

                                            <Link to={`${item._id}`}>

                                                <div className="dist-img">
                                                    <img src={item.image} alt="img" />
                                                </div>
                                            </Link>
                                            <div className="dish-title">
                                                <h3 className="h3-title">{item.title}</h3>
                                                <p>{getDishCalories(item.category)} calories</p>
                                            </div>
                                            <div className="dish-info">
                                                <ul>
                                                    <li>
                                                        <p>Type</p>
                                                        <b>{getDishType(item.title, item.category)}</b>
                                                    </li>
                                                    <li>
                                                        <p>Persons</p>
                                                        <b>{getDishPersons(item.category)}</b>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="dist-bottom-row">
                                                <ul>
                                                    <li>
                                                        <b>${item.price}</b>
                                                    </li>
                                                    <li>
                                                        <button
                                                            className="dish-add-btn"
                                                            onClick={() => dispatch(addToCart(item))}>
                                                            <AddOutlinedIcon />
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}

                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* VIP OFFER */}
            <div className='container promo-banners'>
                <div className='row g-4 align-items-stretch'>
                    <div className='col-md-8'>
                        <a href="#menu" className="banner banner--lg banner--burger">
                            <div className='discount'>
                                <img src='/images/food-img-1.png' className='discount-img' alt='Burger deal' />
                            </div>
                            <div className="main-text">
                                <span className='promo-eyebrow'>This week</span>
                                <h3 className='big-text-title'>Burger</h3>
                                <p className='big-text-discount'>20% off smash favorites</p>
                                <span className='promo-cta'>Order now</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <div className='promo-side'>
                            <a href="#menu" className="banner banner--sm banner--pasta">
                                <div className='discount'>
                                    <img src='/images/food-img-2.png' className='discount-img' alt='Pasta deal' />
                                </div>
                                <div className="main-text">
                                    <span className='promo-eyebrow'>Limited</span>
                                    <h3>Pasta</h3>
                                    <p>15% off bowls</p>
                                    <span className='promo-cta'>Try it</span>
                                </div>
                            </a>
                            <a href="#menu" className="banner banner--sm banner--pizza">
                                <div className='discount'>
                                    <img src='/images/food-img-3.png' className='discount-img' alt='Pizza deal' />
                                </div>
                                <div className="main-text">
                                    <span className='promo-eyebrow'>Hot deal</span>
                                    <h3>Pizza</h3>
                                    <p>Buy 1 get 1 side</p>
                                    <span className='promo-cta'>Grab deal</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* CENTER BANNER IMG */}
            <div className='center-banner-img '>
                <div className='container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='banner-text col-md-6'>
                            <h2>Get a 20% discount</h2>
                            <span>Special food every time</span>
                            <p className='center-banner-text'>Fresh picks and bold flavors. Order your favorites and enjoy a meal made for you.</p>
                            <div className='d-flex align-items-center flex-wrap'>
                                <a href="#menu" className='order-now'>Order Now</a>
                                <h3>$299.00</h3>
                            </div>
                        </div>
                        <div className='col-md-6 burger-img '>
                            <img src="./images/hero-img-new.png" className='img-fluid' alt='' />
                        </div>
                    </div>
                </div>
            </div>


            <section className="container reviews-wrap">
                <div className="row justify-content-center">
                    <div className="col-12 text-center reviews-header">
                        <h2 className="section-title-className">Customer reviews</h2>
                        <p className="reviews-subtitle">
                            Real feedback from foodies who ordered with us fresh meals, fast delivery, and flavors worth coming back for.
                        </p>
                    </div>
                </div>
            </section>

            <section className="reviews-slider">
                <CustomerSlider />
            </section>

        </ >
    )
}

export default MenuComponent