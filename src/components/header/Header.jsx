import { CONFIG } from "../../config";

const Header = () => {
  return (
    <header>
      Logo
      {CONFIG.HEADER_CONFIG.map(({ id, title, year }) => {
        return <span key={id}>{title + year} </span>;
      })}
    </header>
  );
};

export default Header;
