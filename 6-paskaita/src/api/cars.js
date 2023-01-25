const cars = [
  { id: 1, make: "BMW", model: "X5", year: 2000, color: "green" },

  { id: 2, make: "Audi", model: "Q5", year: 2100, color: "red" },
];

export const getCars = () => {
  return cars;
};

export const getCarById = (id) => {
  return cars.find((car) => car.id === id);
};
