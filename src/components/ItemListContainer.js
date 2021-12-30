import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/data';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState ([]);
  const { cat } = useParams();

  useEffect(() => {
  const loadItems = async () => {
    const promiseItem = await new Promise((res, rej) => {
      setTimeout(() => {
        const Items = cat ? data.filter((item) => item.cat === cat) : data;
        res(Items)
    }, 2 * 1000);
  });

  return promiseItem;
  };

    const getItems = async () => {
      const result = await loadItems();
      setLoading(false);
      setItems(result);
    };
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

return (
  <React.Fragment>
  {loading ? (
    <div className="loading">
    </div>
  ) : (
  <div>
    <ItemList items={items} />
  </div>)}
  </React.Fragment>);
}

export default ItemListContainer;
// Fin de promesa stock