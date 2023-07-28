import React, { useState, useEffect } from 'react';
import MenuComponent from '../../components/MenuComponent/MenuComponent';
import './Home.css';
// import Dishes from "../../dishes.json"
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
const Home = ({ dishes }) => {

    const [catActive, setCatActive] = useState(false);
    const [myDishes, setMyDishes] = useState([]);

    // const [activeDish, setActiveDish] = useState(false)

    const filterItem = (category) => {
        const updatedList = dishes.filter((item) => item.category === category);
        setMyDishes(updatedList);
        setCatActive(category);
        // setActiveDish(category)

    };

    const categories = [...new Set(dishes.map((dish) => dish.category))];

    useEffect(() => {
        const defaultCategory = categories[0];
        filterItem(defaultCategory);
    }, [dishes]);


    return (
        <>

            {/* <section className='hero-wrapper'>
                <div className='container'>
                    <div className='row rowClass '>
                        <div className='col-md-6 col-12  col-lg-6 hero-section-wrapper'>
                            <h1 className='hero-title'>Choosing <span>Helathy</span> & Fresh Food</h1>
                            <p className='hero-text'>Just confirm your order and enjoy our delicious meal</p>
                            <div className=''>
                                <button className='order-now-btn'>Order Now</button>
                                <button className='see-menu-btn'>See Menu</button>
                            </div>
                        </div>
                        <div className='col-md-6  col-12  col-lg-5 hero-section-image'>
                            <img src='/images/herosection-img.png' className='hero-img ' alt="herosection-img" />
                        </div>

                    </div>
                </div>

            </section> */}

            {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero" class="hero d-flex align-items-center section-bg">
                <div class="container">
                    <div class="row justify-content-between gy-5">

                        <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                            <h2 className='hero-title'>Choosing <span>Helathy</span> & Fresh Food</h2>
                            <p className='hero-text'>Just confirm your order and enjoy our delicious meal</p>
                            {/* <h2 data-aos="fade-up">Enjoy Your Healthy<br />Delicious Food</h2>
                            <p data-aos="fade-up" data-aos-delay="100">Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p> */}
                            <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
                                <a href="#book-a-table" class="btn-book-a-table">Book a Table</a>
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"><PlayCircleOutlinedIcon className='play-circle' /></i><span>Watch Video</span></a>
                            </div>
                        </div>
                        <div class="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
                            <img src='/images/herosection-img.png' class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Hero Section --> */}


            {/* <div className='container-tabs'>
                <div className='row categories'>
                    {categories.map((category, index) => (
                        <div className={`col-2 cat ${catActive === category ? 'active' : ''}`} key={index}>
                            <img
                                className="cat-icon"
                                src={`/images/${category}-r.png`}
                                alt=''
                                onClick={() => filterItem(category)}
                            />
                        </div>
                    ))}
                </div>
            </div> */}
            <div className='container-tabs'>
                <div className='row categories'>
                    {categories.map((category, index) => (
                        <div className={`col-2 cat ${catActive === category ? 'active' : ''}`} key={index}>
                            <img
                                className="cat-icon"
                                src={`/images/${category}-r.png`}
                                alt=""
                                onClick={() => filterItem(category)}
                            />
                        </div>
                    ))}
                </div>
            </div>


            <MenuComponent dishes={myDishes} />
        </>
    )
}
export default Home;