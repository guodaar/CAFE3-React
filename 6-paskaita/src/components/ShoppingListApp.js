import React from "react";
import { useState } from "react";

const ShoppingListApp = () => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems((prevItems) => [...prevItems, { itemName, quantity }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Shopping list</h2>
      <div>
        <label>Pavadinimas: </label>
        <input
          type="text"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />
      </div>
      <div>
        <label>Kiekis: </label>
        <input
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
      </div>
      <button>Pridėti prekę į sąrašą</button>
      <ol>
        {items.map((item) => (
          <li key={item.itemName}>
            {item.itemName} x {item.quantity}
          </li>
        ))}
      </ol>
    </form>
  );
};

export default ShoppingListApp;
