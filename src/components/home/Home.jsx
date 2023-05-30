import "./Home.scss";
import homeImg from "../../Images/header/home-img-1.jpg";
import { Link } from "react-router-dom";
import { CATALOGPAGE } from "../../paths/paths";

const Home = () => {
  return (
    <div className="home">
      <div className="home-img">
        <img src={homeImg} alt="home-img" />
        <div className="home-img-content">
          <h1>Adorable Clothing for Your Little Ones</h1>
          <Link to={CATALOGPAGE}>
            <button>Go to the Catalog</button>
          </Link>
        </div>
      </div>
      <section className="home-inner">
        <div className="home-inner-newarrivals" id="new-arrivals">
          <h3>New Arrivals</h3>
        </div>
      </section>
    </div>
  );
};

export default Home;
