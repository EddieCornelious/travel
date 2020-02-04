import React from "react";
import Menu from "./Menu.js";

const menuData = [
  {
    itemName: "Italian Pasta",
    description: "chicken with togarashi garlic aioli",
    price: 6
  },
  {
    itemName: "Pepperonni Pizza",
    description: "salted or togarashi garlic",
    price: 9
  },
  {
    itemName: "Yellowtail Sashimi",
    description: "sriracha, ponzu, cilantro",
    price: 6
  },
  {
    itemName: "Volcano Shrimp",
    description: "spicy honey glaze, scallion, sesame",
    price: 6
  },
  {
    itemName: "Wagyu Burger",
    description: "served with lettuce, tomato, tempura onion, cheese",
    price: 6
  },
  {
    itemName: "Pork Shank",
    description: "traditional grill only",
    price: 7
  },
  {
    itemName: "Yellow Curry",
    description: "white jasmine rice and mixed vegetables",
    price: 4
  },
  {
    itemName: "Mixed Vegetables",
    description: "served warm and with walnut praline, crème fraiche",
    price: 7
  },
  {
    itemName: "Coconut Curry",
    description: "white jasmine rice and mixed vegetables",
    price: 6
  }
];

const MainMenuSection = () => {
  return (
    <section className="main__menu__section">
      <Menu menuData={menuData} title="Main Menu" boast="Always Delicious" />
    </section>
  );
};

export default MainMenuSection;
