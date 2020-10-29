import React from "react";

class CartItem extends React.Component {
  render() {
    return (
      <>
        <div>
          <span>{this.props.data.name}</span>
          <button onClick={() => this.props.removeFromCart(this.props.data.id)}>
            remove
          </button>
        </div>
      </>
    );
  }
}

export default CartItem;
