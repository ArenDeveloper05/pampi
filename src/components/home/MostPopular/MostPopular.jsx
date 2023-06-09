import "./MostPopular.scss";
import { CATALOGPAGE } from "../../../paths/paths";
import arrowRight from "../../../Images/Icons/arrow-right.svg";
import { Link } from "react-router-dom";
import { mostPopularCardData } from "../../../mock-2";
import Card from "../../Card/Card";

export default function MostPopular() {
  return (
    <div className="mostPopular">
      <div className="mostPopular-head">
        <h3 className="mostPopular-head-title">
          Most popular clothes of the season
        </h3>
        <div className="mostPopular-head-rout">
          <Link to={CATALOGPAGE} className="mostPopular-head-text">
            Go to the Catalog
          </Link>
          <img src={arrowRight} alt="go to catalog" />
        </div>
      </div>
      <div className="mostPopular-cards">
        {mostPopularCardData.map((card) => {
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
  );
}
