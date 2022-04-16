import classes from "./GiftItem.module.css";
import GiftItemForm from "./GiftItemForm";
import { useContext } from "react";
import CartContext from "../../../container/CartContext";

const GiftItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.gift}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <GiftItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default GiftItem;
