import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import forex from "../../assets/forex.png";
import metals from "../../assets/metals.png";
import indices from "../../assets/indices.png";
import equities from "../../assets/sharesActive.png";
import cryptocurrencies from "../../assets/crypto.png";
import energies from "../../assets/energies.png";
import commodities from "../../assets/commodities.png";
const Equities = () => {
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
            <div className="allInstruments__content-link active">
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
                  <th>Nominal Volume</th>
                  <th>Contract Size</th>
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
                  <td>ADSGn</td>
                  <td>Adidas Salomon</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>AIRF</td>
                  <td>Air France – Klm</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>ALVG</td>
                  <td>Allianz AG</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>BABA</td>
                  <td>Alibaba</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>BBVA</td>
                  <td>BBVA</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>BKIA</td>
                  <td>Bankia SA</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>BMWG</td>
                  <td>(BMW) Bay Mot Werke</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>BNPP</td>
                  <td>BNP Paribas</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>DAIGn</td>
                  <td>Daimler AG</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>DANO</td>
                  <td>Danone</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>DBKGn</td>
                  <td>Deutsche Bank</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>DPWGn</td>
                  <td>Deutsche Post</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>EONGn</td>
                  <td>E.On AG</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>IBE</td>
                  <td>IBERDROLA</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>LHAG</td>
                  <td>DT Lufthansa</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>LVMH</td>
                  <td>L.V.M.H.</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>MAP</td>
                  <td>MAPFRE</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>SAN</td>
                  <td>Banco Santander</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>SIEGn</td>
                  <td>Siemens</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>SOGN</td>
                  <td>Societe Generale</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>TEF</td>
                  <td>TELEFONICA</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>TOTF</td>
                  <td>Total</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>VOWG_p</td>
                  <td>Volkswagen AG</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>CBKG</td>
                  <td>Commerzbank AG</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 10:00-18:00</td>
                </tr>
                <tr>
                  <td>AAPL</td>
                  <td>Apple</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>AXP</td>
                  <td>American Express</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>MSFT</td>
                  <td>American Express</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>AMZN</td>
                  <td>American Express</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-36</td>
                  <td>-36</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>BA</td>
                  <td>Boeing</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>BAC</td>
                  <td>Bank Of America</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>BAYGn</td>
                  <td>Bayer AG</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>CSCO</td>
                  <td>Cisco Systems</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>CVX</td>
                  <td>Chevron</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>FB</td>
                  <td>Facebook</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>FDX</td>
                  <td>Fedex</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>GE</td>
                  <td>General Electric</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>GOOG</td>
                  <td>Alphabet Inc Class C</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>GS</td>
                  <td>Goldman Sachs Group</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>HLT</td>
                  <td>Hilton Worldwide</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>HPQ</td>
                  <td>HP Inc</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>ILMN</td>
                  <td>Illumina</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>INTC</td>
                  <td>Intel</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>KO</td>
                  <td>Coca-Cola</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>MA</td>
                  <td>Mastercard Cl A</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>MCD</td>
                  <td>McDonalds</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>NFLX</td>
                  <td>Netflix</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>ORCL</td>
                  <td>Oracle</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>PFE</td>
                  <td>Pfizer</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>PG</td>
                  <td>Procter &amp;Gamb</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>QCOM</td>
                  <td>Qualcomm</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>RACE</td>
                  <td>Ferrari</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>T</td>
                  <td>At&amp;T</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>TSLA</td>
                  <td>Tesla Motors</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>TWTR</td>
                  <td>Twitter</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>V</td>
                  <td>Visa</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-20.000000</td>
                  <td>-20.000000</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>XOM</td>
                  <td>Exxon Mobil</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>F</td>
                  <td>Ford Motor</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>C</td>
                  <td>Citigroup</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>UBER.N</td>
                  <td>Uber</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>10 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
                <tr>
                  <td>COIN</td>
                  <td>Coinbase Global Inc</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Stock Price</td>
                  <td>1 Lot</td>
                  <td>1000 Lots</td>
                  <td>1</td>
                  <td>-13</td>
                  <td>-13</td>
                  <td>Mon-Fri 16:30-23:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equities;
