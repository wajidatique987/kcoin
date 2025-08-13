import React from "react";
import "./Profile.css";
import banner from "./assets/images/banner.png";
import wallet from "./assets/images/wallet.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Profile = () => {
  return (
    <div>
      <div className="container">
        {/* <!-- Banner --> */}
        <div className="banner">
          <img src={banner} alt="Banner" />
          <div className="avatar">W</div>
        </div>

        {/* <!-- Profile Info --> */}
        <div className="profile-info">
          <div className="details">
            <h2>Waggy facto</h2>
            <p className="username">@wajidatique987</p>
            <p className="location">NA</p>
          </div>
          <div className="actions">
            <Link to="/verified">
              <button className="verify">Get Verified</button>
            </Link>
            <Link to="/update">
              <button className="edit">Edit Profile</button>
            </Link>
          </div>
        </div>

        {/* <!-- Wallet --> */}
        <div className="wallet">
          <div className="wallet-left">
            <p className="label">Available USD Balance</p>
            <div classNameName="wallet-middle">
              <h3>$0</h3>
              <button className="wallet-button">My Wallet </button>
            </div>
          </div>
          <div className="wallet-right">
            <img src={wallet} alt="Crypto Icons" />
          </div>
        </div>

        {/* <!-- Tabs --> */}
        <div className="tabs">
          <button className="tab active">Posts</button>
          <button className="tab">Message</button>
          <button className="tab">Earnings</button>
        </div>

        {/* <!-- Posts --> */}
        <div className="posts">
          <p>0 post</p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
