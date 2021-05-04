import React from "react";

const Layers = ({ order }) => {
  const handleHeight = (h) => {
    switch (h) {
      case 6:
        return 80;
      case 9:
        return 120;
      default:
        return 40;
    }
  };

  return (
    <div className="cake-layers">
      {order.map((item) => (
        <img
          style={{ height: handleHeight(item.height) + "px" }}
          key={Math.random()}
          className="layer-img"
          src={item.img}
          alt={item.type}
        />
      ))}
    </div>
  );
};

export default Layers;
