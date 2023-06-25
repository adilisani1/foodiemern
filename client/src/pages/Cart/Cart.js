

import React, { useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../../redux/cartSlice';
import Checkout from '../Checkout/Checkout';


function Cart({ toggle, modal }) {

  const [viewCartModal, setViewCartModal] = useState(false);

  const toggleViewCart = () => setViewCartModal(!viewCartModal);


  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
  }, 0);

  // const qtyItems = cartItems.map((item) => item.qty)


  // const orderTotal = cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  // let shippingCost;
  // if (orderTotal > 1000) {
  //   shippingCost = 0
  // } else if (orderTotal === 0) {
  //   shippingCost = 0
  // } else {
  //   shippingCost = 10
  // }

  // const totalPrice = orderTotal + shippingCost;

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <div className='modal-header'>
          <h4>Your Cart</h4>
          <div className='price-wrapper'>
            {/* <span className='price'>{`${cartItems.length > 0 ? `${qtyItems} items` : ""}`}</span> */}
            <CloseOutlinedIcon className='modal-close' onClick={toggle} />
          </div>
        </div>
        <ModalBody>
          <section className="h-100 h-custom scrollable-modal-content">
            <div className="container py-1 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                  <div className="card">
                    <div className="card-body p-4">
                      <div className="row">
                        {cartItems.map((item) => (
                          <div className="col-lg-12" key={item.id}>
                            <div className="cart-card mb-3">
                              <div className="cart-card-body">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                  <div className="ms-3 d-flex align-items-center cart-product-wrapper">
                                    <img
                                      src={item.image}
                                      className="img-fluid rounded-3 me-3"
                                      alt="Shopping item"
                                    />
                                    <div className='cart-qty-wrapper'>
                                      <h5 className='cart-product-title'>{item.title}</h5>
                                      <div className='item-qty'>
                                        <button className='add-sub'>-</button>
                                        <span className='cart-product-qty'>{item.qty}</span>
                                        <button className='add-sub'>+</button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='d-flex justify-content-end flex-column'>
                                    <h5 className="mb-0 cart-product-price">{`$${item.price}`}</h5>
                                    <div className='delete-cart-item'>
                                      <DeleteForeverOutlinedIcon
                                        className='delete-cart-icon'
                                        onClick={() => dispatch(removeCart(item))}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

                        {/* {cartItems.length > 0 &&
                          <div className='order-total'>
                            <h6>Total: {totalPrice.toFixed(2)}</h6>
                          </div>
                        } */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ModalBody>
        <button className='view-cart' onClick={toggleViewCart}>View Cart</button>
      </Modal>

      {modal && <Checkout viewCartModal={viewCartModal} toggleViewCart={toggleViewCart} />}
    </div>
  );
}

export default Cart;
