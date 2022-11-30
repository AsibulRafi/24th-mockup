import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import forex from "../../assets/forex.png";
import metals from "../../assets/metals.png";
import indices from "../../assets/indices.png";
import equities from "../../assets/shares.png";
import cryptocurrencies from "../../assets/crypto.png";
import energies from "../../assets/energies.png";
import commodities from "../../assets/commoditiesActive.png";
const Commodities = () => {
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
            <div className="allInstruments__content-link">
              <Link to="/allinstrumentsenergies">energies</Link>
              <img src={energies} alt="img" />
            </div>
            <div className="allInstruments__content-link active">
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
                  <td>COCOA</td>
                  <td>Cocoa CFD contract</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*10 Metric Tons</td>
                  <td>1 Lots</td>
                  <td>500 Lots</td>
                  <td>0,1</td>
                  <td>-3.445</td>
                  <td>-8.804</td>
                  <td>Mon-Fri 11:45-20:30</td>
                </tr>
                <tr>
                  <td>COFFEE</td>
                  <td>Coffee CFD contract</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*375 LB</td>
                  <td>1 Lots</td>
                  <td>500 Lots</td>
                  <td>0,1</td>
                  <td>-1.579</td>
                  <td>-0.416</td>
                  <td>Mon-Fri 11:15-20:30</td>
                </tr>
                <tr>
                  <td>NATGAS.f</td>
                  <td>Natural Gas CFD contract</td>
                  <td>USD</td>
                  <td>10000</td>
                  <td>1 Lots</td>
                  <td>500 Lots</td>
                  <td>0.10</td>
                  <td>-0.14</td>
                  <td>-0.12</td>
                  <td>Mon-Fri 01:00 - 24:00</td>
                </tr>
                <tr>
                  <td>SOYBEAN</td>
                  <td>Soybean CFD contract</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*50 Bushels</td>
                  <td>1 Lots</td>
                  <td>500 Lots</td>
                  <td>0,1</td>
                  <td>-13.595</td>
                  <td>-3.578</td>
                  <td>Mon-Fri 03:15:45, 16:30-21:15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commodities;
