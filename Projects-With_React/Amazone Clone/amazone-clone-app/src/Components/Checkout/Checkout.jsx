import React from "react";
import "../Checkout/Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider/StateProvider";
function Checkout() {
  const { state, dispatch } = useStateValue();
  const { basket } = state;
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-add"
          src="https://images.ctfassets.net/wowgx05xsdrr/8gI1Xg0G9RvLrhjhMMpzD/58e4e653a245fd40d2f897b95006120b/checkout-optimization-header.jpg?fm=webp&w=3840&q=75
 "
          alt=""
        />
        <h3>Hello</h3>
        <h2 className="checkout-title">Your shoping Basket</h2>
        {basket.map((item) => (
          <CheckoutProduct
  id={item.id}
  title={item.title}
  image={item.image} 
  price={item.price}
  rating={item.rating}
/>

        ))}
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
