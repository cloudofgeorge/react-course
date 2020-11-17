import React from "react";
import styles from "./cart.module.scss";
import { CartContext } from "../../../../context";

class CartView extends React.Component {
  state = {
    isShow: false,
  };

  toggleWindow = () => {
    const { productsInCart } = this.context;

    if (productsInCart && productsInCart.length) {
      this.setState((prevState) => ({ isShow: !prevState.isShow }));
    }
  };

  render() {
    const { productsInCart, removeFromCart } = this.context;
    const { isShow } = this.state;
    return (
      <div className={styles.cart}>
        <button
          onClick={this.toggleWindow}
          disabled={productsInCart.length === 0}
        >
          cart {productsInCart.length > 0 && productsInCart.length}
        </button>

        {isShow && productsInCart.length > 0 && (
          <div className={styles.cartWindow}>
            {productsInCart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <span className={styles.cartItemName}>{item.title}</span>
                <button onClick={() => removeFromCart(item)}>x</button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

CartView.contextType = CartContext;

export const Cart = CartView;
