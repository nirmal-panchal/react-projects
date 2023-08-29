import React from "react";
import styles from "./Button.module.css";

const Button = ({ isOutline, text, icon, ClickHandler, clkVal }) => {
  const click = (data) => {
    ClickHandler && ClickHandler(data);
  };
  return (
    <button
      className={`${isOutline ? styles.outline_btn : styles.primary_btn}`}
      onClick={() => click(clkVal)}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
