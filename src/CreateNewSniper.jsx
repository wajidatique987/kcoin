import React from "react";
import "./CreateNewsniper.css";
import photon from "./assets/images/photon.svg";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const CreateNewSniper = () => {
  return (
    <div>
      <div className="container">
        <header>
          <h1>Create New Sniper</h1>
          <p className="note">
            <span className="mandatory">*</span> Fields marked are mandatory
          </p>
        </header>
        <form>
          <label>
            Target Website<span className="mandatory">*</span>
          </label>
          <select>
            <option>
              {" "}
              <img src={photon} alt="" />
              Photon
            </option>
          </select>
          <label>Target List</label>
          <select>
            <option>Choose a target to snipe</option>
          </select>
          <label>
            Sniper Name <span className="mandatory">*</span>
          </label>
          <input type="text" defaultValue="Photon Trending 1m" />
          <label>Coin Pair Platform</label>
          <select>
            <option>Bogdan</option>
          </select>
          <label>Migrated From</label>
          <select>
            <option>Native to Raydium, Pump.fun</option>
          </select>
          <label>
            Min Value <span className="mandatory">*</span>
          </label>
          <input type="number" defaultValue={150000} />
          <label>
            Min Lp Burn Percentage <span className="mandatory">*</span>
          </label>
          <input type="number" defaultValue={80} />
          <label>
            Max Top 10 Holder Percentage <span className="mandatory">*</span>
          </label>
          <input type="number" defaultValue={25} />
          <label>
            Min Market Cap <span className="mandatory">*</span>
          </label>
          <input type="number" defaultValue={600000} />
          <p>Safe Snipe Assurance</p>
          <div className="options">
            <label>
              <input type="checkbox" /> Mint Auth Disabled
            </label>
            <label>
              <input type="checkbox" /> Freeze Authority Disabled
            </label>
            <label>
              <input type="checkbox" /> Atleast 1 Social Link
            </label>
          </div>
          <div className="pro-content">
            <div className="pro-settings">
              <h2>Pro Settings</h2>
              <p>Enable advanced sniper configurations.</p>
            </div>
            <Link to="/prosetting">
              <div className="pro-image">
                <CiCirclePlus />
              </div>
            </Link>
          </div>
          <div className="buttons">
            <button type="reset" className="reset">
              Reset
            </button>
            <button type="submit" className="proceed">
              Proceed
            </button>
          </div>
          <p className="lower-part">
            Once the sniper is built, these settings cannot be adjusted.
          </p>
        </form>
      </div>
    </div>
  );
};

export default CreateNewSniper;
