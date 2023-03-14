import React from "react";
import classes from "./Fees.module.css";
const Fees = ({ fees }) => {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <div className={classes.textStart}>Fees</div>
        <div className={classes.textEnd}>{fees?.from_visitors_count}$</div>
      </div>
      <hr />
    </div>
  );
};

export default Fees;
