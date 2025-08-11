import React from "react";
import "./ActivateSniper.css";
import token from "./assets/images/token.png";
const ActivateSniper = () => {
  return (
    <div className="container">
      <div className="sniper-heading">
        <div className="sniper">
          <h2>Activate Sniper</h2>
          <p className="sub-text">Low risk. New tokens</p>
        </div>
        <div className="balance">
          <img src={token} alt="" /> 0.00
        </div>
      </div>
      <label>Total SOL to invest</label>
      <div className="input-group">
        <input type="text" placeholder="Total SOL to invest" />
        <button className="max-btn">Max</button>
      </div>
      <label>Buy amount per order</label>
      <div className="input-group-row">
        <input type="text" placeholder="Min 0.01" />
        <input type="text" placeholder="Stop Loss Trigger %" />
      </div>
      <label>Expiry In</label>
      <select>
        <option>Never</option>
      </select>

      <label>Priority Fees</label>
      <select>
        <option>AI Shot</option>
      </select>

      <h3 style={{ fontSize: 14 }}>Smart Exit Strategy</h3>
      <p style={{ fontSize: 12, opacity: 0.5 }} className="hint">
        Customize your sell and profit targets. Set multiple exits, but keep the
        total sell percentage within 100%.
      </p>

      <div className="exit-group">
        <div className="exit-row">
          <input type="text" placeholder="% to Sell" /> @
          <input type="text" placeholder="Profit %" />
          <button className="remove-btn">✕</button>
        </div>
        <div className="exit-row">
          <input type="text" placeholder="% to Sell" /> @
          <input type="text" placeholder="Profit %/" />
          <button className="remove-btn">✕</button>
        </div>
        <div className="exit-row">
          <input type="text" placeholder="% to Sell" /> @
          <input type="text" placeholder="Profit %" />
          <button className="remove-btn">✕</button>
        </div>
      </div>

      <button className="add-exit">+ Add one more exit</button>

      <button className="activate-btn">Activate Now</button>

      <p className="disclaimer">
        Note: Low risk behavior will deactivate sniper. Sell will continue even
        when the sniper is deactivated.
      </p>
    </div>
  );
};

export default ActivateSniper;
