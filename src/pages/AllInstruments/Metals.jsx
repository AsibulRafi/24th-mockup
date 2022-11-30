import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import forex from "../../assets/forex.png";
import metals from "../../assets/metalsActive.png";
import indices from "../../assets/indices.png";
import equities from "../../assets/shares.png";
import cryptocurrencies from "../../assets/crypto.png";
import energies from "../../assets/energies.png";
import commodities from "../../assets/commodities.png";
const Metals = () => {
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
            <div className="allInstruments__content-link active">
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
                  <th>Lot Size Per 1Lot</th>
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
                  <td>XAGUSD</td>
                  <td>Silver vs US Dollar</td>
                  <td>USD</td>
                  <td>5000 Oz</td>
                  <td>0.05 Lot</td>
                  <td>100 Lot</td>
                  <td>0,01</td>
                  <td>-2.800000</td>
                  <td>-2.400000</td>
                  <td>Mon-Fri 01:00-23:59</td>
                </tr>
                <tr>
                  <td>XAUUSD</td>
                  <td>Gold vs US Dollar</td>
                  <td>USD</td>
                  <td>100 Oz</td>
                  <td>0.05 Lot</td>
                  <td>100 Lot</td>
                  <td>0,01</td>
                  <td>-38.500000</td>
                  <td>-37.540000</td>
                  <td>Mon-Fri 01:00-23:59</td>
                </tr>
                <tr>
                  <td>XAUEUR</td>
                  <td>Gold vs. Euro</td>
                  <td>EUR</td>
                  <td>100 Oz</td>
                  <td>0.05 Lot</td>
                  <td>100 Lot</td>
                  <td>0,01</td>
                  <td>-38.500000</td>
                  <td>-37.540000</td>
                  <td>Mon-Fri 01:00-23:59</td>
                </tr>
                <tr>
                  <td>XAUAUD</td>
                  <td>Gold vs Austrlian Dollar</td>
                  <td>AUD</td>
                  <td>100 Oz</td>
                  <td>0.05 Lot</td>
                  <td>100 Lot</td>
                  <td>0,01</td>
                  <td>-38.500000</td>
                  <td>-37.540000</td>
                  <td>Mon-Fri 01:00-23:59</td>
                </tr>

                <tr>
                  <td>XAGEUR</td>
                  <td>Silver vs. Euro</td>
                  <td>EUR</td>
                  <td>5000 Oz</td>
                  <td>0.05 Lot</td>
                  <td>100 Lot</td>
                  <td>0,01</td>
                  <td>-1.96</td>
                  <td>-0.93</td>
                  <td>Mon-Fri 01:00-23:59</td>
                </tr>

                <tr>
                  <td>XPDUSD</td>
                  <td>Palladium</td>
                  <td>USD</td>
                  <td>100 Oz</td>
                  <td>0.05 Lot</td>
                  <td>100 Lot</td>
                  <td>0,01</td>
                  <td>-13</td>
                  <td>-23</td>
                  <td>Mon-Fri 01:00-23:59</td>
                </tr>
                <tr>
                  <td>XPTUSD</td>
                  <td>Platinum</td>
                  <td>USD</td>
                  <td>100 Oz</td>
                  <td>0.05 Lot</td>
                  <td>100 Lot</td>
                  <td>0,01</td>
                  <td>-6</td>
                  <td>-10</td>
                  <td>Mon-Fri 01:00-23:59</td>
                </tr>
                <tr>
                  <td>CPPR.f</td>
                  <td>Copper CFD contract</td>
                  <td>USD</td>
                  <td>25000 CPU</td>
                  <td>0.05 Lot</td>
                  <td>100 Lot</td>
                  <td>0,01</td>
                  <td>-4.048</td>
                  <td>-1.065</td>
                  <td>Mon-Fri 01:00-23:59</td>
                </tr>
                <tr>
                  <td>XAGAUD</td>
                  <td>Silver vs Austrlian Dollar</td>
                  <td>AUD</td>
                  <td>5000 Oz</td>
                  <td>0.05 Lot</td>
                  <td>100 Lot</td>
                  <td>0,01</td>
                  <td>-1.96</td>
                  <td>-0.93</td>
                  <td>Mon-Fri 01:00-23:59</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metals;
