import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import './Cart.css';

function Cart({ toggle, modal }) {


  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <div className='modal-header'>
          <h4 > Your Cart   </h4>
          <div className='price-wrapper'>
            <span className='price'>$40.00</span>
            <CloseOutlinedIcon className='modal-close' onClick={toggle} />
          </div>
        </div>
        <ModalBody>
          <section className="h-100 h-custom" >
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                  <div className="card">
                    <div className="card-body p-4">

                      <div className="row">

                        <div className="col-lg-12">

                          <div className="cart-card mb-3">
                            <div className="cart-card-body">

                              <div className="d-flex flex-row align-items-center justify-content-between">
                                {/* <div>
                                 
                                </div> */}
                                <div className="ms-3 d-flex  align-items-center cart-product-wrapper" >
                                  <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                    className="img-fluid rounded-3 me-3" alt="Shopping item" />

                                  <div className='cart-qty-wrapper' >
                                    <h5 className='cart-product-title'>Iphone 11 pro</h5>
                                    <button className='add-sub'>-</button>
                                    <span className='cart-product-qty'>2</span>
                                    <button className='add-sub'>+</button>
                                  </div>
                                </div>
                                <div className='d-flex justify-content-end flex-column'>
                                  <h5 className="mb-0 cart-product-price">$900</h5>
                                  <div className='delete-cart-item'>
                                    <DeleteForeverOutlinedIcon className='delete-cart-icon' />

                                  </div>

                                </div>
                              </div>


                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Cart;
