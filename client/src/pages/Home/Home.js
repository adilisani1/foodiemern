import React, { useState, useEffect, useCallback, useMemo } from 'react';
import MenuComponent from '../../components/MenuComponent/MenuComponent';
import './Home.css';
// import Dishes from "../../dishes.json"
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
const Home = ({ dishes }) => {

    const [catActive, setCatActive] = useState(false);
    const [myDishes, setMyDishes] = useState([]);

    // const [activeDish, setActiveDish] = useState(false)

    const filterItem = useCallback((category) => {
        const updatedList = dishes.filter((item) => item.category === category);
        setMyDishes(updatedList);
        setCatActive(category);
        // setActiveDish(category)
    }, [dishes]);

    const categories = useMemo(() => {
        return [...new Set(dishes.map((dish) => dish.category))];
    }, [dishes]);

    useEffect(() => {
        if (categories.length > 0) {
            const defaultCategory = categories[0];
            filterItem(defaultCategory);
        }
    }, [categories, filterItem]);


    return (
        <>

            {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero" className="hero d-flex align-items-center">
                <div className="hero-shade" aria-hidden="true" />
                <div className="hero-floaters" aria-hidden="true">
                    <img src="/images/pizza-r.png" alt="" className="hero-floater hero-floater--1" />
                    <img src="/images/fries-r.png" alt="" className="hero-floater hero-floater--2" />
                    <img src="/images/noodle-r.png" alt="" className="hero-floater hero-floater--3" />
                    <img src="/images/desert-r.png" alt="" className="hero-floater hero-floater--4" />
                    <img src="/images/drinks-r.png" alt="" className="hero-floater hero-floater--5" />
                </div>
                <div className="container hero-inner">
                    <div className="row justify-content-between gy-5 align-items-center">

                        <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                            <p className="hero-eyebrow">Foodie</p>
                            <h2 className='hero-title'>Choosing <span>Healthy</span> & Fresh Food</h2>
                            <p className='hero-text'>Just confirm your order and enjoy our delicious meal</p>
                            <div className="d-flex hero-ctas" data-aos="fade-up" data-aos-delay="200">
                                <a href="#menu" className="btn-book-a-table">Order Now</a>
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center" target="_blank" rel="noreferrer"><i className="bi bi-play-circle"><PlayCircleOutlinedIcon className='play-circle' /></i><span>Watch Video</span></a>
                            </div>
                        </div>
                        <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
                            <img src='/images/herosection-img.png' className="img-fluid hero-dish" alt="" data-aos="zoom-out" data-aos-delay="300" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Hero Section --> */}

            <div className='container-tabs'>
                <div className='categories'>
                    {categories.map((category, index) => (
                        <button
                            type="button"
                            className={`cat ${catActive === category ? 'active' : ''}`}
                            key={index}
                            onClick={() => filterItem(category)}
                            aria-label={`Filter ${category}`}
                        >
                            <img
                                className="cat-icon"
                                src={`/images/${category}-r.png`}
                                alt=""
                            />
                            <span className="cat-label">
                              {String(category).toLowerCase() === "desert"
                                ? "Dessert"
                                : category}
                            </span>
                        </button>
                    ))}
                </div>
            </div>


            <MenuComponent dishes={myDishes} />
        </>
    )
}
export default Home;