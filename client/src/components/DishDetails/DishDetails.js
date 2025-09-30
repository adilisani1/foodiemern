import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DishDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deCreament, inCreament } from "../../redux/cartSlice";

const DishDetails = ({ singleDish, headerColor }) => {
  const [singleD, setSingleD] = useState([]);
  const { id } = useParams();

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    const dishSingle = singleDish.filter((item) => item._id === id);
    setSingleD(dishSingle);
  }, [id, singleDish]);

  // ✅ Get qty from cart
  const getQty = (dishId) => {
    const item = cartItems.find((i) => i._id === dishId);
    return item ? item.qty : 0; // return 0 if not in cart
  };

  return (
    <>
      <div
        className="header-wrap"
        style={{
          backgroundColor: headerColor,
          zIndex: 10,
          padding: "4rem 10%",
          color: "#fff",
        }}
      ></div>

      <section className="our-menu section dish-details-repeat-img" id="menu">
        <div className="sec-wp">
          <div className="container">
            <div className="menu-list-row">
              {singleD.map((item) => {
                const qty = getQty(item._id);
                const isInCart = qty > 0;

                return (
                  <div
                    className="row g-xxl-5 bydefault_show"
                    id="menu-dish"
                    key={item._id}
                  >
                    <div className="col-lg-4 col-sm-6 dish-details-box-wp lunch">
                      <div className="dish-detail-box text-center">
                        <div className="dish-detail-img">
                          <img src={item.image} alt={item.title} />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-8 col-sm-6 dish-information">
                      <h2>{item.title}</h2>
                      <p className="dish-price">${item.price}</p>

                      {isInCart ? (
                        <>
                          <div className="dish-sub">
                            <button
                              className="qty-btn"
                              onClick={() => dispatch(deCreament(item))}
                            >
                              -
                            </button>
                            <span>{qty}</span>
                            <button
                              className="qty-btn"
                              onClick={() => dispatch(inCreament(item))}
                            >
                              +
                            </button>
                          </div>
                        </>
                      ) : (
                        <p className="info-text">
                          Click "Add To Bucket" to proceed.
                        </p>
                      )}

                      <button
                        className="add-btn-dish"
                        onClick={() => dispatch(addToCart(item))}
                      >
                        Add To Bucket
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DishDetails;
