import { CONFIG } from "../../config";

const Header = () => {
  return (
    <header>
      Logo
      {CONFIG.HEADER_CONFIG.map(({ id, title }) => {
        return <span key={id}>{title}</span>;
      })}
    </header>
  );
};

export default Header;
