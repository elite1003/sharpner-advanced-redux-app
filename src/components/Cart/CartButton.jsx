import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cart";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
