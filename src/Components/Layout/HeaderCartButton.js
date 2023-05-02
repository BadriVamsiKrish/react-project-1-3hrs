import React,{Fragment} from 'react';
import classes from './HeaderCartButton.module.css';
import iconImage from '../../Assets/icons8-shopping-trolley-64.png'

const HeaderCartButton = (props) => {
  return (
    <Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span><img src={iconImage} alt='icon'/></span> 
        <span>
          Your cart
        </span>
        <span className={classes.badge}>3</span>
      </button>
    </Fragment>
  )
}

export default HeaderCartButton;