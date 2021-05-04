import React from "react";
import { layers } from "../pages/MainPage";

const OrderTable = ({ order, onChange, onDelete, handleLayerHeight }) => {
  return (
    <>
      {order.map(({ id, layer, height, price }) => {
        return (
          <>
            <div key={id} className="edit-order">
              <select
                className="custom-select"
                name="select"
                id="select"
                value={layer}
                onChange={(e) => onChange(e, id)}
              >
                {layers.map((layer) => (
                  <option key={layer.type}>{layer.type}</option>
                ))}
              </select>
              <input
                className="custom-select inp"
                type="number"
                value={height}
                min={3}
                max={9}
                step={3}
                onChange={(e) => handleLayerHeight(e, id)}
              />
              <span className="price-field">цена: {price}</span>
              <span className="remove-icon" onClick={() => onDelete(id)}>
                <i className="fas fa-times"></i>
              </span>
            </div>
          </>
        );
      })}
    </>
  );
};

export default OrderTable;
