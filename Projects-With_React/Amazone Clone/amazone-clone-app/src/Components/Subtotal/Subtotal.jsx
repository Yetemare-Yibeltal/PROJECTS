import React from 'react'
import { NumericFormat } from "react-number-format";
import "../Subtotal/Subtotal.css";
import { useStateValue} from '../StateProvider/StateProvider';
function Subtotal() {
   const { state, dispatch } = useStateValue(); 
    const { basket } = state; 
    const getBasketTotal = (basket)=>
      // reduce is default method.
      basket?.reduce((amount,item)=> item.price + amount, 0)
  return (
    <div className='subtotal'>
      <NumericFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal({basket.length} items ) : <strong>{value}</strong>
              <small className="subtotal-gift">
                <input type="checkbox" />
                This order contains a gift
              </small>
            </p>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket )}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$ "}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal
