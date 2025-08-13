import React from "react";
import "./wallet.css";
import wallet from "./assets/images/wallet.png";
import { MdContentCopy } from "react-icons/md";
import { AiOutlineGift } from "react-icons/ai";

import WalletTab from "./WalletTab";
import Footer from "./Footer";

const Wallet = () => {
  return (
    <div>
      <div className="container">
        <div className="wallet-card">
          <div className="wallet-balance">
            <p> Balance</p>
            <h5>$ 15 USD</h5>{" "}
            <h5>
              0xC5...9D8E <MdContentCopy />{" "}
            </h5>
            <p>
              <AiOutlineGift />
            </p>
          </div>
          <div className="wallet-img">
            <img src={wallet} alt="" />
          </div>
        </div>
        <WalletTab />
        <Footer />
      </div>
    </div>
  );
};

export default Wallet;
