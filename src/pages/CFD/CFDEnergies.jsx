import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BuySell from "../../Components/BuySell/BuySell";
import CFDInfo from "../../Components/CFD Info/CFDInfo";
import CFDDetails from "../../Components/CFDDetails";
import cfdImg from "../../assets/cfdImg6.png";
const CFDEnergies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="cfdHeading">
        <div className="cfdHeading__wrapper">
          <div className="cfdHeading__content">
            <div className="cfdHeading__content-text">
              <h2>
                Trade CFD’s
                <br /> on Energies
              </h2>
              <p>
                Oil and gas are the two most popular commodities. They are
                traded in heavy volumes around the clock offering multiple
                opportunities to online traders. Whether it is US Crude Oil
                (WTI), Brent Oil (Brent) or Natural Gas (NATGAS.f), energy
                commodities are quoted in USD. At No name 1 you can trade 3 CFDs
                on energies such as Crude Oil, Brent Oil and Natural Gas, with
                very favour able terms.
              </p>
            </div>
          </div>
          <div className="button-container">
            <Link to="/allinstrumentsenergies">
              <button className="button1">Product Specification</button>
            </Link>
            <a href="https://web-trader.online/">
              <button className="button2">Open Account</button>
            </a>
          </div>
        </div>
      </section>
      {/* Details */}
      <CFDDetails
        heading="Trade Different Energies with
No name 1"
        info="Trade 3 CFDs on energies such as Crude Oil, Brent Oil and Natural Gas, with very favour able terms on No name 1's Trading Platform."
        button="PRODUCT LIST"
        to="/allinstrumentsenergies"
        img={cfdImg}
      />
      {/* Info */}
      <CFDInfo />
      {/* Buy Sell */}
      <BuySell />
    </>
  );
};

export default CFDEnergies;
