import { Link } from "react-router-dom";
import Card from "../../Card/Card";
import arrowRight from "../../../Images/Icons/arrow-right.svg";
import "./NewArrivals.scss";
import { cartData } from "../../../mock";
import { CATALOGPAGE } from "../../../paths/paths";

export default function NewArrivals() {
  return (
    <div className="newarrivals">
      <div className="newarrivals-head">
        <h3 className="newarrivals-head-title">New Arrivals</h3>
        <div className="newarrivals-head-rout">
          <Link to={CATALOGPAGE} className="newarrivals-head-text">
            Go to the Catalog
          </Link>
          <img src={arrowRight} alt="go to catalog" />
        </div>
      </div>
      <div className="newarrivals-cards">
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
  );
}
