import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

import giftImage from "./gifts.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Gift Shop</h1>
        <input
          type="text"
          style={{ width: 350, height: 30 }}
          placeholder="Search a product"
        />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={giftImage} alt="A collection of gifts" />
      </div>
    </Fragment>
  );
};

export default Header;
