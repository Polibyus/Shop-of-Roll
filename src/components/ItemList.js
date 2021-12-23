import React, { useState } from "react";
import Item from "./Item";
import ziggs from "../img/ziggs.jpg";
import scorpion from "../img/scorpion.jpg";
import rick from "../img/rick.jpg";
import npc from "../img/npc.jpg";
import guerrero from "../img/guerrero.jpg";

const ItemList = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState ([]);
  const getItem = new Promise((res, rej) => {
    const USD = 200;
    const listItems = [
      {
      id: 1,
      nombre: "Figura Ziggs xl (LoL)",
      desc: "Pequeña pero explosiva figura del famoso campeon ziggs de League of Legends",
      precioUSD: 20,
      precioARS: function() {
        return (this.precioUSD * USD);
      },
      picURL: ziggs,
      stock: 3,
      },
      {
      id: 2,
      nombre: "Figura Scorpion (MK)",
      desc: "GET OVER HEREE!!!",
      precioUSD: 30,
      precioARS: function() {
        return (this.precioUSD * USD);
      },
      picURL: scorpion,
      stock: 1,
      },
      {
      id: 3,
      nombre: "Figura Pickle Rick (R&M)",
      desc: "La mejor forma de evadir una sesion de terapia familiar",
      precioUSD: 25,
      precioARS: function() {
        return (this.precioUSD * USD);
      },
      picURL: rick,
      stock: 2,
      },
      {
      id: 4,
      nombre: "Pack 6 NPC's (D&D)",
      desc: "Esa ciudad necesita ser llenada y no solo por valientes heroes",
      precioUSD: 5,
      precioARS: function() {
        return (this.precioUSD * USD);
      },
      picURL: npc,
      stock: 9,
      },
      {
      id: 5,
      nombre: "Guerrero sagrado",
      desc: "PLA Printalot // 30mm de ancho ideal para jugar D&D",
      precioUSD: 3,
      precioARS: function() {
        return (this.precioUSD * USD);
      },
      picURL: guerrero,
      stock: 9,
      },
    ];
    setTimeout(() => {
      if (listItems.length > 0) {
        res(listItems);
      } else {
        rej("No hay productos disponibles");
      }
    }, 2*1000);
  });

  getItem
    .then((res) => {
      setLoading(false);
      setItem(res);
    })
    .catch((rej) => {
      console.log(rej);
    });

return (
  <React.Fragment>
  {loading ? (
    <div className="loading">
    </div>
  ) : (
  <div>
    <h2>{item.length} Resultados</h2>
    {item.map((item) => 
      (<Item item={item} key={item.id} />) 
    )}
  </div>)}
  </React.Fragment>);
}

export default ItemList;
// Fin de promesa stock