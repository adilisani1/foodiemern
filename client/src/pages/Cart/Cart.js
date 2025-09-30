import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  inCreament,
  deCreament,
  removeCart,
  clearCart,
} from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart({ isCartModalOpen, setIsCartModalOpen }) {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
  }, 0);

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const handleViewCartClick = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <div className={`cart-modal ${isCartModalOpen ? "open" : ""}`}>
        <div className="cart-modal-wrapper">
          <div className="cart-modal-inner">
            <div className="iCxowP kfarYJ">
              <div className="cart-modal-top">
                <div width="100%" className="cart-modal-top-area">
                  <div className="">Your Cart</div>
                  <button className="close-cart-btn" onClick={closeCartModal}>
                    <span className="inner">
                      <CloseOutlinedIcon className="close-cart-icon" />
                    </span>
                  </button>
                </div>
              </div>

              <div className="cc">
                {cartItems.map((item) => (
                  <div className="col-lg-12" key={item._id}>
                    <div className="cart-card mb-3">
                      <div className="cart-card-body">
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <div className="ms-3 d-flex align-items-center cart-product-wrapper">
                            <img
                              src={item.image}
                              className="img-fluid rounded-3 me-3"
                              alt="Shopping item"
                            />
                            <div className="cart-qty-wrapper">
                              <h5 className="cart-product-title">
                                {item.title}
                              </h5>
                              <div className="item-qty">
                                <button
                                  className="add-sub"
                                  onClick={() => dispatch(deCreament(item))}
                                >
                                  -
                                </button>
                                <span className="cart-product-qty">
                                  {item.qty}
                                </span>
                                <button
                                  className="add-sub"
                                  onClick={() => dispatch(inCreament(item))}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end flex-column">
                            <h5 className="mb-0 cart-product-price">{`$${item.price}`}</h5>
                            <div className="delete-cart-item">
                              <DeleteForeverOutlinedIcon
                                className="delete-cart-icon"
                                onClick={() => dispatch(removeCart(item))}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {cartItems.length > 0 && (
            <div className="cart-footer">
              <div className="order-total">
                <span>Sub Total</span>
                <h6>{`$${totalPrice.toFixed(2)}`}</h6>
              </div>
              <button className="view-cart mt-3" onClick={handleViewCartClick}>
                Checkout
              </button>
              <button
                className="clear-cart-btn mt-3"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
