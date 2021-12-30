import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
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

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const USD = 200;
    const loadItems = async () => {
      const response = await new Promise((res, rej) => {
        setTimeout(() => {
          res([
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
            nombre: "Figura Sub-Zero (MK)",
            desc: "Congelado",
            precioUSD: 30,
            precioARS: function() {
              return (this.precioUSD * USD);
            },
            picURL: subzero,
            stock: 1,
            },
            {
            id: 3,
            nombre: "Figura Pyramid Head (SH)",
            desc: "De Silent Hill a tu casa",
            precioUSD: 25,
            precioARS: function() {
              return (this.precioUSD * USD);
            },
            picURL: pyramid,
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
            nombre: "Guerrero sagrado (D&D)",
            desc: "PLA Printalot // 30mm de ancho ideal para jugar D&D",
            precioUSD: 3,
            precioARS: function() {
              return (this.precioUSD * USD);
            },
            picURL: guerrero,
            stock: 9,
            },
            {
            id: 6,
            nombre: "Pack 6 Orcos (D&D)",
            desc: "PLA Printalot // 30mm de ancho ideal para jugar D&D",
            precioUSD: 3,
            precioARS: function() {
              return (this.precioUSD * USD);
            },
            picURL: orcos,
            stock: 9,
            },
            {
            id: 7,
            nombre: "Barbaro Humano (D&D)",
            desc: "PLA Printalot // 30mm de ancho ideal para jugar D&D",
            precioUSD: 3,
            precioARS: function() {
              return (this.precioUSD * USD);
            },
            picURL: barbaro,
            stock: 9,
            },
            {
            id: 8,
            nombre: "Bardo Elfo (D&D)",
            desc: "PLA Printalot // 30mm de ancho ideal para jugar D&D",
            precioUSD: 3,
            precioARS: function() {
              return (this.precioUSD * USD);
            },
            picURL: bardo,
            stock: 9,
            },
            {
            id: 9,
            nombre: "Bruja Tieflin (D&D)",
            desc: "PLA Printalot // 30mm de ancho ideal para jugar D&D",
            precioUSD: 3,
            precioARS: function() {
              return (this.precioUSD * USD);
            },
            picURL: bruja,
            stock: 9,
            },
            {
            id: 10,
            nombre: "Pack 3 Golems (D&D)",
            desc: "PLA Printalot // 30mm de ancho ideal para jugar D&D",
            precioUSD: 3,
            precioARS: function() {
              return (this.precioUSD * USD);
            },
            picURL: golems,
            stock: 9,
            },
          ]);
        }, 2 * 1000);
      });
  
      return response;
    };
  
    useEffect(() => {
      const getItems = async () => {
        setLoading(true);
        const result = await loadItems();
        setLoading(false);
        setItem(result[0]);
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
        <ItemDetail item={item} />
    </div>)}
    </React.Fragment>);
};

export default ItemDetailContainer