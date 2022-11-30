import React from "react";
import { Link } from "react-router-dom";
import ssl from "../assets/ssl.png";
import cloud from "../assets/cloud.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import whatsapp from "../assets/whatsapp.png";
import viber from "../assets/viber.png";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__content">
          <div className="footer__icon">
            <div className="footer__logo">
              <img src={logo} alt="logo" />
              <p>
                Copyright @2016-2022 TechCapitals
                <br /> All rights resevred
              </p>
            </div>
            <div className="footer__social">
              <img src={facebook} alt="socialIcon" />
              <img src={insta} alt="socialIcon" />
              <img src={whatsapp} alt="socialIcon" />
              <img src={viber} alt="socialIcon" />
            </div>
            <div className="footer__payment">
              <h2>Website Secured With:</h2>
              <div>
                <img src={ssl} alt="ssl" />
                <img src={cloud} alt="cloud" />
              </div>
            </div>
          </div>
          <div className="footer__info">
            <div className="footer__links">
              <div className="footer__links-1">
                <h4>ABOUT</h4>
                <ul className="footer__links-list">
                  <li>
                    <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                      About US
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={() => window.scrollTo(0, 1000)}>
                      Contact US
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer__links-2">
                <h4>Trading</h4>
                <ul className="footer__links-list">
                  <li>
                    <Link to="/Forex">CFDs on Forex</Link>
                  </li>
                  <li>
                    <Link to="/Metals">CFDs on Metals</Link>
                  </li>
                  <li>
                    <Link to="/Indices">CFDs Indices</Link>
                  </li>
                  <li>
                    <Link to="/Equities">CFDs on Equities</Link>
                  </li>
                  <li>
                    <Link to="/Cryptocurrencies">CFDs Cryptocurrencies</Link>
                  </li>
                  <li>
                    <Link to="/Energies">CFDs on Energies</Link>
                  </li>
                  <li>
                    <Link to="/Commodities">CFDs on Commodities</Link>
                  </li>
                  <li>
                    <Link to="/commissions"> Commissions and swaps</Link>
                  </li>
                </ul>
              </div>
              <div className="footer__links-3">
                <h4>ACCOUNTS</h4>
                <ul className="footer__links-list">
                  <li>
                    <Link to="/accounts">Account types</Link>
                  </li>
                  <li>
                    <Link to="/comparison">Account Comparison</Link>
                  </li>
                  <li>
                    <Link to="/kyc">KYC Guide</Link>
                  </li>
                </ul>
              </div>
              <div className="footer__links-4">
                <h4>Tools</h4>
                <ul className="footer__links-list">
                  <li>
                    <Link
                      to="/tradingglossary"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Trading Glossary
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tradingglossary"
                      onClick={() => window.scrollTo(0, 1000)}
                    >
                      Economical Calendar
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <h4 className="footer__info-header">RISK WARNING</h4>
            <hr />
            <div className="footer__info-text">
              <p>
                Trading in Forex and CFDs carries a high level of risk and can
                result in the loss of part or all of your investment. Trading in
                Forex and CFDs may not be appropriate for all investors. You
                should be aware of all the risks associated with Forex and CFD
                trading and seek for independent advice. Past performance does
                not constitute a reliable indication of future results.
                Forecasts for the future do not constitute a reliable indicator
                of future performance. Copyright for the pages and for the
                screens displaying the pages, and for the information, material
                and their arrangement, is owned by TechCapitals all rights
                reserved.
              </p>
              <p>
                This information is intended for investors outside the United
                States who are not US/Japanese citizens and residents. This
                website is intended for informational purposes only. This
                website is not directed at any jurisdiction and is not intended
                for any use that would be contrary to local law or regulation.
                The products described on this are not offered and may not be
                sold in the United States/Japan or to US/Japanese citizens and
                residents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
