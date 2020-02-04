import React from "react";
import ParallaxBanner from "./ParallaxBanner.js";
import Menu from "./Menu.js";

const menuData = [
  {
    itemName: "Creme Brulee",
    description: "with seasonal berries",
    price: 6
  },
  {
    itemName: "Espresso Cake",
    description: "with cocoa powder and fresh raspberries",
    price: 9
  },
  {
    itemName: "Cream Pie",
    description: "with house made caramel sauce",
    price: 6
  },
  {
    itemName: "Apple Crostata",
    description: "with cinnamon streusel and housemade vanilla ice cream",
    price: 6
  },
  {
    itemName: "Grille Cheesecake",
    description: "whith fresh berries",
    price: 6
  },
  {
    itemName: "Chocolate Cake",
    description: "with Hershey's chocolate",
    price: 7
  },
  {
    itemName: "Buttermilk Pie",
    description: "organic butter",
    price: 4
  },
  {
    itemName: "Vanilla Ice-Cream",
    description: "served cold and fresh",
    price: 7
  },
  {
    itemName: "Peach Cobbler",
    description: "homemade crust",
    price: 6
  }
];

const DessertSection = () => {
  return (
    <section className="dessert__section">
      <ParallaxBanner title="Desserts" id="1" />
      <Menu
        menuData={menuData}
        title="Dessert Menu"
        boast="Exquisitely Delicious"
      />
    </section>
  );
};

export default DessertSection;
