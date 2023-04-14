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
                        <div className='col-md-6 col-12 col-sm-6 col-lg-6'>
                            <img src='/images/hero-img-new.png' className='hero-img ' alt="" />
                        </div>

                    </div>
                </div>

            </section >


            <div className='container'>
                <div className='row col-12 categories align-items-center'>

                    <div className='col-2'>
                        <img className='cat-icon' src='/images/caticons/burger-icon.svg' />
                    </div>
                    <div className='col-2'>
                        <img className='cat-icon' src='/images/caticons/fries.icon.svg' />
                    </div>
                    <div className='col-2'>
                        <img className='cat-icon' src='/images/caticons/pizza-icon.svg' />
                    </div>
                    <div className='col-2'>
                        <img className='cat-icon' src='/images/caticons/dessert.icon.svg' />
                    </div>
                    <div className='col-2'>
                        <img className='cat-icon' src='/images/caticons/broast-icon.svg' />
                    </div>

                </div>
            </div>
            <MenuComponent />
        </>
    )
}
export default Home;