import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { CONFIG } from "../../config";
import phone from "../../Images/Icons/phone.svg";
import facebook from "../../Images/Icons/facebook.svg";
import instagram from "../../Images/Icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-inner">
          <div className="footer-inner-links">
            {CONFIG.HEADER_CONFIG.map(({ id, title, year, route }) => {
              return (
                <Link key={id} to={route} className="footer-inner-links-link">
                  {title}
                  <span className="footer-inner-links-link-year">{year}</span>
                </Link>
              );
            })}
          </div>
          <div className="footer-inner-phoneBlock">
            <span>
              <img src={phone} alt="phone number" />
              +375 99 00 00 00
            </span>
          </div>
          <div className="footer-inner-contact">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
