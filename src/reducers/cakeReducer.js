const initialState = {
  layers: [
    {
      id: 1,
      type: "Бисквитный",
      height: 3,
      price: 200,
      img: "images/biscuit.png",
    },
    {
      id: 2,
      type: "Шоколадный",
      price: 300,
      img: "images/chocolate.png",
      height: 3,
    },
    {
      id: 3,
      type: "Ореховый",
      price: 350,
      img: "images/nut-chocolate.png",
      height: 3,
    },
    {
      id: 4,
      type: "Безе",
      price: 250,
      img: "images/Beze.png",
      height: 3,
    },
    {
      id: 5,
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
