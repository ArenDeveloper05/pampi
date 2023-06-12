import card_image from "../../Images/card.png";
import "./Card.scss";
import basket from "../../Images/Icons/basket-white.svg";
import like from "../../Images/Icons/like.svg";

export default function Card({ price, name, ages }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={card_image} alt="card_image" className="card-img-image" />
        <div className="card-price">{price} AMD</div>
      </div>

      <div style={{ margin: "16px 0 0 16px" }}>
        <div className="card-name">{name}</div>
        <div className="card-ages">
          {ages.map((age) => {
            return (
              <div key={age._id} className="card-ages-age">
                {age.title}
              </div>
            );
          })}
        </div>
        <div className="card-btns">
          <button className="card-btns-addbtn">
            <img src={basket} alt="add to cart" />
            Add to cart
          </button>
          <div className="card-btns-like">
            <img src={like} alt="like" />
          </div>
        </div>
      </div>
    </div>
  );
}
