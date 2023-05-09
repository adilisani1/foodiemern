import React from 'react';
import MenuComponent from '../../components/MenuComponent/MenuComponent';
import './Home.css';

const Home = () => {



    return (
        <>

            <section className='hero-wrapper'>
                <div className='container'>
                    <div className='row rowClass '>
                        <div className='col-md-6 col-12 col-sm-6 col-lg-6 hero-section-wrapper'>
                            <h1 className='hero-title'>Choosing <span>Helathy</span> & Fresh Food</h1>
                            <p className='hero-text'>Just confirm your order and enjoy our delicious meal</p>
                            <div className=''>
                                <button className='order-now-btn'>Order Now</button>
                                <button className='see-menu-btn'>See Menu</button>
                            </div>
                        </div>
                        <div className='col-md-6  col-12 col-sm-6 col-lg-5 hero-section-image'>
                            <img src='/images/herosection-img.png' className='hero-img ' alt="herosection-img" />
                        </div>

                    </div>
                </div>

            </section >


            <div className='container'>
                <div className='row categories '>

                    <div className='col-2'>
                        <img className='cat-icon' src='/images/burger-r.png' alt='' />
                    </div>
                    <div className='col-2'>
                        <img className='cat-icon' src='/images/noodle-r.png' alt='' />
                    </div>
                    <div className='col-2'>
                        <img className='cat-icon' src='/images/pizza-r.png' alt='' />
                    </div>
                    <div className='col-2'>
                        <img className='cat-icon' src='/images/fries-r.png' alt='' />
                    </div>
                    <div className='col-2'>
                        <img className='cat-icon' src='/images/desert-r-1.png' alt='' />
                    </div>
                    <div className='col-2'>
                        <img className='cat-icon' src='/images/drinks-r.png' alt='' />
                    </div>

                </div>
            </div>
            <MenuComponent />
        </>
    )
}
export default Home;