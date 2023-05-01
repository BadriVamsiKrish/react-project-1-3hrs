import React,{Fragment} from 'react';
import classes from './HeaderCartButton.module.css';
import iconImage from '../../Assets/icons8-shopping-cart.jpg'

const HeaderCartButton = () => {
  return (
    <Fragment>
      <button className={classes.button}>
        <span><img src={iconImage} alt='icon'/></span> 
        <span>
          your cart
        </span>
        <span className={classes.badge}>3</span>
      </button>
    </Fragment>
  )
}

export default HeaderCartButton;