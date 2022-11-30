import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import forex from "../../assets/forex.png";
import metals from "../../assets/metals.png";
import indices from "../../assets/indices.png";
import equities from "../../assets/shares.png";
import cryptocurrencies from "../../assets/crypto.png";
import energies from "../../assets/energiesActive.png";
import commodities from "../../assets/commodities.png";
const Energies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="allInstruments">
      <div className="allInstruments__wrapper">
        <div className="allInstruments__heading">
          <h2>All instruments</h2>

          <p>
            Below you can find the list of all available media for transactions
            with our CFD service.
          </p>
        </div>
        <div className="allInstruments__content">
          <div className="allInstruments__content-links">
            <div className="allInstruments__content-link">
              <Link to="/allinstrumentsforex">Forex</Link>
              <img src={forex} alt="img" />
            </div>
            <div className="allInstruments__content-link">
              <Link to="/allinstrumentsmetals">Metals</Link>
              <img src={metals} alt="img" />
            </div>
            <div className="allInstruments__content-link">
              <Link to="/allinstrumentsindices">indices</Link>
              <img src={indices} alt="img" />
            </div>
            <div className="allInstruments__content-link">
              <Link to="/allinstrumentsequities">equities</Link>
              <img src={equities} alt="img" />
            </div>
            <div className="allInstruments__content-link">
              <Link to="/allinstrumentscryptocurrencies">cryptocurrencies</Link>
              <img src={cryptocurrencies} alt="img" />
            </div>
            <div className="allInstruments__content-link active">
              <Link to="/allinstrumentsenergies">energies</Link>
              <img src={energies} alt="img" />
            </div>
            <div className="allInstruments__content-link">
              <Link to="/allinstrumentscommodities">commodities</Link>
              <img src={commodities} alt="img" />
            </div>
          </div>
          <div className="allInstruments__table">
            <table className="allInstruments__table-content">
              <thead className="allInstruments__table-content-heading">
                <tr>
                  <th>Symbols</th>
                  <th>Description</th>
                  <th> Currency</th>
                  <th>Nominal Volume</th>
                  <th>Minimum Volume</th>
                  <th>Maximum Volume</th>
                  <th>Volume Step</th>
                  <th>Swap Long In Points</th>
                  <th>Swap Short In Points</th>
                  <th>Trading Hours (Server Time)*</th>
                </tr>
              </thead>
              <tbody className="allInstruments__table-content-body">
                <tr>
                  <td>USOIL.c</td>
                  <td>Crude Oil Brent Cash</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1 Barrel</td>
                  <td>10 Lot</td>
                  <td>10000 Lots</td>
                  <td>1</td>
                  <td>-21.800000</td>
                  <td>-15.890000</td>
                  <td>Mon-Fri 01:00-23:58</td>
                </tr>
                <tr>
                  <td>UKOIL.c</td>
                  <td>West Texas Intermediate Crude Oil cash</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1 Barrel</td>
                  <td>10 Lot</td>
                  <td>10000 Lots</td>
                  <td>1</td>
                  <td>-17.34</td>
                  <td>-26.00</td>
                  <td>Mon-Fri 03:00-23:58</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Energies;
