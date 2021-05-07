import React from "react";
import { layers } from "../pages/MainPage";

// testing commit


const AddLayer = ({
  onChange,
  onHeightChange,
  onAdd,
  layer,
  height,
  price,
}) => {
  return (
    <div className="add-form">
      <div className="title">
        <span>Выбрать Корж:</span>
        <select
          className="custom-select"
          name="select"
          id="select"
          value={layer}
          onChange={(e) => onChange(e)}
        >
          {layers.map((layer) => (
            <option key={layer.type}>{layer.type}</option>
          ))}
        </select>
      </div>
      <div className="title">
        <span>Толщина коржа:</span>
        <input
          type="number"
          className="inp"
          value={height}
          max={9}
          min={3}
          step={3}
          onChange={(e) => onHeightChange(e)}
        />
      </div>
      <div className="title">
        <span> Цена:</span>
        <span className="price-field">{price}</span>
      </div>
      <button onClick={onAdd} className="btn">
        Добавить
      </button>
    </div>
  );
};

export default AddLayer;
