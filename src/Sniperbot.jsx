import React from "react";
import "./sniperbot.css";
import token from "./assets/images/token.png";
import { IoMdSettings } from "react-icons/io";
import bot from "./assets/images/bot.png";
import { LuRefreshCw } from "react-icons/lu";
import bot1 from "./assets/images/bot1.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import dot from "./assets/images/green.png";
import red from "./assets/images/red.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Sniperbot = () => {
  return (
    <div className="container">
      <div className="sniper-heading">
        <div className="sniper">
          <h2>SniperBot</h2>
        </div>
        <div className="balance">
          <img src={token} alt="" /> 0.00
          <div className="setting">
            <IoMdSettings />
          </div>
        </div>
      </div>
      {/* <!-- Banner --> */}
      <div className="banner-content">
        <div class="banner">
          <h4>Snipe instantly and profit before the crowd moves.</h4>
          <p>Let the sniper bot work while you stay ahead of the market.</p>
        </div>
        <div className="banner-image">
          <img src={bot} alt="" />
        </div>
      </div>
      <hr />
      {/* <!-- Actions --> */}
      <div className="action-btn">
        <Link to="/createnewsniper">
          <div className="p-btn">
            <button className="primary-btn">Create Sniper</button>
          </div>
        </Link>
        <div className="o-btn">
          <button className="outline-btn">All Snipers</button>
        </div>
        <LuRefreshCw />
      </div>
      <hr />
      {/* <!-- Tabs --> */}
      <div class="tabs">
        <button className="active">All Snipers</button>
        <button>Activated</button>
        <button>Deactivated</button>
      </div>
      {/* <!-- Instructions Card --> */}
      <div class="instruction-card">
        <div className="instruction-content">
          <h4>Activate in 3 simple steps</h4>
          <ol>
            <li>Select a Sniper</li>
            <li>Enter your wallet</li>
            <li>Activate Sniper</li>
          </ol>
        </div>
        <div className="instruction-image">
          <img src={bot1} alt="" />
        </div>
      </div>
      {/* <!-- Sniper Cards --> */}
      <div class="card low-risk">
        <div class="card-header">
          <div className="risk-sniping">
            <span>Low risk New tokens</span>
            <p>--sniper--</p>
          </div>
          <span>
            <BsThreeDotsVertical />
          </span>
        </div>
        <div className="low-risk">
          <p>
            <img src={dot} alt="" />
            {"   "}
            Low Risk
          </p>
          <p>view 20+ Intelligence</p>
        </div>
        <p>LIQUIDITY</p>
        <p>Buy 50% (0.5131 BNB)</p>
        <button style={{ marginBottom: 10 }} class="activate-btn">
          Activate Sniper
        </button>
      </div>

      <div class="card high-risk">
        <div class="card-header">
          <div className="risk-sniping">
            <span>High risk New tokens</span>
            <p>--sniper--</p>
          </div>
          <span>
            <BsThreeDotsVertical />
          </span>
        </div>
        <div className="low-risk">
          <p>
            <img src={red} alt="" />
            {"   "}
            Low Risk
          </p>
          <p>view 20+ Intelligence</p>
        </div>
        <p>LIQUIDITY</p>
        <p>Buy 90% (0.9131 BNB)</p>
        <button style={{ marginBottom: 10 }} class="activate-btn">
          Activate Sniper
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Sniperbot;
