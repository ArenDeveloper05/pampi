import "./Home.scss";
import homeImg from "../../Images/home/home-img-1.jpg";
import { Link } from "react-router-dom";
import { CATALOGPAGE } from "../../paths/paths";
import arrowDown from "../../Images/Icons/arrow-down.svg";
import Parts from "./Parts/Parts";
import MostPopular from "./MostPopular/MostPopular";
import NewArrivals from "./NewArrivals/NewArrivals";

const Home = () => {
  return (
    <div className="home">
      <div className="home-img">
        <img src={homeImg} alt="home-img" />
        <div className="home-img-content">
          <h1>Adorable Clothing for Your Little Ones</h1>
          <Link to={CATALOGPAGE} key="catalog">
            <button>Go to the Catalog</button>
          </Link>
        </div>
        <div className="home-img-more">
          <a href="#new-arrivals">
            <span>Explore More</span>
            <img src={arrowDown} alt="explore-more" />
          </a>
        </div>
      </div>
      <section className="home-inner">
        <NewArrivals />
        <Parts />
        <MostPopular />
      </section>
    </div>
  );
};

export default Home;
