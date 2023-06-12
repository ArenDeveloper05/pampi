import "./Header.scss";
import { Link } from "react-router-dom";
import { CONFIG } from "../../config";
import logo from "../../Images/logos/Logo.svg";
import basket from "../../Images/Icons/basket.svg";
import { HOMEPAGE } from "../../paths/paths";
import { useState, useRef, useEffect } from "react";
import Basket from "./Basket/Basket";

const Header = () => {
  const [basketOpen, setBasketOpen] = useState(false);

  const iconRef = useRef(null);
  const modalRef = useRef(null);

  const handleClick = (e) => {
    if (iconRef.current && iconRef.current.contains(e.target)) {
      setBasketOpen((prev) => !prev);
    } else {
      if (modalRef.current && modalRef.current.contains(e.target)) {
      } else {
        setBasketOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <header className="header">
      <div className="header--container">
        <div className="header--inner">
          <div className="header--inner--logo">
            <Link to={HOMEPAGE}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="header--inner--links">
            {CONFIG.HEADER_CONFIG.map(({ id, title, year, route }) => {
              return (
                <Link
                  key={id}
                  to={route}
                  className="header--inner--links--link"
                >
                  {title}
                  <span className="header--inner--links--link--year">
                    {year}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="header--inner--right">
            <Link>
              <button className="header--inner--right--login">Login</button>
            </Link>
            <div className="header--inner--right--basket">
              <img src={basket} alt="basket" ref={iconRef} />
              {basketOpen && (
                <Basket setBasketOpen={setBasketOpen} ref={modalRef} />
              )}
            </div>
            <div>Eng</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
