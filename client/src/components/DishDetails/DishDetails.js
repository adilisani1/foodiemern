import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import "./DishDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deCreament, inCreament } from "../../redux/cartSlice";
import { getDishCalories, getDishPersons, getDishType } from "../../utils/dishMeta";

const DishDetails = ({ singleDish }) => {
  const [singleD, setSingleD] = useState([]);
  const { id } = useParams();

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    const dishSingle = singleDish.filter((item) => item._id === id);
    setSingleD(dishSingle);
  }, [id, singleDish]);

  const getQty = (dishId) => {
    const item = cartItems.find((i) => i._id === dishId);
    return item ? item.qty : 0;
  };

  const dish = singleD[0];

  return (
    <div className="dish-details-page">
      <section className="dish-details-hero">
        <div className="dish-details-hero-shade" aria-hidden="true" />
        <div className="dish-details-hero-content">
          <Link to="/menu" className="dish-details-back" aria-label="Back to menu">
            <KeyboardBackspaceOutlinedIcon className="dish-details-back-icon" />
          </Link>
          <p className="dish-details-eyebrow">Foodie</p>
          <h1 className="dish-details-hero-title">
            {dish ? dish.title : "Dish details"}
          </h1>
          <p className="dish-details-hero-text">
            Freshly prepared and ready to order. Pick your quantity and add it to your bucket.
          </p>
        </div>
      </section>

      <section className="dish-details-body">
        <div className="container">
          {!dish ? (
            <p className="dish-details-empty">Loading dish details...</p>
          ) : (
            (() => {
              const qty = getQty(dish._id);
              const isInCart = qty > 0;
              const categoryLabel =
                String(dish.category).toLowerCase() === "desert"
                  ? "Dessert"
                  : dish.category;

              return (
                <div className="dish-details-layout">
                  <div className="dish-detail-box">
                    <div className="dish-detail-img">
                      <img src={dish.image} alt={dish.title} />
                    </div>
                  </div>

                  <div className="dish-information">
                    <p className="dish-details-category">{categoryLabel}</p>
                    <h2>{dish.title}</h2>
                    <p className="dish-price">${dish.price}</p>

                    <ul className="dish-details-meta">
                      <li>
                        <span>Type</span>
                        <strong>{getDishType(dish.title, dish.category)}</strong>
                      </li>
                      <li>
                        <span>Persons</span>
                        <strong>{getDishPersons(dish.category)}</strong>
                      </li>
                      <li>
                        <span>Calories</span>
                        <strong>{getDishCalories(dish.category)}</strong>
                      </li>
                    </ul>

                    <p className="dish-dec">
                      Made with quality ingredients and bold flavor. Perfect when you want something
                      satisfying, fresh, and ready fast.
                    </p>

                    {isInCart ? (
                      <div className="dish-sub">
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => dispatch(deCreament(dish))}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span>{qty}</span>
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => dispatch(inCreament(dish))}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <p className="info-text">Add this dish to your bucket to set quantity.</p>
                    )}

                    <button
                      type="button"
                      className="add-btn-dish"
                      onClick={() => dispatch(addToCart(dish))}
                    >
                      {isInCart ? "Added to bucket" : "Add to bucket"}
                    </button>
                  </div>
                </div>
              );
            })()
          )}
        </div>
      </section>
    </div>
  );
};

export default DishDetails;
