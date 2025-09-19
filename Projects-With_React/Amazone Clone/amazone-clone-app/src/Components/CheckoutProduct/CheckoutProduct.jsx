import React from "react";
import "../CheckoutProduct/CheckoutProduct.css";
import { useStateValue } from "../StateProvider/StateProvider";
function CheckoutProduct({ id, image, title, price, rating }) {
  const {state, dispatch} = useStateValue();
  const { basket } = state;
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  console.log("Image source:", image);

  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct-image"
        src={image}
        alt="checkoutProduct image"
      />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map(() => {
              return <p className="star">&#9733;</p>;
            })}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button> 
      </div>
    </div>
  );
}


export default CheckoutProduct;
