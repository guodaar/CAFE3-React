import { createMemoryHistory } from "@remix-run/router";
import React from "react";
import { useParams } from "react-router-dom";
import { getCarById } from "../api/cars";

const CarPage = () => {
  const { id } = useParams();
  const car = getCarById(Number(id));
  return (
    <div>
      <h2>
        {car.make} {car.model}
      </h2>
      <p>Year: {car.year}</p>
      <p>
        {" "}
        Color:{" "}
        <span
          style={{ width: "10px", height: "10px", backgroundColor: car.color }}
        >
          {car.color}
        </span>
      </p>
    </div>
  );
};

export default CarPage;
