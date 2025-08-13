import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./wallet.css";
import Bitcoin from "./assets/images/Bitcoin.png";
import ETH from "./assets/images/ETH.png";
import solana from "./assets/images/Solana.png";
import bsc from "./assets/images/BSC.png";
import ripple from "./assets/images/RIPPLE.png";
import lite from "./assets/images/lite.png";
import uni from "./assets/images/uni.png";
import arrow from "./assets/images/arrow.png";

function UncontrolledExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 tab-id"
    >
      <Tab className="tab" eventKey="home" title="Currencies">
        <div className="crypto-list">
          <div className="crypto-left">
            <div className="crypto-img">
              <img
                style={{ width: 34, height: 34, position: "relative", top: 5 }}
                src={Bitcoin}
                alt=""
              />
            </div>
            <div className="cryto-name">
              Bitcoin <br />
              BTC
            </div>
          </div>
          <div className="crypto-right">
            <div style={{ color: "#919191" }} className="crypto-price">
              $87,325
            </div>
            <div
              style={{ color: "#919191", textAlign: "end" }}
              className="crypto-id"
            >
              02
            </div>
          </div>
        </div>
        <div className="crypto-list">
          <div className="crypto-left">
            <div className="crypto-img">
              <img
                style={{ width: 34, height: 34, position: "relative", top: 5 }}
                src={ETH}
                alt=""
              />
            </div>
            <div className="cryto-name">
              Ethereum <br />
              ETH
            </div>
          </div>
          <div className="crypto-right">
            <div style={{ color: "#919191" }} className="crypto-price">
              $2,022.98
            </div>
            <div
              style={{ color: "#919191", textAlign: "end" }}
              className="crypto-id"
            >
              02
            </div>
          </div>
        </div>
        <div className="crypto-list">
          <div className="crypto-left">
            <div className="crypto-img">
              <img
                style={{ width: 34, height: 34, position: "relative", top: 5 }}
                src={solana}
                alt=""
              />
            </div>
            <div className="cryto-name">
              Solana <br />
              Sol
            </div>
          </div>
          <div className="crypto-right">
            <div style={{ color: "#919191" }} className="crypto-price">
              $138.39
            </div>
            <div
              style={{ color: "#919191", textAlign: "end" }}
              className="crypto-id"
            >
              07
            </div>
          </div>
        </div>
        <div className="crypto-list">
          <div className="crypto-left">
            <div className="crypto-img">
              <img
                style={{ width: 34, height: 34, position: "relative", top: 5 }}
                src={bsc}
                alt=""
              />
            </div>
            <div className="cryto-name">
              Binance <br />
              BSC
            </div>
          </div>
          <div className="crypto-right">
            <div style={{ color: "#919191" }} className="crypto-price">
              $635.26
            </div>
            <div
              style={{ color: "#919191", textAlign: "end" }}
              className="crypto-id"
            >
              04
            </div>
          </div>
        </div>
        <div className="crypto-list">
          <div className="crypto-left">
            <div className="crypto-img">
              <img
                style={{ width: 34, height: 34, position: "relative", top: 5 }}
                src={uni}
                alt=""
              />
            </div>
            <div className="cryto-name">
              Uniswap <br />
              UNI
            </div>
          </div>
          <div className="crypto-right">
            <div style={{ color: "#919191" }} className="crypto-price">
              $6.83
            </div>
            <div
              style={{ color: "#919191", textAlign: "end" }}
              className="crypto-id"
            >
              14
            </div>
          </div>
        </div>
        <div className="crypto-list">
          <div className="crypto-left">
            <div className="crypto-img">
              <img
                style={{ width: 34, height: 34, position: "relative", top: 5 }}
                src={ripple}
                alt=""
              />
            </div>
            <div className="cryto-name">
              Ripple <br />
              XRP
            </div>
          </div>
          <div className="crypto-right">
            <div style={{ color: "#919191" }} className="crypto-price">
              $2.3573
            </div>
            <div
              style={{ color: "#919191", textAlign: "end" }}
              className="crypto-id"
            >
              12
            </div>
          </div>
        </div>
        <div className="crypto-list">
          <div className="crypto-left">
            <div className="crypto-img">
              <img
                style={{ width: 34, height: 34, position: "relative", top: 5 }}
                src={lite}
                alt=""
              />
            </div>
            <div className="cryto-name">
              Litecoin <br />
              LTC
            </div>
          </div>
          <div className="crypto-right">
            <div style={{ color: "#919191" }} className="crypto-price">
              $93.50
            </div>
            <div
              style={{ color: "#919191", textAlign: "end" }}
              className="crypto-id"
            >
              07
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="inflows" title="Inflows">
        <div className="crypto-list">
          <div className="crypto-left">
            <div className="crypto-img">
              <img
                style={{ width: 34, height: 34, position: "relative", top: 5 }}
                src={Bitcoin}
                alt=""
              />
            </div>
            <div className="cryto-name">
              Bitcoin/BTC <br />
              Total received: 0.14 BTC
            </div>
          </div>
          <div className="crypto-right">
            <div className="crypto-price">
              <img
                style={{ marginRight: 9, marginTop: 10 }}
                src={arrow}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="crypto-list">
          <div className="crypto-left">
            <div className="crypto-img">
              <img
                style={{ width: 34, height: 34, position: "relative", top: 5 }}
                src={ETH}
                alt=""
              />
            </div>
            <div className="cryto-name">
              Ethereum/ETH <br />
              Total received: 1.02 ETH
            </div>
          </div>
          <div className="crypto-right">
            <div className="crypto-price">
              <img
                style={{ marginRight: 9, marginTop: 10 }}
                src={arrow}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="crypto-list">
          <div className="crypto-left">
            <div className="crypto-img">
              <img
                style={{ width: 34, height: 34, position: "relative", top: 5 }}
                src={solana}
                alt=""
              />
            </div>
            <div className="cryto-name">
              Solana/SOL
              <br />
              Total received: 10.23 SOL
            </div>
          </div>
          <div className="crypto-right">
            <div className="crypto-price">
              <img
                style={{ marginRight: 9, marginTop: 10 }}
                src={arrow}
                alt=""
              />
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="outflows" title="Outflows">
        <div className="crypto-list">
          <div className="crypto-left">
            <div className="crypto-img">
              <img
                style={{ width: 34, height: 34, position: "relative", top: 5 }}
                src={Bitcoin}
                alt=""
              />
            </div>
            <div className="cryto-name">
              Bitcoin/BTC <br />
              Total send: 0.14 BTC
            </div>
          </div>
          <div className="crypto-right">
            <div className="crypto-price">
              <img
                style={{ marginRight: 9, marginTop: 10 }}
                src={arrow}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="crypto-list">
          <div className="crypto-left">
            <div className="crypto-img">
              <img
                style={{ width: 34, height: 34, position: "relative", top: 5 }}
                src={ETH}
                alt=""
              />
            </div>
            <div className="cryto-name">
              Ethereum/ETH <br />
              Total send: 1.02 ETH
            </div>
          </div>
          <div className="crypto-right">
            <div className="crypto-price">
              <img
                style={{ marginRight: 9, marginTop: 10 }}
                src={arrow}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="crypto-list">
          <div className="crypto-left">
            <div className="crypto-img">
              <img
                style={{ width: 34, height: 34, position: "relative", top: 5 }}
                src={solana}
                alt=""
              />
            </div>
            <div className="cryto-name">
              Solana/SOL
              <br />
              Total send: 10.23 SOL
            </div>
          </div>
          <div className="crypto-right">
            <div className="crypto-price">
              <img
                style={{ marginRight: 9, marginTop: 10 }}
                src={arrow}
                alt=""
              />
            </div>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;
