import "./Filter.scss";
import cancel from "../../Images/Icons/cancel.svg";
import filterBrown from "../../Images/Icons/filter-brown.svg";
import filterSilver from "../../Images/Icons/filter-silver.svg";
import { CardsData } from "../../mock-3";
import Card from "../Card/Card";
import { useState } from "react";
import Selection from "./Selection/Selection";

export default function Filter({ name }) {
  const [filterOpenStatus, setFilterOpenStatus] = useState(false);

  const onClickFilterOpen = (event) => {
    setFilterOpenStatus(true);
  };

  const onClickFilterClose = () => {
    setFilterOpenStatus(false);
  };
  return (
    <>
      <div className="filter">
        <h3 className="filter-headtext">{name}</h3>
        <div className="filter-filterBlock">
          <div onClick={onClickFilterOpen} className="filter-filtration">
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
              onClick={onClickFilterClose}
            />
          )}
        </div>
      </div>

      <div className="selectFilterBlock">
        {filterOpenStatus && <Selection />}
        <div className="selectFilterBlock-cards">
          {CardsData.map((card) => {
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
    </>
  );
}
