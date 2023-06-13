import { Link } from "react-router-dom";
import Card from "../../Card/Card";
import arrowRight from "../../../Images/Icons/arrow-right.svg";
import "./NewArrivals.scss";
import { cartData } from "../../../mock";
import { CATALOGPAGE, PRODUCTPAGE } from "../../../paths/paths";

export default function NewArrivals({ title }) {
  return (
    <div className="newarrivals">
      <div className="newarrivals-head">
        <h3 className="newarrivals-head-title">{title}</h3>
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
            <Link
              to={PRODUCTPAGE(card._id)}
              state={{
                _price: card.price,
                _name: card.name,
                _ages: card.ages,
              }}
              key={card._id}
              style={{ textDecoration: "none" }}
            >
              <Card
                key={card._id}
                price={card.price}
                name={card.name}
                ages={card.ages}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
