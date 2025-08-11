import React from "react";
import "./prosetting.css";
const Prosetting = () => {
  return (
    <div className="container">
      <div className="modal-header">
        <h2>Pro Settings</h2>
        <p>Take full control with advanced sniper configurations.</p>
        <span className="close-btn">×</span>
      </div>
      <div className="modal-body">
        <label>Min Swaps</label>
        <input type="text" placeholder="Enter swaps" />
        <label>Min Buy Count</label>
        <input type="text" placeholder="Enter buy count" />
        <label>Min Initial Liquidity</label>
        <input type="text" placeholder="Enter initial liquidity" />
        <label>Min Sell Count</label>
        <input type="text" placeholder="Enter sell count" />
        <label>Min price change percentage</label>
        <div className="price-change">
          <input type="text" placeholder="0-100%" />
          <span>%</span>
          <select>
            <option>1H</option>
            <option>6H</option>
            <option>12H</option>
            <option>24H</option>
          </select>
        </div>
      </div>
      <div className="modal-footer">
        <button className="save-btn">Save</button>
      </div>
    </div>
  );
};

export default Prosetting;
