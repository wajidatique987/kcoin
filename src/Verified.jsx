import React from "react";
import "./verified.css";
import tick from "./assets/images/tick.svg";
import { Link } from "react-router-dom";
const Verified = () => {
  return (
    <div className="container">
      <div className="pricing-container">
        <h5>Get Verified</h5>
        <h4>JOIN THE VERIFIED CIRCLE</h4>
        <p>
          Show you're the real deal with a verified badge trusted by the
          KcoinClub community!
        </p>

        <div className="plans">
          <div className="plan">
            <div className="monthly-plan">
              <h3>Monthly</h3>
              <img src={tick} alt="" />
            </div>
            <div className="price">$19.99</div>
            <div className="billed-monthly">Billed Monthly</div>
          </div>
          <div className="plan">
            <h3>Yearly</h3>
            <div className="price">$79.99</div>
            <div className="save">SAVE 33%</div>
            <div className="billed">Billed Yearly</div>
          </div>
        </div>

        <ul className="features">
          <li style={{ display: "flex", gap: 5 }}>
            <img src={tick} alt="" />
            Let others know you're real and verified.
          </li>
          <li style={{ display: "flex", gap: 5 }}>
            {" "}
            <img src={tick} alt="" />
            Boost your trust and visibility
          </li>
          <li style={{ display: "flex", gap: 5 }}>
            {" "}
            <img src={tick} alt="" />
            Stand out in the feed and tips
          </li>
          <li style={{ display: "flex", gap: 5 }}>
            {" "}
            <img src={tick} alt="" />
            Speedy issue resolution & a priority support lane
          </li>
          <li style={{ display: "flex", gap: 5 }}>
            {" "}
            <img src={tick} alt="" />
            Attract more tips & followers with your badge
          </li>
          <li style={{ display: "flex", gap: 5 }}>
            {" "}
            <img src={tick} alt="" />
            Get noticed by sponsors and premium users
          </li>
          <li style={{ display: "flex", gap: 5 }}>
            {" "}
            <img src={tick} alt="" />
            Access to exclusive live features
          </li>
        </ul>
      </div>
      <Link to="/activateSniper">
        <button className="verified">Verify Now</button>
      </Link>
    </div>
  );
};

export default Verified;
