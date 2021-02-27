import React from 'react';
import './Cart.css'

const cart = (props) => {
  const cart = props.cart;
  // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);

  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    totalPrice = totalPrice + product.price   
  }

  let shipping = 0;
  if(totalPrice > 35){
    shipping = 0;
  }
 else if(totalPrice > 15){
    shipping = 4.99;
  }
  else if(totalPrice > 0){
    shipping =12.99;
  }
  const tax =( totalPrice / 10).toFixed(2);
  const grandTotal = totalPrice + shipping + Number(tax);
  const formatNumber = num =>{
    const precision = num.toFixed(2);
    return Number(precision);
  }
  return (
    <div>
      <h4>Order Summary</h4>
      <h5>Items Ordered: {cart.length} </h5>
      <p>Product Price: {formatNumber(totalPrice)}</p>
      <p>Shipping Cost: {shipping}</p>
      <p><small>Tax + Vat: {tax}</small></p>
      <p>Total Price: {grandTotal}</p>
    </div>
  );
};

export default cart;