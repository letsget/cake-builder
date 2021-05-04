import React from "react";

const TotalOrder = ({ total }) => (
  <div className="order-total">
    {total > 0 ? (
      <p>Цена за тортик {total} ₽</p>
    ) : (
      <p>Построй торт своей мечты!</p>
    )}
  </div>
);

export default TotalOrder;
