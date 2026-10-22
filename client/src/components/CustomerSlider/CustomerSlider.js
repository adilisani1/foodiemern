import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./CustomerSlider.css";
import 'swiper/css/bundle';

const CustomerSlider = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.destroy(true, true);
        }

        swiperRef.current = new Swiper('.slider-content', {
            slidesPerView: 3,
            spaceBetween: 60,
            loop: true,
            centeredSlides: false,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 36,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 48,
                },
            },
        });

        return () => {
            if (swiperRef.current) {
                swiperRef.current.destroy(true, true);
                swiperRef.current = null;
            }
        };
    }, []);


    return (

        <div className="slider-container swiper">

            <div className="slider-content">

                <div className="slider-wrapper swiper-wrapper">

                    <div className="slider-card swiper-slide">
                        <img className="customer-image" src="./images/customer/customer.jpg" alt="" />
                        <div className="content-area">
                            <div className="stars">

                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarBorderIcon />
                            </div>

                            <p className="customer-dec">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled
                                it
                                to make a type specimen
                                book.
                            </p>

                            <h3 className="customer-name">Simon Jones</h3>

                        </div>
                    </div>

                    <div className="slider-card swiper-slide">
                        <img className="customer-image" src="./images/customer/customer1.jpg" alt="" />
                        <div className="content-area">
                            <div className="stars">

                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>

                            <p className="customer-dec">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled
                                it
                                to make a type specimen
                                book.
                            </p>

                            <h3 className="customer-name">Simon Jones</h3>

                        </div>
                    </div>

                    <div className="slider-card swiper-slide">
                        <img className="customer-image" src="./images/customer/customer2.jpg" alt="" />
                        <div className="content-area">
                            <div className="stars">

                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>

                            <p className="customer-dec">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled
                                it
                                to make a type specimen
                                book.
                            </p>

                            <h3 className="customer-name">Simon Jones</h3>

                        </div>
                    </div>

                    <div className="slider-card swiper-slide">
                        <img className="customer-image" src="./images/customer/customer3.jpg" alt="" />
                        <div className="content-area">
                            <div className="stars">

                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>

                            <p className="customer-dec">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled
                                it
                                to make a type specimen
                                book.
                            </p>

                            <h3 className="customer-name">Simon Jones</h3>

                        </div>
                    </div>

                    <div className="slider-card swiper-slide">
                        <img className="customer-image" src="./images/customer/customer4.jpg" alt="" />
                        <div className="content-area">
                            <div className="stars">

                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>

                            <p className="customer-dec">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled
                                it
                                to make a type specimen
                                book.
                            </p>

                            <h3 className="customer-name">Simon Jones</h3>

                        </div>
                    </div>

                </div>
                {/* <!-- If we need pagination --> */}
                <div className="swiper-pagination"></div>

                {/* <!-- If we need navigation buttons  --> */}
                {/* <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div> */}
            </div>

        </div>



    );


}

export default CustomerSlider
