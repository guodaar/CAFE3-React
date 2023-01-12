import React from "react";
import { useState } from "react";

const SearchFilter = () => {
  const fruits = ["Apple", "Watermelon", "Orange", "Mango", "Pineapple"];
  const [filteredItems, setFilteredItems] = useState(fruits);

  const handleFilter = (e) => {
    const keyword = e.target.value;
    let newList = [...fruits];
    newList = newList.filter((item) => {
      return item.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    setFilteredItems(newList);
    // setFilteredItems((prevTodos) => prevTodos.filter((item) => {
    //   return item.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    // }));
  };

  return (
    <div>
      <form>
        <label htmlFor="search">Search</label>
        <input type="text" name="search" onChange={handleFilter} />
      </form>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
