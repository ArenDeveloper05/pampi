import { Link } from "react-router-dom";
import { CONFIG } from "../../config";
import logo from "../../Images/Logos/Logo.svg";
import "./Header.scss";
import { HOMEPAGE } from "../../Paths/paths";

const Header = () => {
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
        </div>
      </div>
    </header>
  );
};

export default Header;
