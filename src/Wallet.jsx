import React from "react";
import "./wallet.css";
import wallet from "./assets/images/wallet.png";
import { MdContentCopy } from "react-icons/md";
import { AiOutlineGift } from "react-icons/ai";
import Bitcoin from "./assets/images/Bitcoin.png";
import ETH from "./assets/images/ETH.png";
import solana from "./assets/images/Solana.png";
import bsc from "./assets/images/BSC.png";
import ripple from "./assets/images/RIPPLE.png";
import lite from "./assets/images/lite.png";
import uni from "./assets/images/uni.png";

const Wallet = () => {
  return (
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
      <div className="tabs">
        <div className="tab">Currencies</div>
        <div className="tab inactive">Inflows</div>
        <div className="tab inactive">Outflows</div>
      </div>
      <div className="crypto-list">
        <div style={{ marginBottom: 20 }} className="crypto-item">
          <div style={{ display: "flex", gap: 5 }} className="crypto-left">
            <img
              style={{ width: 34, position: "relative", top: 5, height: 34 }}
              src={Bitcoin}
              alt=""
            />
            Bitcoin <br />
            BTC
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
            className="crypto-right"
          >
            <div className="crypto-price">$87,325</div>
            <div className="crypto-id">02</div>
          </div>
        </div>
      </div>
      <div className="crypto-list">
        <div style={{ marginBottom: 20 }} className="crypto-item">
          <div style={{ display: "flex", gap: 5 }} className="crypto-left">
            <img
              style={{ width: 34, position: "relative", top: 5, height: 34 }}
              src={ETH}
              alt=""
            />
            Ethereum
            <br />
            ETH
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
            className="crypto-right"
          >
            <div className="crypto-price">$2,022.98</div>
            <div className="crypto-id">02</div>
          </div>
        </div>
      </div>
      <div className="crypto-list">
        <div style={{ marginBottom: 20 }} className="crypto-item">
          <div style={{ display: "flex", gap: 5 }} className="crypto-left">
            <img
              style={{ width: 34, position: "relative", top: 5, height: 34 }}
              src={solana}
              alt=""
            />
            Solana <br />
            SOL
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
            className="crypto-right"
          >
            <div className="crypto-price">$138.39</div>
            <div className="crypto-id">07</div>
          </div>
        </div>
      </div>
      <div className="crypto-list">
        <div style={{ marginBottom: 20 }} className="crypto-item">
          <div style={{ display: "flex", gap: 5 }} className="crypto-left">
            <img
              style={{ width: 34, position: "relative", top: 5, height: 34 }}
              src={bsc}
              alt=""
            />
            Binance
            <br />
            BSC
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
            className="crypto-right"
          >
            <div className="crypto-price">$635.26</div>
            <div className="crypto-id">04</div>
          </div>
        </div>
      </div>
      <div className="crypto-list">
        <div style={{ marginBottom: 20 }} className="crypto-item">
          <div style={{ display: "flex", gap: 5 }} className="crypto-left">
            <img
              style={{ width: 34, position: "relative", top: 5, height: 34 }}
              src={uni}
              alt=""
            />
            Uniswap <br />
            UNI
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
            className="crypto-right"
          >
            <div className="crypto-price">$6.83</div>
            <div className="crypto-id">14</div>
          </div>
        </div>
      </div>
      <div className="crypto-list">
        <div style={{ marginBottom: 20 }} className="crypto-item">
          <div style={{ display: "flex", gap: 5 }} className="crypto-left">
            <img
              style={{ width: 34, position: "relative", top: 5, height: 34 }}
              src={ripple}
              alt=""
            />
            Ripple <br />
            XRP
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
            className="crypto-right"
          >
            <div className="crypto-price">$2.3573</div>
            <div className="crypto-id">12</div>
          </div>
        </div>
      </div>
      <div className="crypto-list">
        <div style={{ marginBottom: 20 }} className="crypto-item">
          <div style={{ display: "flex", gap: 5 }} className="crypto-left">
            <img
              style={{ width: 34, position: "relative", top: 5, height: 34 }}
              src={lite}
              alt=""
            />
            Litecoin
            <br />
            LTC
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
            className="crypto-right"
          >
            <div className="crypto-price">$93.50</div>
            <div className="crypto-id">07</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
