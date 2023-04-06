import React from 'react'
import './Home.css';
const Home = () => {
    return (
        <>
            <section className='hero-wrapper'>
                <div className='container'>
                    <div className='row rowClass'>
                        <div className='col-md-6 hero-section-wrapper'>
                            <h1 className='hero-title'>Choosing Helathy & Fresh Food</h1>
                            <p className='hero-text'>Just confirm your order and enjoy our delicious meal</p>
                            <div className=''>
                                <button className='order-now-btn'>Order Now</button>
                                <button className='see-menu-btn'>See Menu</button>
                            </div>
                        </div>
                        <div className='col-md-5 offset-md-1'>
                            <img src='/images/hero-img-new.png' className='hero-img' alt="" />
                        </div>
                    </div>
                </div>

            </section >
        </>
    )
}
export default Home;