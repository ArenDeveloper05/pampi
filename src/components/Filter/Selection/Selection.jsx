import "./Selection.scss";
import arrowTwoTop from "../../../Images/Icons/arrow-2-top.svg";

export default function Selection() {
  return (
    <div className="selection">
      <div className="selection-part1">
        <div className="selection-headPart">
          <p className="selection-headPart-title">Gender</p>
          <img src={arrowTwoTop} alt="arrowTwoTop" />
        </div>
        <div className="selection-footPart">
          <div className="selection-footPart-text">All</div>
          <div className="selection-footPart-text">Boy</div>
          <div className="selection-footPart-text">Girl</div>
          <div className="selection-footPart-text">Unisex</div>
        </div>
      </div>
    </div>
  );
}
