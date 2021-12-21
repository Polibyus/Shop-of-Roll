import React, { useState } from "react";
import Item from "./Item";

const ItemList = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState ([]);
 
  const getItem = new Promise((res, rej) => {
    const listItems = [
      {
      id: 1,
      nombre: "Figura Ziggs (LoL)",
      desc: "Pequeña pero explosiva figura del famoso campeon ziggs de League of Legends",
      precio: 2000,
      picURL: "",
      stock: 3,
      },
      {
      id: 2,
      nombre: "Figura Scorpion (MK)",
      desc: "GET OVER HEREE!!!",
      precio: 3000,
      picURL: "",
      stock: 1,
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
      {item.map(item => {
        return (
          <div>
          <Item item={item} />
          </div>)
      } 
      )}
  </div>)}
  </React.Fragment>);
}

export default ItemList;
// Fin de promesa stock