import React, { useState } from "react";
import AddLayer from "../components/AddLayer";
import Layers from "../components/Layers";
import OrderTable from "../components/OrderTable";
import TotalOrder from "../components/TotalOrder";

export const layers = {
  Бисквитный: {
    height: 3,
    price: 200,
    img: "images/biscuit.png",
  },
  Шоколадный: {
    price: 300,
    img: "images/chocolate.png",
    height: 3,
  },
  Ореховый: {
    price: 350,
    img: "images/nut-chocolate.png",
    height: 3,
  },
  Безе: {
    price: 250,
    img: "images/Beze.png",
    height: 3,
  },
  Кокосовый: {
    price: 400,
    img: "images/coconut.png",
    height: 3,
  },
};

function calcLayerPrice(h, price) {
  console.log(h, price);
  switch (parseInt(h)) {
    case 6:
      return price * 2;
    case 9:
      return price * 3;
    default:
      return price;
  }
}

const MainPage = () => {
  const [total, setTotal] = useState(0);
  const [selectedLayer, setSelectedLayer] = useState(Object.keys(layers)[0]);
  const [height, setHeight] = useState(3);
  const [price, setPrice] = useState(
    calcLayerPrice(height, layers[selectedLayer].price)
  );

  const getCurrentPrice = () => {
    const currentPrice = order.reduce((a, { price }) => a + price, 0);
    setTotal(currentPrice);
  };

  const handleSelectedChange = ({ target: { value } }) => {
    setSelectedLayer(value);
    setPrice(calcLayerPrice(height, layers[value].price));
  };

  const handleHeightChange = ({ target: { value } }) => {
    setHeight(value);
    setPrice(calcLayerPrice(value, layers[selectedLayer].price));
  };

  const handleLayerHeight = ({ target: { value } }, id) => {
    const idx = order.findIndex((item) => item.id === id);
    const updated = [...order];
    updated[idx].height = parseInt(value);
    updated[idx].price = calcLayerPrice(value, layers[order[idx].layer].price);
    console.log(updated);
    setOrder(updated);
  };

  const handleLayerChange = ({ target: { value } }, id) => {
    const index = order.findIndex((e) => e.id === id);
    const layer = value;
    const updated = [...order];
    updated[index].layer = layer;
    updated[index].price = layers[layer].price;
    updated[index].img = layers[layer].img;
    getCurrentPrice();
    setOrder(updated);
  };

  const handleRemove = (id) => {
    const updated = order.filter((item) => item.id !== id);
    setOrder(updated);
  };

  const [order, setOrder] = useState([
    {
      id: 1,
      layer: "Бисквитный",
      img: layers["Бисквитный"].img,
      height: layers["Бисквитный"].height,
      price: layers["Бисквитный"].price,
    },
    {
      id: 2,
      layer: "Шоколадный",
      img: layers["Шоколадный"].img,
      height: layers["Шоколадный"].height,
      price: layers["Шоколадный"].price,
    },
    {
      id: 3,
      layer: "Кокосовый",
      img: layers["Кокосовый"].img,
      height: layers["Кокосовый"].height,
      price: layers["Кокосовый"].price,
    },
  ]);

  const handleAddOrder = () => {
    const added = {
      id: Math.random(),
      layer: selectedLayer,
      img: layers[selectedLayer].img,
      height,
      price,
    };
    setOrder([...order, added]);
  };

  return (
    <div className="container">
      <AddLayer
        onAdd={handleAddOrder}
        layer={selectedLayer}
        onChange={handleSelectedChange}
        height={height}
        price={price}
        onHeightChange={handleHeightChange}
      />
      <div className="order-table">
        <div className="layer">
          <Layers order={order} />
        </div>
        <div className="table">
          <OrderTable
            order={order}
            onChange={handleLayerChange}
            onDelete={handleRemove}
            handleLayerHeight={handleLayerHeight}
          />
        </div>
      </div>

      <TotalOrder total={total} />
    </div>
  );
};

export default MainPage;
