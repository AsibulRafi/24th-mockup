import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import forex from "../../assets/forex.png";
import metals from "../../assets/metals.png";
import indices from "../../assets/indices.png";
import equities from "../../assets/shares.png";
import cryptocurrencies from "../../assets/cryptoActive.png";
import energies from "../../assets/energies.png";
import commodities from "../../assets/commodities.png";
const Cryptocurrencies = () => {
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
            <div className="allInstruments__content-link active">
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
                  <th>Position Size Per Lot</th>
                  <th>1 Pip Value Per Lot</th>
                  <th>Minimum Volume</th>
                  <th>Maximum Volume</th>
                  <th>Volume Step</th>
                  <th>Swap Long In By Interest</th>
                  <th>Swap Short In By Interest</th>
                  <th>Trading Hours (Server Time)*</th>
                </tr>
              </thead>
              <tbody className="allInstruments__table-content-body">
                <tr>
                  <td>BTCUSD</td>
                  <td>BITCOIN VS USD</td>
                  <td>1 USD</td>
                  <td>1</td>
                  <td>0.01 Lots</td>
                  <td>100 Lots</td>
                  <td>0,1</td>
                  <td>-100</td>
                  <td>-100</td>
                  <td>Mon-Sun 00:00-24:00</td>
                </tr>
                <tr>
                  <td>BTCEUR</td>
                  <td>BITCOIN VS EURO</td>
                  <td>1 USD</td>
                  <td>1</td>
                  <td>0.01 Lots</td>
                  <td>100 Lots</td>
                  <td>0,1</td>
                  <td>-100</td>
                  <td>-100</td>
                  <td>Mon-Sun 00:00-24:00</td>
                </tr>
                <tr>
                  <td>BTCGBP</td>
                  <td>BITCOIN VS GBP</td>
                  <td>1 USD</td>
                  <td>1</td>
                  <td>0.01 Lots</td>
                  <td>100 Lots</td>
                  <td>0,1</td>
                  <td>-100</td>
                  <td>-100</td>
                  <td>Mon-Sun 00:00-24:00</td>
                </tr>
                <tr>
                  <td>LTCUSD</td>
                  <td>LITECOIN VS USD</td>
                  <td>1 USD</td>
                  <td>1</td>
                  <td>0.01 Lots</td>
                  <td>100 Lots</td>
                  <td>0,1</td>
                  <td>-400</td>
                  <td>-400</td>
                  <td>Mon-Sun 00:00-24:00</td>
                </tr>
                <tr>
                  <td>LTCEUR</td>
                  <td>LITECOIN VS EURO</td>
                  <td>1 USD</td>
                  <td>1</td>
                  <td>0.01 Lots</td>
                  <td>100 Lots</td>
                  <td>0,1</td>
                  <td>-100</td>
                  <td>-100</td>
                  <td>Mon-Sun 00:00-24:00</td>
                </tr>
                <tr>
                  <td>ETHUSD</td>
                  <td>Ethereum VS USD</td>
                  <td>1 USD</td>
                  <td>1</td>
                  <td>0.01 Lots</td>
                  <td>100 Lots</td>
                  <td>0,1</td>
                  <td>-100</td>
                  <td>-100</td>
                  <td>Mon-Sun 00:00-24:00</td>
                </tr>
                <tr>
                  <td>ETHEUR</td>
                  <td>Ethereum VS Euro</td>
                  <td>1 USD</td>
                  <td>1</td>
                  <td>0.01 Lots</td>
                  <td>100 Lots</td>
                  <td>0,1</td>
                  <td>-100</td>
                  <td>-100</td>
                  <td>Mon-Sun 00:00-24:00</td>
                </tr>
                <tr>
                  <td>ETHGBP</td>
                  <td>Ethereum VS GBP</td>
                  <td>1 USD</td>
                  <td>1</td>
                  <td>0.01 Lots</td>
                  <td>100 Lots</td>
                  <td>0,1</td>
                  <td>-100</td>
                  <td>-100</td>
                  <td>Mon-Sun 00:00-24:00</td>
                </tr>
                <tr>
                  <td>XRPUSD</td>
                  <td>Ripple vs. USD</td>
                  <td>1 USD</td>
                  <td>1</td>
                  <td>1 Lots</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-200</td>
                  <td>-150</td>
                  <td>Mon-Sun 00:00-24:00</td>
                </tr>
                <tr>
                  <td>NEOUSD</td>
                  <td>NEO VS USD</td>
                  <td>1 USD</td>
                  <td>1</td>
                  <td>1 Lots</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-100</td>
                  <td>-100</td>
                  <td>Mon-Sun 00:00-24:00</td>
                </tr>
                <tr>
                  <td>XMRUSD</td>
                  <td>MONERO VS USD</td>
                  <td>1 USD</td>
                  <td>1</td>
                  <td>1 Lots</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-100</td>
                  <td>-100</td>
                  <td>Mon-Sun 00:00-24:00</td>
                </tr>
                <tr>
                  <td>ZECUSD</td>
                  <td>ZCASH VS USD</td>
                  <td>1 USD</td>
                  <td>1</td>
                  <td>1 Lots</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-100</td>
                  <td>-100</td>
                  <td>Mon-Sun 00:00-24:00</td>
                </tr>
                <tr>
                  <td>DASHUSD</td>
                  <td>DASH VS USD</td>
                  <td>1 USD</td>
                  <td>1</td>
                  <td>1 Lots</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-100</td>
                  <td>-100</td>
                  <td>Mon-Sun 00:00-24:00</td>
                </tr>
                <tr>
                  <td>EDOUSD</td>
                  <td>EIDOO VS USD</td>
                  <td>1 USD</td>
                  <td>1</td>
                  <td>1 Lots</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-100</td>
                  <td>-100</td>
                  <td>Mon-Sun 00:00-24:00</td>
                </tr>
                <tr>
                  <td>EOSUSD</td>
                  <td>EOS VS USD</td>
                  <td>1 USD</td>
                  <td>1</td>
                  <td>1 Lots</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-100</td>
                  <td>-100</td>
                  <td>Mon-Sun 00:00-24:00</td>
                </tr>
                <tr>
                  <td>ETPUSD</td>
                  <td>METAVERSE ETP VS USD</td>
                  <td>1 USD</td>
                  <td>1</td>
                  <td>1 Lots</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-100</td>
                  <td>-100</td>
                  <td>Mon-Sun 00:00-24:00</td>
                </tr>
                <tr>
                  <td>IOTAUSD</td>
                  <td>IOTA VS USD</td>
                  <td>1 USD</td>
                  <td>1</td>
                  <td>1 Lots</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-100</td>
                  <td>-100</td>
                  <td>Mon-Sun 00:00-24:00</td>
                </tr>
                <tr>
                  <td>OMGUSD</td>
                  <td>OmiseGO VS USD</td>
                  <td>1 USD</td>
                  <td>1</td>
                  <td>1 Lots</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-100</td>
                  <td>-100</td>
                  <td>Mon-Sun 00:00-24:00</td>
                </tr>
                <tr>
                  <td>SANUSD</td>
                  <td>SANTIMENT NETWORK VS USD</td>
                  <td>1 USD</td>
                  <td>1</td>
                  <td>1 Lots</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-100</td>
                  <td>-100</td>
                  <td>Mon-Sun 00:00-24:00</td>
                </tr>
                <tr>
                  <td>ADAUSD</td>
                  <td>CARDANO VS USD</td>
                  <td>1 USD</td>
                  <td>1</td>
                  <td>1 Lots</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-100</td>
                  <td>-100</td>
                  <td>Mon-Sun 00:00-24:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cryptocurrencies;
