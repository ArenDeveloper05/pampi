import { forwardRef } from "react";
import BasketItem from "./BasketItem/BasketItem";
import cardpng from "../../../Images/card.png";
import { Link } from "react-router-dom";

const Basket = forwardRef(({ setBasketOpen }, ref) => {
  return (
    <div className="header--inner--right--basket--modal" ref={ref}>
      <div className="header--inner--right--basket--modal--main">
        <h3>Your Cart</h3>
        {[
          { price: "20.000 AMD", title: "Some name for product", src: cardpng },
          { price: "20.000 AMD", title: "Some name for product", src: cardpng },
          { price: "20.000 AMD", title: "Some name for product", src: cardpng },
          //   { price: "20.000 AMD", title: "Some name for product", src: cardpng },
        ].map(({ title, src, price }, i) => {
          return <BasketItem key={i} title={title} src={src} price={price} />;
        })}
      </div>
      <div className="header--inner--right--basket--modal--footer">
        <div className="header--inner--right--basket--modal--footer--total">
          <p>
            TOTAL: <span>60:000 AMD</span>{" "}
          </p>
        </div>
        <button className="header--inner--right--basket--modal--footer--button">
          <Link> Continue to Checkout</Link>
        </button>
      </div>
    </div>
  );
});

export default Basket;
