import { useState } from "react";
import { Link } from "react-router-dom";
import delIcon from "../../../../Images/Icons/x.svg";

const BasketItem = ({ title, price, src }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="header--inner--right--basket--modal--main--item">
      <div className="header--inner--right--basket--modal--main--item--img">
        <img src={src} alt={title} />
      </div>
      <div className="header--inner--right--basket--modal--main--item--desc">
        <Link>
          {" "}
          <p>{title}</p>
        </Link>
        <h5>{price}</h5>
        <div className="header--inner--right--basket--modal--main--item--desc--counter">
          <div onClick={decrement}>-</div>
          <h5>{count}</h5>
          <div onClick={increment}>+</div>
        </div>
      </div>
      <div className="header--inner--right--basket--modal--main--item--delete">
        <img src={delIcon} alt="delicon" />
      </div>
    </div>
  );
};

export default BasketItem;
