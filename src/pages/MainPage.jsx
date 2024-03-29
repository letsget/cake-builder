import React, { useState } from "react";
import AddLayer from "../components/AddLayer";
import Layers from "../components/Layers";
import OrderTable from "../components/OrderTable";
import TotalOrder from "../components/TotalOrder";
import { connect } from "react-redux";
import { getAllLayers, getOptionsForDropdown } from "../selectors";
import { Segment } from "semantic-ui-react";

const getVal = (arr, layer) => arr.find((e) => e.type === layer);

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

const MainPage = ({ layers, options }) => {
  const [total, setTotal] = useState(0);
  const [selectedLayer, setSelectedLayer] = useState(layers[0].type);
  const [height, setHeight] = useState(3);
  const [price, setPrice] = useState(layers[0].price);
  const [order, setOrder] = useState([]);

  const getCurrentPrice = (updated) =>
    updated.reduce((a, { price }) => a + price, 0);

  const handleSelectedChange = ({ target: { value } }) => {
    setSelectedLayer(value);
    setPrice(calcLayerPrice(height, getVal(layers, value).price));
  };

  const handleHeightChange = ({ target: { value } }) => {
    setHeight(value);
    setPrice(calcLayerPrice(value, getVal(layers, selectedLayer).price));
  };

  const handleLayerHeight = ({ target: { value } }, id) => {
    const idx = order.findIndex((item) => item.id === id);
    const updated = [...order];
    updated[idx].height = parseInt(value);
    updated[idx].price = calcLayerPrice(
      parseInt(value),
      getVal(layers, order[idx].layer).price
    );
    setOrder(updated);
    setTotal(getCurrentPrice(updated));
  };

  const handleLayerChange = ({ target: { value } }, id) => {
    const index = order.findIndex((e) => e.id === id);
    const layer = value;
    const updated = [...order];
    updated[index].layer = layer;
    updated[index].price = getVal(layers, layer).price;
    updated[index].img = getVal(layers, layer).img;
    setOrder(updated);
    setTotal(getCurrentPrice(updated));
  };

  const handleRemove = (id) => {
    const updated = order.filter((item) => item.id !== id);
    setOrder(updated);
    setTotal(getCurrentPrice(updated));
  };

  const handleAddOrder = () => {
    const added = {
      id: Math.random(),
      layer: selectedLayer,
      img: getVal(layers, selectedLayer).img,
      height,
      price,
    };
    const updated = order.concat(added);
    setOrder(updated);
    setTotal(getCurrentPrice(updated));
  };

  return (
    <div className="container">
      <AddLayer
        layers={layers}
        options={options}
        onAdd={handleAddOrder}
        layer={selectedLayer}
        onChange={handleSelectedChange}
        height={height}
        price={price}
        onHeightChange={handleHeightChange}
      />
      {order.length ? (
        <div className="order-table">
          <div className="layer">
            <Layers order={order} />
          </div>
          <div className="table">
            <OrderTable
              layers={layers}
              order={order}
              onChange={handleLayerChange}
              onDelete={handleRemove}
              handleLayerHeight={handleLayerHeight}
            />
          </div>
        </div>
      ) : null}
      <Segment color="blue">{total}</Segment>
    </div>
  );
};

const mapStateToProps = (state) => ({
  layers: getAllLayers(state),
  options: getOptionsForDropdown(state),
});

export default connect(mapStateToProps)(MainPage);
