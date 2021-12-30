import React, { useState, useEffect } from 'react';
import ziggs from "../img/items/ziggs.jpg";
import subzero from "../img/items/subzero.jpg";
import pyramid from "../img/items/pyramid.jpg";
import npc from "../img/items/npc.jpg";
import guerrero from "../img/items/guerrero.jpg";
import orcos from "../img/items/orcos.jpg";
import barbaro from "../img/items/barbaro.jpg";
import bardo from "../img/items/bardo.jpg";
import bruja from "../img/items/bruja.jpg";
import golems from "../img/items/golems.jpg";
import ItemList from "./ItemList";


const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState ([]);
  const loadItems = async () => {
    const promiseItem = await new Promise((res, rej) => {
      setTimeout(() => {
      res([
        {
        id: 1,
        nombre: "Figura Ziggs xl (LoL)",
        picURL: ziggs,
        cat: "Figura destacada"
        },
        {
        id: 2,
        nombre: "Figura Sub-Zero (MK)",
        picURL: subzero,
        },
        {
        id: 3,
        nombre: "Figura Pyramid Head (SH)",
        picURL: pyramid,
        },
        {
        id: 4,
        nombre: "Pack 6 NPC's (D&D)",
        picURL: npc,
        },
        {
        id: 5,
        nombre: "Guerrero sagrado (D&D)",
        picURL: guerrero,
        },
        {
        id: 6,
        nombre: "Pack 6 Orcos",
        picURL: orcos,
        },
        {
        id: 7,
        nombre: "Barbaro Humano (D&D)",
        picURL: barbaro,
        },
        {
        id: 8,
        nombre: "Bardo Elfo (D&D)",
        picURL: bardo,
        },
        {
        id: 9,
        nombre: "Bruja Tieflin (D&D)",
        picURL: bruja,
        },
        {
        id: 10,
        nombre: "Pack 3 Golems (D&D)",
        picURL: golems,
        },
      ]);
    }, 2 * 1000);
  });

  return promiseItem;
  };

  useEffect(() => {
    const getItems = async () => {
      const result = await loadItems();
      setLoading(false);
      setItems(result);
    };
    getItems();
  }, []);

return (
  <React.Fragment>
  {loading ? (
    <div className="loading">
    </div>
  ) : (
  <div>
    <h1>Bienvenido a Shop of Roll</h1>
    <ItemList items={items} />
  </div>)}
  </React.Fragment>);
}

export default ItemListContainer;
// Fin de promesa stock