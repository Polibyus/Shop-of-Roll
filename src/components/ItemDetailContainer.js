import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import ziggs from "../img/ziggs.jpg";

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
            precioARS: USD,
            picURL: ziggs,
            stock: 3,
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
        <ItemDetail item={item} key={item.id} />
    </div>)}
    </React.Fragment>);
};

export default ItemDetailContainer