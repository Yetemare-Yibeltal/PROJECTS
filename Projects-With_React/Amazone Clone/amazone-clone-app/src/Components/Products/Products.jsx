import React from "react";
import "../../Components/Products/Products.css";
import { useStateValue } from "../StateProvider/StateProvider";
function Products({ id, title, image, price, rating }) {
  const {state, dispatch} = useStateValue();
  const {basket} = state;
  // console.log("this is basket", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image:image,
        title: title,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$ {" "}</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map(() => {
              return <p className="star">&#9733;</p>;
            })}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Products;
