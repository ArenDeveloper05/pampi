import "./Selection.scss";
import arrowTwoTop from "../../../Images/Icons/arrow-2-top.svg";
import { useState } from "react";

export default function Selection() {
  const [genderOpenStatus, setGenderOpenStatus] = useState(false);
  const [sizeOpenStatus, setSizeOpenStatus] = useState(false);
  const [materialOpenStatus, setMaterialOpenStatus] = useState(false);

  return (
    <div className="selection">
      <div className="selection-part1">
        <div
          className="selection-headPart"
          onClick={() => setGenderOpenStatus(!genderOpenStatus)}
        >
          <p className="selection-headPart-title">Gender</p>
          <img
            src={arrowTwoTop}
            alt="arrowTwoTop"
            style={{
              transform: genderOpenStatus ? "rotate(0deg)" : "rotate(180deg)",
            }}
          />
        </div>
        {genderOpenStatus && (
          <div className="selection-footPart">
            <div className="selection-footPart-text">All</div>
            <div className="selection-footPart-text">Boy</div>
            <div className="selection-footPart-text">Girl</div>
            <div className="selection-footPart-text">Unisex</div>
          </div>
        )}
      </div>

      <div className="selection-part1">
        <div
          className="selection-headPart"
          onClick={() => setSizeOpenStatus(!sizeOpenStatus)}
        >
          <p className="selection-headPart-title">Size</p>
          <img
            src={arrowTwoTop}
            alt="arrowTwoTop"
            style={{
              transform: sizeOpenStatus ? "rotate(0deg)" : "rotate(180deg)",
            }}
          />
        </div>
        {sizeOpenStatus && (
          <div className="selection-footPart">
            <div className="selection-footPart-text">All</div>
            <div className="selection-footPart-text">6-9M</div>
            <div className="selection-footPart-text">9-12M</div>
            <div className="selection-footPart-text">12-18M</div>
            <div className="selection-footPart-text">18-24M</div>
            <div className="selection-footPart-text">2-3Y</div>
            <div className="selection-footPart-text">3-6Y</div>
            <div className="selection-footPart-text">6-9Y</div>
            <div className="selection-footPart-text">9-12Y</div>
            <div className="selection-footPart-text">13+Y</div>
          </div>
        )}
      </div>

      <div className="selection-part1">
        <div
          className="selection-headPart"
          onClick={() => setMaterialOpenStatus(!materialOpenStatus)}
        >
          <p className="selection-headPart-title">Material</p>
          <img
            src={arrowTwoTop}
            alt="arrowTwoTop"
            style={{
              transform: materialOpenStatus ? "rotate(0deg)" : "rotate(180deg)",
            }}
          />
        </div>
        {materialOpenStatus && (
          <div className="selection-footPart">
            <div className="selection-footPart-text">All</div>
            <div className="selection-footPart-text">Cotton</div>
            <div className="selection-footPart-text">Acrylic</div>
            <div className="selection-footPart-text">Canvas</div>
            <div className="selection-footPart-text">Chiffon</div>
            <div className="selection-footPart-text">Corduroy</div>
            <div className="selection-footPart-text">Composite Fabric</div>
          </div>
        )}
      </div>

      <div className="selection-pricePart">
        <div className="selection-headPart">
          <p className="selection-headPart-title">Price</p>
          <img src={arrowTwoTop} alt="arrowTwoTop" />
        </div>
      </div>
    </div>
  );
}
