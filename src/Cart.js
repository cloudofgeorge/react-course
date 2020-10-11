import React from "react";
import CartItem from "./Cart-item";

class Cart extends React.Component {
  render() {
    return (
      <>
        <div>Cart:</div>
        {this.props.data.map((item) => (
          <CartItem
            key={item.id}
            data={item}
            removeFromCart={this.props.removeFromCart}
          />
        ))}
      </>
    );
  }
}

export default Cart;
