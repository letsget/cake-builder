import { createSelector } from "reselect";

export const getAllLayers = ({ cake }) => cake.layers;

export const getOptionsForDropdown = ({ cake }) =>
  cake.layers.reduce((acc, layer) => {
    const option = {
      key: layer.id,
      text: layer.type,
      value: layer.type,
    };

    return [...acc, option];
  }, []);
