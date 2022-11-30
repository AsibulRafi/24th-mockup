import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Accounts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="accounts__heading">
        <div className="accounts__heading-wrapper">
          <div className="accounts__heading-content">
            <h2>Accounts Types</h2>
            <p>
              We present our customers with an account selection that can
              satisfy each trader's needs and preferences. Our team has thought
              about even the smallest of details and produced different account
              types so you can select the one that best suits your needs. There
              are different accounts to choose from and each one has its
              benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Account Funding */}
      <section className="accountFunding">
        <div className="accountFunding__wrapper">
          <div className="accountFunding__heading">
            <h2>Account Funding</h2>
            <p>There are 3 different ways to fund your Cryptoco Account:</p>
          </div>
          <div className="accountFunding__content">
            <div className="accountFunding__content-infos">
              {/* 1. Credit Card/Debit Card */}
              <div className="accountFunding__content-info-1">
                <h4>1. Credit Card/Debit Card</h4>
                <p>
                  The best way to fund your account is with a credit or debit
                  card. The transfer is immediate and secure. Minimum
                  transaction amount $250 with a maximum amount $500. Please not
                  your card should be enabled for international transactions.
                </p>
              </div>
              {/* 2. Bank Draft */}
              <div className="accountFunding__content-info-2">
                <h4>2. Bank Draft</h4>
                <p>
                  You can utilize your banks services and transfer funds using a
                  bank draft. Please note that in some cases it might take up to
                  5 days for your funds to clear.
                </p>
              </div>
              {/* Wire Transfer */}
              <div className="accountFunding__content-info-3">
                <h4>3. Wire Transfer</h4>
                <p>
                  Please use the details provided by your Senior Broker. If you
                  have online banking you can input the details provided online,
                  or visit your bank and fill in the wire transfer form. Please
                  remember to provide your Senior Broker the remittance slip.
                  Depending on your bank your funds might take up to 5 days to
                  clear. As soon as the funds are in your trading account you
                  will receive an email notification.
                </p>
              </div>
            </div>
            <div className="accountFunding__content-text">
              <div className="accountFunding__content-text-1">
                <h2>Withdrawing Funds</h2>
                <p>In order to submit a withdrawal request you need to:</p>
                <p>
                  Log in to your account in your client area and submit a
                  withdrawal request.
                </p>
                <p>
                  Your request will be addressed and processed promptly.
                  Usually, provided the account is verified the request is
                  process within the next 2 business days. Depending on your
                  bank, your funds might take longer to appear in your bank
                  account.
                </p>
              </div>
              <div className="accountFunding__content-text-2">
                <h2>Things you should take into account:</h2>
                <p>In order to submit a withdrawal request you need to:</p>
                <div className="accountFunding__content-text-div">
                  <i className="fas fa-circle"></i>
                  <p>
                    The initial amount invested will be returned through the
                    same method deposited. If the requested amount exceeds the
                    initial invested amount, you need to provide us with the
                    bank account details of an account under your name, in order
                    to receive the excess amount
                  </p>
                </div>
                <div className="accountFunding__content-text-div">
                  <i className="fas fa-circle"></i>
                  <p>
                    For further inquiries regarding funding please contact us on
                    supportNoname1.com or through our live chat.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Link to="/about" onClick={() => window.scrollTo(0, 1200)}>
            <button className="accountFunding__content-btn">
              Get In Touch
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Accounts;
