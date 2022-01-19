import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { data } from '../data/data';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const { itemID } = useParams();

  useEffect(() => {
  const loadItems = async () => {
    const response = await new Promise((res, rej) => {
      setTimeout(() => {
        const myItem = data.find(item => item.id.toString() === itemID);
        res(myItem);
      }, 2 * 1000);
    });

    return response;
  };

    const getItems = async () => {
      setLoading(true);
      const result = await loadItems();
      setLoading(false);
      setItem(result);
    };
    getItems();
  }, [itemID]);
  
return (
    <React.Fragment>
    {loading ? (
      <div className="loading">
      </div>
    ) : (
    <>
        <ItemDetail item={item} />
    </>)}
    </React.Fragment>);
};

export default ItemDetailContainer