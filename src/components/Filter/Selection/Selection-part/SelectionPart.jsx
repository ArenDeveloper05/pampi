import { useCallback, useState } from "react";
import arrowTwoTop from "../../../../Images/Icons/arrow-2-top.svg";
import RangeSlider from "../RangeSlider/RangeSlider";

const SelectionPart = ({ config, setFilterData }) => {
  const [open, setOpen] = useState();
  const [selectedType, setSelectedType] = useState(0);

  const handleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const selectFilterValues = useCallback(
    (key, type) => {
      setFilterData((prev) => {
        return {
          ...prev,
          [key.toLowerCase()]: type,
        };
      });
    },
    [setFilterData]
  );

  // const selectFilterValues = (key, type) => {

  // };

  return (
    <div className="selection-part1">
      <div className="selection-headPart" onClick={handleOpen}>
        <p className="selection-headPart-title">{config.title}</p>
        <img
          src={arrowTwoTop}
          alt="arrowTwoTop"
          style={{
            transform: open ? "rotate(0deg)" : "rotate(180deg)",
          }}
        />
      </div>
      {open && (
        <div className="selection-footPart">
          {config.types ? (
            config.types.map((type, i) => {
              return (
                <div
                  key={i}
                  className="selection-footPart-text"
                  style={{
                    border:
                      selectedType == i
                        ? "2px solid #4F4024"
                        : "2px solid #fff",
                  }}
                  onClick={() => {
                    setSelectedType(i);
                    selectFilterValues(config.title, type);
                  }}
                >
                  {type}
                </div>
              );
            })
          ) : (
            <>
              <div className="selection-footPart-range">
                <RangeSlider
                  selectFilterValues={selectFilterValues}
                  config={config}
                  setFilterData={setFilterData}
                />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SelectionPart;
