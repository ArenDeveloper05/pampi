import "./Selection.scss";
import SelectionPart from "./Selection-part/SelectionPart";
import { CONFIG } from "../../../config";
import { useState } from "react";

export default function Selection() {
  const [filterData, setFilterData] = useState({
    gender: null,
    size: null,
    material: null,
    price: null,
  });
  console.log(filterData);

  return (
    <div className="selection">
      {CONFIG.FILTER_CONFIG.map((config, i) => {
        return (
          <SelectionPart
            key={i}
            config={config}
            setFilterData={setFilterData}
          />
        );
      })}
    </div>
  );
}
