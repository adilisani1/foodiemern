import React, { useState } from 'react';
import './Checkout.css'
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
const Checkout = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const [showCreditCardForm, setShowCreditCardForm] = useState(false);

    // const createOrder = (event) => {
    //     event.preventDefault();
    //     const order = {
    //         // name: userData.name,
    //         // email: userData.email,
    //         // address: userData.address,
    //         cartItems: cartItems,
    //         // total: totalPrice,
    //     }
    //     // setOrder(order);
    //     // setIsOpen(true);
    // };

    function renderCreditCardForm() {
        return (
            <div className='credit-card-form'>
                <form>
                    <div className="mb-4">
                        <label htmlFor="cardHolder" className="form-label">
                            Cardholder Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cardHolder"
                            name='cardHolder'
                            placeholder='Enter cardholder name'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cardNumber" className="form-label">
                            Card Number
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cardNumber"
                            name='cardNumber'
                            placeholder='Enter card number'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="expDate" className="form-label">
                            Expiry Date
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="expDate"
                            name='expDate'
                            placeholder='MM/YY'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cvv" className="form-label">
                            CVV
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cvv"
                            name='cvv'
                            placeholder='Enter CVV'
                        />
                    </div>
                </form>
            </div>
        );
    }


    return (
        <React.Fragment>
            <div className='checkout-page-bg'>
                <div className='checkout-page-bg-inner'>
                    <div className='back-btn'>
                        <NavLink to="/">
                            <KeyboardBackspaceOutlinedIcon className='back-icon' />
                        </NavLink>
                    </div>
                    <div className='place-order'>
                        <h2 className='place-order-text'>Place your<p>Order</p></h2>
                    </div>
                </div>
            </div>
            <div className='checkout-page-container'>
                <div className='checkout-page-wrapper'>
                    <div className='checkout-page-left'>
                        <div className='payment-details'>
                            <h4 className='details-title'>Billing Details</h4>
                        </div>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder='Type your name'
                                    className="form-control"
                                    id="name"
                                    name='name'
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="" className="form-label">
                                    Phone
                                </label>
                                <input
                                    type="phone"
                                    className="form-control"
                                    id="phone"
                                    name='phone'
                                    placeholder='Type your Phone no'
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="" className="form-label">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name='email'
                                    placeholder='Type your Email address'
                                />

                            </div>
                            <div className="mb-4">
                                <label htmlFor="" className="form-label">
                                    Full Address
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    name='address'
                                    placeholder='Type your Full address'
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="" className="form-label">
                                    Special Instruction
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="instruction"
                                    name='instruction'
                                    placeholder='Type your Special Instruction here'
                                />
                            </div>


                        </form>
                    </div>
                    <div className='checkout-page-right'>
                        <div className='payment-details'>
                            <h4 className='details-title'>Payment</h4>
                        </div>
                        <div className='checkout-payment-bg'>

                            <div className='payment-option'>
                                <input
                                    type='radio'
                                    id='cashOnDelivery'
                                    name='paymentOption'
                                    value='cashOnDelivery'
                                    onChange={() => setShowCreditCardForm(false)}
                                />
                                <label htmlFor='cashOnDelivery'>Cash on Delivery</label>
                            </div>
                            <div className='payment-option'>
                                <input
                                    type='radio'
                                    id='creditDebitCard'
                                    name='paymentOption'
                                    value='creditDebitCard'
                                    onChange={() => setShowCreditCardForm(!showCreditCardForm)}
                                />
                                <label htmlFor='creditDebitCard'>Credit/Debit Card</label>
                                {showCreditCardForm && renderCreditCardForm()}
                            </div>


                            <div className=''>
                                <p>
                                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                                </p>
                                <button className='place-order-btn'>Place Order</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            {/* <h3>Checkout Details</h3> */}
        </React.Fragment >
    )
}

export default Checkout