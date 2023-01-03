import { useSelector } from "react-redux";

import Card from "../UI/Card";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  const cartItems = items.map((item) => (
    <CartItem
      key={item.id}
      item={{
        id: item.id,
        title: item.name,
        quantity: item.quantity,
        total: item.totalPrice,
        price: item.price,
      }}
    />
  ));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItems}</ul>
    </Card>
  );
};

export default Cart;
