import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import "./RangeSlider.scss";
import "../../Selection/Selection.scss";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 500;
const minRange = 5000;
const maxRange = 10000;
const step = 500;

export default function RangeSlider({
  config,
  setFilterData,
  selectFilterValues,
}) {
  const [value1, setValue1] = useState([minRange, maxRange]);

  useEffect(() => {
    selectFilterValues(config.title, value1);
  }, [selectFilterValues, config.title, value1]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }

    // console.log(value1);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        min={minRange}
        max={maxRange}
        step={step}
        className="slider"
      />

      <div className="selection-footPart-range-prices">
        <div className="selection-footPart-range-prices-price">
          {value1[0]}
          <span className="selection-footPart-range-prices-price-amd">AMD</span>
        </div>
        <div style={{ color: "#505050", opacity: ".3" }}>-</div>
        <div className="selection-footPart-range-prices-price">
          {value1[1]}
          <span className="selection-footPart-range-prices-price-amd">AMD</span>
        </div>
      </div>
    </Box>
  );
}
