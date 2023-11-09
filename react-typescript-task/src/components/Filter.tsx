import React, { useState } from "react";
import {
  VehicleFilter,
  vehicleTypeTitles,
  vehicleTypes,
} from "../data/vehicles/contracts";

interface filterProps {
  handler: (data: VehicleFilter) => void;
}

export const Filter: React.FC<filterProps> = ({ handler }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState(-1);

  React.useEffect(() => {
    handler({
      title: inputValue,
      type: selectValue === -1 ? null : vehicleTypes[selectValue],
    });
  }, [inputValue, selectValue]);

  function search(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    if (e.target instanceof HTMLInputElement) {
      setInputValue(e.target.value);
    } else {
      setSelectValue(+e.target.value);
    }
  }
  return (
    <div>
      <input type="text" value={inputValue} onChange={search} />
      <select name="select" id="1" value={selectValue} onChange={search}>
        <option value="-1">Все</option>
        {Object.entries(vehicleTypeTitles).map((el) => {
          return (
            <option key={el[0]} value={el[0]}>
              {el[1]}
            </option>
          );
        })}
      </select>
    </div>
  );
};
