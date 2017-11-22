import React from "react";
import classes from "./Menu.css";

const Menu = props => (
  <div className={classes.Menu} onClick={props.clicked}>
    <span />
    <span />
    <span />
  </div>
);

export default Menu;
