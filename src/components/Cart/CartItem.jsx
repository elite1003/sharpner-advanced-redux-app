import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
const CartItem = (props) => {
  const { title, quantity, totalPrice, price } = props.item;
  const { id } = props;
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItem({
        id,
        price,
        title,
      })
    );
  };
  const removeFromCartHandler = () => {
    dispatch(cartActions.removeItem(id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
