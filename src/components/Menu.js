import React from "react";
import "../styles/Menu.scss";
import Fade from "react-reveal/Fade";

const MenuItem = props => {
  return (
    <div className="col-sm-4 col-md-4">
      <div className="menu__item">
        <div className="menu__item__top">
          <p className="menu__item__name">{props.itemName}</p>
          <p className="menu__item__price">{"$" + props.price}</p>
        </div>
        <div className="menu__item__bottom">
          <p className="menu__item__desc">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

const MenuRow = ({ data }) => {
  return (
    <div className="menu__row">
      <div className="container">
        <div className="row">
          {data.map(element => {
            return (
              <Fade>
                <MenuItem
                  key={element.itemName}
                  itemName={element.itemName}
                  description={element.description}
                  price={element.price}
                />
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Menu = props => {
  return (
    <div className="menu">
      <div className="menu__header__wrap">
        <p className="menu__boast">{props.boast}</p>
        <h1 className="menu__title">{props.title}</h1>
        <div className="underline">&nbsp;</div>
      </div>
      <MenuRow data={props.menuData.slice(0, 3)} />
      <MenuRow data={props.menuData.slice(3, 6)} />
      <MenuRow data={props.menuData.slice(6, 9)} />
    </div>
  );
};

export default Menu;
