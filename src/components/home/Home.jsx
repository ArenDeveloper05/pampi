import "./Home.scss";
import homeImg from "../../Images/header/home-img-1.jpg";
import { Link } from "react-router-dom";
import { CATALOGPAGE } from "../../paths/paths";
import arrowDown from "../../Images/Icons/arrow-down.svg";
import arrowRight from "../../Images/Icons/arrow-right.svg";
import Card from "../Card/Card";
import { cartData } from "../../mock";

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
        <div className="home-inner-newarrivals" id="new-arrivals">
          <div className="home-inner-newarrivals-head">
            <h3 className="home-inner-newarrivals-head-title">New Arrivals</h3>
            <div className="home-inner-newarrivals-head-rout">
              <Link
                to={CATALOGPAGE}
                className="home-inner-newarrivals-head-text"
              >
                Go to the Catalog
              </Link>
              <img src={arrowRight} alt="go to catalog" />
            </div>
          </div>
          <div className="home-inner-newarrivals-cards">
            {cartData.map((card) => {
              return (
                <Card
                  key={card._id}
                  price={card.price}
                  name={card.name}
                  ages={card.ages}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
