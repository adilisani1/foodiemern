import React from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import "./Menu.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { getDishCalories, getDishPersons, getDishType } from "../../utils/dishMeta";

const Menu = ({ dishes }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <section className="menu-wrapper">
        <div className="menu-hero-shade" aria-hidden="true" />
        <div className="menu-hero-content">
          <p className="menu-eyebrow">Foodie</p>
          <h1 className="menu-page-title">Our menu</h1>
          <p className="menu-hero-text">
            Bold flavors and fresh picks — choose your favorites and order in
            minutes.
          </p>
        </div>
      </section>

      <section className="our-menu section menu-page-list" id="menu">
        <div className="sec-wp">
          <div className="container">
            <div className="menu-list-row">
              <div className="row g-xxl-5 bydefault_show" id="menu-dish">
                {dishes.map((item) => (
                  <div
                    className="col-lg-4 col-sm-6 dish-box-wp lunch"
                    data-cat="lunch"
                    key={item._id}
                  >
                    <div className="dish-box text-center">
                      <Link to={`${item._id}`}>
                        <div className="dist-img">
                          <img src={item.image} alt="" />
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
                              onClick={() => dispatch(addToCart(item))}
                            >
                              <AddOutlinedIcon />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
