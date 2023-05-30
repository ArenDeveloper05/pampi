import card_image from "../../Images/card.png";

export default function Card({ id, price, name, ages }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={card_image} alt="card_image" />
        <div className="card-price">{price} AMD</div>
      </div>
      <div className="card-name">{name}</div>
      <div className="card-years"></div>
    </div>
  );
}
