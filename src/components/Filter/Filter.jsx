import "./Filter.scss";
import cancel from "../../Images/Icons/cancel.svg";
import filterSilver from "../../Images/Icons/filter-silver.svg";
import { CardsData } from "../../mock-3";
import Card from "../Card/Card";
import { useState } from "react";
import Selection from "./Selection/Selection";
import { PRODUCTPAGE } from "../../paths/paths";
import { Link } from "react-router-dom";

export default function Filter({ name }) {
  const [filterOpenStatus, setFilterOpenStatus] = useState(true);

  return (
    <>
      <div className="filter">
        <h3 className="filter-headtext">{name}</h3>
        <div className="filter-filterBlock">
          <div
            onClick={() => setFilterOpenStatus(true)}
            className="filter-filtration"
          >
            <img src={filterSilver} alt="filter" />
            <span className="filter-filtration-text">Filter</span>
          </div>
          {filterOpenStatus && (
            <img
              src={cancel}
              style={{
                marginLeft: "5px",
                width: "20px",
                height: "20px",
                cursor: "pointer",
              }}
              onClick={() => setFilterOpenStatus(false)}
            />
          )}
        </div>
      </div>

      <div className="selectFilterBlock">
        <Selection open={filterOpenStatus} />
        <div className="selectFilterBlock-cards">
          {CardsData.map((card) => {
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
    </>
  );
}
