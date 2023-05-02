import React,{Fragment,useContext} from 'react';
import CartContext from '../../store/Cart-Context';
import classes from './HeaderCartButton.module.css';
import iconImage from '../../Assets/icons8-shopping-trolley-64.png'

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount;
  },0);

  return (
    <Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span><img src={iconImage} alt='icon'/></span> 
        <span>
          Your cart
        </span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </Fragment>
  )
}

export default HeaderCartButton;