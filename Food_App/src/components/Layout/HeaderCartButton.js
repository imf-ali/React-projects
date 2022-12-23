import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CardContext from './../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
  const [buttonAn, setButtonAn] = useState(false);
  const cartCtx = useContext(CardContext);

  const { items } = cartCtx;
  
  const numberOfCartItems = items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${buttonAn ? classes.bump : ''}`;

  useEffect(() => {
    if(items.length === 0) {
      return;
    }
    setButtonAn(true);

    const timer = setTimeout(() => {
      setButtonAn(false);
    }, 300)

    return () => {
      clearTimeout(timer);
    }
  }, [items])
  
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
