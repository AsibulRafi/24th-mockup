import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/navbar/Navbar";
import {
  About,
  Accounts,
  Commissions,
  Comparison,
  Home,
  KYC,
  TradingGlossary,
} from "./pages";
import {
  Commodities,
  Cryptocurrencies,
  Energies,
  Equities,
  Forex,
  Indices,
  Metals,
} from "./pages/AllInstruments";
import {
  CFDCommodities,
  CFDCryptocurrencies,
  CFDEnergies,
  CFDEquities,
  CFDForex,
  CFDIndices,
  CFDMetals,
} from "./pages/CFD";
import WebTrade from "./pages/WebTrader";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/kyc" element={<KYC />} />
        <Route path="/tradingglossary" element={<TradingGlossary />} />
        <Route path="/about" element={<About />} />
        <Route path="/webtrade" element={<WebTrade />} />
        <Route path="/commissions" element={<Commissions />} />

        {/* CFD */}
        <Route path="/Forex" element={<CFDForex />} />
        <Route path="/Metals" element={<CFDMetals />} />
        <Route path="/Indices" element={<CFDIndices />} />
        <Route path="/Equities" element={<CFDEquities />} />
        <Route path="/Cryptocurrencies" element={<CFDCryptocurrencies />} />
        <Route path="/Energies" element={<CFDEnergies />} />
        <Route path="/Commodities" element={<CFDCommodities />} />
        {/* All Instruments  */}
        <Route path="/allinstrumentsforex" element={<Forex />} />
        <Route path="/allinstrumentsmetals" element={<Metals />} />
        <Route path="/allinstrumentsindices" element={<Indices />} />
        <Route path="/allinstrumentsequities" element={<Equities />} />
        <Route
          path="/allinstrumentscryptocurrencies"
          element={<Cryptocurrencies />}
        />
        <Route path="/allinstrumentsenergies" element={<Energies />} />
        <Route path="/allinstrumentscommodities" element={<Commodities />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
