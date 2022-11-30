import React from "react";
import { Link } from "react-router-dom";

const CFDDetails = ({ heading, info, button, to, img }) => {
  return (
    <section className="cfdDetails">
      <div className="cfdDetails__content">
        <div className="cfdDetails__content-img">
          <img src={img} alt="CFD" />
        </div>
        <div className="cfdDetails__content-info">
          <h4>{heading}</h4>
          <p>{info}</p>
          <Link to={`${to}`}>
            <button>{button}</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CFDDetails;
