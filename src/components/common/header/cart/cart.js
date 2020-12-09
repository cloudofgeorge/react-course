import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './cart.module.scss';
import { removeCartItemAction, getCartData } from '../../../../store/cart';

export const Cart = () => {
  const [isShow, setIsShow] = useState(false);

  const cartData = useSelector(getCartData);

  const dispatch = useDispatch();
  const removeCartItem = useCallback(item => dispatch(removeCartItemAction(item)), [dispatch]);

  const toggleWindow = () => {
    if (cartData && cartData.length) {
      setIsShow(!isShow);
    }
  };

  return (
    <div className={styles.cart}>
      <button onClick={toggleWindow} disabled={cartData.length === 0}>
        cart {cartData.length > 0 && cartData.length}
      </button>

      {isShow && cartData.length > 0 && (
        <div className={styles.cartWindow}>
          {cartData.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <span className={styles.cartItemName}>{item.title}</span>
              <button onClick={() => removeCartItem(item)}>x</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
