import React from 'react';
import CustomerSlider from '../CustomerSlider/CustomerSlider'
import "./MenuComponent.css";

const MenuComponent = () => {
    return (
        <section >

            {/* <div className='container'>

                <div className='row col-12 row-cols-6 justify-content-center align-items-center'>
                    <div className='categories'>
                        <img className='cat-icon' src='/images/caticons/burger-icon.svg' />
                        <img className='cat-icon' src='/images/caticons/burger-icon.svg' />
                        <img className='cat-icon' src='/images/caticons/burger-icon.svg' />
                        <img className='cat-icon' src='/images/caticons/burger-icon.svg' />
                        <img className='cat-icon' src='/images/caticons/burger-icon.svg' />
                    </div>
                </div>

            </div> */}
            {/* <div className='categories'>
                <div className='icons'>
                    <img src='/images/caticons/burger.icon.svg' />
                    <img src='/images/caticons/burger.icon.svg' />
                    <img src='/images/caticons/burger.icon.svg' />
                    <img src='/images/caticons/burger.icon.svg' />
                </div>
            </div> */}
            <section
                className="our-menu section bg-light repeat-img" id="menu">
                <div className="sec-wp">
                    <div className="container">

                        <div className="menu-list-row">
                            <div className="row g-xxl-5 bydefault_show" id="menu-dish">
                                {/* <div className="col-lg-4 col-sm-6 dish-box-wp breakfast" data-cat="breakfast">
                                    <div className="dish-box text-center">
                                        <div className="dist-img">
                                            <img src="/images/dish/1.png" alt="" />
                                        </div>

                                        <div className="dish-title">
                                            <h3 className="h3-title">Fresh Chicken Veggies</h3>
                                            <p>120 calories</p>
                                        </div>
                                        <div className="dish-info">
                                            <ul>
                                                <li>
                                                    <p>Type</p>
                                                    <b>Non Veg</b>
                                                </li>
                                                <li>
                                                    <p>Persons</p>
                                                    <b>2</b>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dist-bottom-row">
                                            <ul>
                                                <li>
                                                    <b>Rs. 499</b>
                                                </li>
                                                <li>
                                                    <button className="dish-add-btn">
                                                        <i className="uil uil-plus"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}


                                {/* <div className="col-lg-4 col-sm-6 dish-box-wp breakfast" data-cat="breakfast">
                                    <div className="dish-box text-center">
                                        <div className="dist-img">
                                            <img src="/images/dish/2.png" alt="" />
                                        </div>

                                        <div className="dish-title">
                                            <h3 className="h3-title">Grilled Chicken</h3>
                                            <p>80 calories</p>
                                        </div>
                                        <div className="dish-info">
                                            <ul>
                                                <li>
                                                    <p>Type</p>
                                                    <b>Non Veg</b>
                                                </li>
                                                <li>
                                                    <p>Persons</p>
                                                    <b>1</b>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dist-bottom-row">
                                            <ul>
                                                <li>
                                                    <b>Rs. 359</b>
                                                </li>
                                                <li>
                                                    <button className="dish-add-btn">
                                                        <i className="uil uil-plus"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <!-- 3 --> */}
                                {/* <div className="col-lg-4 col-sm-6 dish-box-wp lunch" data-cat="lunch">
                                    <div className="dish-box text-center">
                                        <div className="dist-img">
                                            <img src="/images/dish/3.png" alt="" />
                                        </div>

                                        <div className="dish-title">
                                            <h3 className="h3-title">Panner Noodles</h3>
                                            <p>100 calories</p>
                                        </div>
                                        <div className="dish-info">
                                            <ul>
                                                <li>
                                                    <p>Type</p>
                                                    <b>Veg</b>
                                                </li>
                                                <li>
                                                    <p>Persons</p>
                                                    <b>2</b>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dist-bottom-row">
                                            <ul>
                                                <li>
                                                    <b>Rs. 149</b>
                                                </li>
                                                <li>
                                                    <button className="dish-add-btn">
                                                        <i className="uil uil-plus"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <!-- 4 --> */}
                                <div className="col-lg-4 col-sm-6 dish-box-wp lunch" data-cat="lunch">
                                    <div className="dish-box text-center">
                                        <div className="dist-img">
                                            <img src="/images/dish/4.png" alt="" />
                                        </div>

                                        <div className="dish-title">
                                            <h3 className="h3-title">Chicken Noodles</h3>
                                            <p>120 calories</p>
                                        </div>
                                        <div className="dish-info">
                                            <ul>
                                                <li>
                                                    <p>Type</p>
                                                    <b>Non Veg</b>
                                                </li>
                                                <li>
                                                    <p>Persons</p>
                                                    <b>2</b>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dist-bottom-row">
                                            <ul>
                                                <li>
                                                    <b>Rs. 379</b>
                                                </li>
                                                <li>
                                                    <button className="dish-add-btn">
                                                        <i className="uil uil-plus"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- 5 --> */}
                                <div className="col-lg-4 col-sm-6 dish-box-wp dinner" data-cat="dinner">
                                    <div className="dish-box text-center">
                                        <div className="dist-img">
                                            <img src="/images/dish/5.png" alt="" />
                                        </div>

                                        <div className="dish-title">
                                            <h3 className="h3-title">Bread Boiled Egg</h3>
                                            <p>120 calories</p>
                                        </div>
                                        <div className="dish-info">
                                            <ul>
                                                <li>
                                                    <p>Type</p>
                                                    <b>Non Veg</b>
                                                </li>
                                                <li>
                                                    <p>Persons</p>
                                                    <b>2</b>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dist-bottom-row">
                                            <ul>
                                                <li>
                                                    <b>Rs. 99</b>
                                                </li>
                                                <li>
                                                    <button className="dish-add-btn">
                                                        <i className="uil uil-plus"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 dish-box-wp dinner" data-cat="dinner">
                                    <div className="dish-box text-center">
                                        <div className="dist-img">
                                            <img src="/images/dish/6.png" alt="" />
                                        </div>

                                        <div className="dish-title">
                                            <h3 className="h3-title">Immunity Dish</h3>
                                            <p>120 calories</p>
                                        </div>
                                        <div className="dish-info">
                                            <ul>
                                                <li>
                                                    <p>Type</p>
                                                    <b>Veg</b>
                                                </li>
                                                <li>
                                                    <p>Persons</p>
                                                    <b>2</b>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dist-bottom-row">
                                            <ul>
                                                <li>
                                                    <b>Rs. 159</b>
                                                </li>
                                                <li>
                                                    <button className="dish-add-btn">
                                                        <i className="uil uil-plus"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className='container'>


                <div className="row justify-content-center align-items-center ">
                    <div className="col-md-0 col-lg-4 col-12">
                        <div className="banner  color-1 ">
                            <div className="main-text">
                                <h3>BURGER</h3>
                                <p>Get a 20% Discount</p>
                                <p>On This Week</p>
                                <a href="#">Buy Now</a>
                            </div>
                            <div className='discount '>
                                <img src='/images/discount/burger.png' className=' discount-img' />
                            </div>

                        </div>
                    </div>
                    <div className="col-md-0 col-lg-4 col-12">
                        <div className="banner  color-2 ">
                            <div className="main-text">
                                <h3>BURGER</h3>
                                <p>Get a 20% Discount</p>
                                <p>On This Week</p>
                                <a href="#">Buy Now</a>
                            </div>
                            <div className='discount'>
                                <img src='/images/discount/burger.png' className=' discount-img' />
                            </div>

                        </div>
                    </div>
                    <div className="col-md-0 col-lg-4 col-12">
                        <div className="banner  color-3 ">
                            <div className="main-text">
                                <h3>BURGER</h3>
                                <p>Get a 20% Discount</p>
                                <p>On This Week</p>
                                <a href="#">Buy Now</a>
                            </div>
                            <div className='discount'>
                                <img src='/images/discount/burger.png' className=' discount-img' />
                            </div>

                        </div>
                    </div>

                </div>
            </div>


            <div className='center-banner-img '>
                <div className='container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='banner-text col-md-6'>
                            <h2 >Get a 20% Discount</h2>
                            <h2 >Special Food Every</h2>
                            <h2 >Time  </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <div className='d-flex align-items-center'>
                                <button className='order-now'>Order Now</button>
                                <h3>$299.00</h3>
                            </div>
                        </div>
                        <div className='col-md-6 burger-img '>
                            <img src="./images/hero-img-new.png" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>


            {/* <!--CUSTOMER SlIDER HEADING--> */}
            <section className="container">
                <div className="col-12 text-center">
                    <h2 className="section-title-className">CUSTOMER REVIEWS</h2>
                </div>
            </section>

            <section className="container-fluid">
                {/* <!-- CUSTOMERS SLIDERS --> */}
                <CustomerSlider />
            </section>

        </section >
    )
}

export default MenuComponent