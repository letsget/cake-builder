import React from "react";
import { Button } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import { Label } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";

// testing commit
// testing squash commit #2
// testing

const AddLayer = ({
  onChange,
  onHeightChange,
  onAdd,
  layer,
  height,
  price,
  options,
}) => {
  return (
    <form className={"form"}>
      <div className="add-form">
        <div className="title">
          <span className={"header-title"}>Выбрать Корж:</span>
          <div className="option-control">
            <Dropdown
              placeholder={"Выберете корж"}
              selection
              options={options}
            />
          </div>
        </div>
        <div className="title">
          <span className={"header-title"}>Толщина коржа:</span>
          <div className={"option-control"}>
            <Icon name="plus" />
            <Icon name="minus" />
            <Label basic color="blue">
              {height} см
            </Label>
          </div>
        </div>
        <div className="title">
          <span className={"header-title"}> Цена:</span>
          <div className="option-control">
            <Label basic color="blue">
              {price} ₽
            </Label>
          </div>
        </div>
      </div>
      <div className="btn">
        <Button primary color={"blue"} onClick={onAdd}>
          Добавить
        </Button>
      </div>
    </form>
  );
};

export default AddLayer;
