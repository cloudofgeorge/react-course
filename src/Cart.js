import React from "react";
import CartItem from "./Cart-item";
import styles from "./Cart.module.scss";

class Cart extends React.Component {
  render() {
    // Fake error
    throw new Error("");
    return (
      <div className={styles.cart}>
        <div>Cart:</div>
        {this.props.data.map((item) => (
          <CartItem
            key={item.id}
            data={item}
            removeFromCart={this.props.removeFromCart}
          />
        ))}
      </div>
    );
  }
}

export default Cart;
