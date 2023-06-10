import "./Parts.scss";
import { Link } from "react-router-dom";
import {
  BABYPAGE,
  BOYPAGE,
  GIRLPAGE,
  TODDLER_BOYPAGE,
  TODDLER_GIRLPAGE,
} from "../../../paths/paths";

export default function Parts() {
  return (
    <div className="parts">
      <article className="parts-1">
        <div className="parts-1-part babies">
          <Link to={BABYPAGE}>Babies</Link>
        </div>
        <div className="parts-1-part t-girls">
          <Link to={TODDLER_GIRLPAGE}>Toddler girls</Link>
        </div>
        <div className="parts-1-part t-boys">
          <Link to={TODDLER_BOYPAGE}>Toddler boys</Link>
        </div>
      </article>
      <article className="parts-2">
        <div className="parts-2-part girls">
          <Link to={GIRLPAGE}>Girls</Link>
        </div>
        <div className="parts-2-part boys">
          <Link to={BOYPAGE}>Boys</Link>
        </div>
      </article>
    </div>
  );
}
