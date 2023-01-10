import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";
import { singleMenu, coupleMenu, familyMenu } from "./const";

const MenuList = ({ customerType }) => {
  const getCustomerMenu = (type) => {
    if (type === "single") {
      return singleMenu;
    } else if (type === "couple") {
      return coupleMenu;
    } else {
      return familyMenu;
    }
  };
  const customerMenu = getCustomerMenu(customerType);
  return (
    <ol>
      {customerMenu.map((menuItem) => (
        <li key={menuItem.menuItem}>
          {menuItem.itemName} <strong>${menuItem.price}</strong>
        </li>
      ))}
    </ol>
  );
};

export default MenuList;
