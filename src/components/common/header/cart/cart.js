import React from "react";
import styles from "./cart.module.scss";
import { removeCartItemAction } from "../../../../store/cart";
import { connect } from "react-redux";
import { getCartData } from "../../../../store/cart";

class CartView extends React.Component {
  state = {
    isShow: false,
  };

  toggleWindow = () => {
    const { cartData } = this.props;

    if (cartData && cartData.length) {
      this.setState((prevState) => ({ isShow: !prevState.isShow }));
    }
  };

  render() {
    const { isShow } = this.state;
    const { cartData, removeCartItem } = this.props;

    return (
      <div className={styles.cart}>
        <button onClick={this.toggleWindow} disabled={cartData.length === 0}>
          cart {cartData.length > 0 && cartData.length}
        </button>

        {isShow && cartData.length > 0 && (
          <div className={styles.cartWindow}>
            {cartData.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <span className={styles.cartItemName}>{item.title}</span>
                <button onClick={() => removeCartItem(item)}>x</button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartData: getCartData(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeCartItem: (catalogName) => dispatch(removeCartItemAction(catalogName)),
});

export const Cart = connect(mapStateToProps, mapDispatchToProps)(CartView);
