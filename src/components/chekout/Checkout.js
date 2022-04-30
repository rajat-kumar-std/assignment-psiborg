import React from 'react';
import './chekout.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = ({ subTotal, items }) => {
  const checkOut = () => {
    toast('Purchased Succesfully');
  };

  return (
    <div className="checkout-container">
      <ToastContainer />
      <div className="subtotal-text">Subtotal ₹{subTotal}</div>
      <button
        className="checkout-btn"
        onClick={checkOut}
      >{`Proceed to buy (${items} items)`}</button>
    </div>
  );
};

export default Checkout;
