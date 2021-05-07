const initialState = {
  layers: [
    {
      type: "Бисквитный",
      height: 3,
      price: 200,
      img: "images/biscuit.png",
    },
    {
      type: "Шоколадный",
      price: 300,
      img: "images/chocolate.png",
      height: 3,
    },
    {
      type: "Ореховый",
      price: 350,
      img: "images/nut-chocolate.png",
      height: 3,
    },
    {
      type: "Безе",
      price: 250,
      img: "images/Beze.png",
      height: 3,
    },
    {
      type: "Кокосовый",
      price: 400,
      img: "images/coconut.png",
      height: 3,
    },
  ],
};

const cakeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export { cakeReducer };
