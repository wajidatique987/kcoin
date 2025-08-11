import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoChatbubbleOutline } from "react-icons/io5";
import { RiRobot3Fill } from "react-icons/ri";
import { CiWallet } from "react-icons/ci";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <ul className="footer-nav">
        <li>
          <Link to="/home">
            <AiOutlineHome />
          </Link>
        </li>
        <li>
          <Link to="/chat">
            <IoChatbubbleOutline />
          </Link>
        </li>
        <li>
          <Link to="/bot">
            <RiRobot3Fill />
          </Link>
        </li>
        <li>
          <Link to="/wallet">
            <CiWallet />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
