import { useLocation } from "react-router-dom";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import like from "../../Images/Icons/like.svg";
import cardImg from "../../Images/card.png";
import Layout from "../../layout/Layout";
import "./ProductPage.scss";
import "../../components/Card/Card.scss";
import { useState } from "react";
import basket from "../../Images/Icons/basket-white.svg";

export default function ProductPage() {
  const { state } = useLocation();

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
    <Layout>
      <div className="productPage">
        <div className="product">
          <div className="product-imageSlider">
            <img src={cardImg} className="product-imageSlider-img" />
            <img src={cardImg} className="product-imageSlider-img" />
            <img src={cardImg} className="product-imageSlider-img" />
            <img src={cardImg} className="product-imageSlider-img" />
            <img src={cardImg} className="product-imageSlider-img" />
          </div>
          <div className="product-image">
            <img src={cardImg} className="product-image-img" />
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
    </Layout>
  );
}
