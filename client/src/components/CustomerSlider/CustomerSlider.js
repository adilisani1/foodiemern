import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./CustomerSlider.css";
import 'swiper/css/bundle';

const reviews = [
  { img: './images/customer/customer.jpg', stars: 4, name: 'Simon Jones' },
  { img: './images/customer/customer1.jpg', stars: 5, name: 'Simon Jones' },
  { img: './images/customer/customer2.jpg', stars: 5, name: 'Simon Jones' },
  { img: './images/customer/customer3.jpg', stars: 5, name: 'Simon Jones' },
  { img: './images/customer/customer4.jpg', stars: 5, name: 'Simon Jones' },
];

const CustomerSlider = () => {
  const rootRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return;

    if (swiperRef.current) {
      swiperRef.current.destroy(true, true);
    }

    swiperRef.current = new Swiper(rootRef.current, {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: false,
      centeredSlides: false,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: rootRef.current.querySelector('.swiper-pagination'),
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 36,
          loop: true,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 28,
          loop: true,
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
    <div className="slider-container">
      <div className="slider-content swiper" ref={rootRef}>
        <div className="slider-wrapper swiper-wrapper">
          {reviews.map((review, index) => (
            <div className="slider-card swiper-slide" key={index}>
              <img className="customer-image" src={review.img} alt="" />
              <div className="content-area">
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, i) =>
                    i < review.stars ? (
                      <StarIcon key={i} />
                    ) : (
                      <StarBorderIcon key={i} />
                    )
                  )}
                </div>
                <p className="customer-dec">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <h3 className="customer-name">{review.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default CustomerSlider;
