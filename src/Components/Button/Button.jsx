import React from "react";
import "./button.css";
const Button = ({ button1, button2 }) => {
  return (
    <div className="button-container">
      <a href="https://web-trader.online/">
        <button className="button1">{button1}</button>
      </a>
      <a href="https://web-trader.online/">
        <button className="button2">{button2}</button>
      </a>
    </div>
  );
};

export default Button;
