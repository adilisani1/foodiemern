import React from 'react'
import "./Menu.css"

const Menu = () => {
  return (
    <div>
      <section className='menu-wrapper'>
        <div className='container'>
          <div className='row rowClass text-center'>
            <div className='col-md-12  menu-section-wrapper'>
              <h1 className='menu-title'><span>Menu</span></h1>
            </div>
          </div>
        </div>

      </section >

      <div className="sec-wp">
        <div className="container">

          <div className="menu-list-row">
            <div className="row g-xxl-5 mt-5 mb-5 bydefault_show" id="menu-dish">
              <div className="col-lg-4 col-sm-6 dish-box-wp lunch" data-cat="lunch">
                <div className="dish-box text-center">
                  <div className="dist-img">
                    <img src="/images/dish/hero-img.png" alt="" />
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
              <div className="col-lg-4 col-sm-6 dish-box-wp lunch" data-cat="lunch">
                <div className="dish-box text-center">
                  <div className="dist-img">
                    <img src="/images/dish/thai-barbecue.png" alt="" />
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
              <div className="col-lg-4 col-sm-6 dish-box-wp lunch" data-cat="lunch">
                <div className="dish-box text-center">
                  <div className="dist-img">
                    <img src="/images/dish/cheeseburger-lettuce.png" alt="" />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Menu;