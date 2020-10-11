import React from "react";

class CartItem extends React.Component {
  componentWillUnmount() {
    console.log("CartItem - component will unmount");
  }

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
