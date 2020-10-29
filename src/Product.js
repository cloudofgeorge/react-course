import React from "react";
import styles from "./Product.module.scss";

class Product extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.inCart !== this.props.inCart;
  }

  render() {
    const classNames = [styles.product];

    if (this.props.inCart) {
      classNames.push(styles.inCart);
    }
    return (
      <div className={classNames.join(" ")}>
        <div>Product: {this.props.name}</div>
        <div>Count: {this.props.count}</div>
        <div>description: {this.props.children}</div>
        <button onClick={this.props.addToCart}>Buy</button>
      </div>
    );
  }
}

export default Product;
