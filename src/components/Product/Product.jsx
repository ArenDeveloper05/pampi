import "./Product.scss";
import { useLocation } from "react-router-dom";
import NewArrivals from "../home/NewArrivals/NewArrivals";
import like from "../../Images/Icons/like.svg";
import cardImg from "../../Images/card.png";
import cardImg2 from "../../Images/Icons/facebook.svg";
import "../../components/Card/Card.scss";
import { useState } from "react";
import basket from "../../Images/Icons/basket-white.svg";

const Product = () => {
  const { state } = useLocation();
  const [activeImg, setActiveImg] = useState({
    src: cardImg,
    id: 0,
  });

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
    <div className="productPage">
      <div className="product">
        <div className="product-imageSlider">
          {[
            { src: cardImg },
            { src: cardImg2 },
            { src: cardImg },
            { src: cardImg },
            { src: cardImg2 },
          ].map(({ src }, i) => {
            return (
              <img
                src={src}
                className="product-imageSlider-img"
                style={{
                  border: activeImg.id == i ? "2px solid #4F4024" : "none",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setActiveImg({
                    src,
                    id: i,
                  });
                }}
              />
            );
          })}
        </div>
        <div className="product-image">
          <img src={activeImg.src} className="product-image-img" />
        </div>
        <div className="product-info">
          <div className="product-info-title">
            <p className="product-info-title-name">{state._name}</p>
            <img src={like} className="product-info-title-like" />
          </div>
          <div className="product-info-price">{state._price} AMD</div>
          <div className="product-info-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </div>
          <div className="product-info-material">
            <p className="product-info-material-text">
              Material:{" "}
              <span className="product-info-material-name">Cotton</span>
            </p>
          </div>
          <div className="product-info-counter">
            <div onClick={decrement}>-</div>
            <h5>{count}</h5>
            <div onClick={increment}>+</div>
          </div>
          <div className="product-info-ages">
            {state._ages.map((age) => {
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
          </div>
        </div>
      </div>
      <NewArrivals title="Continue Shopping" />
    </div>
  );
};

export default Product;
