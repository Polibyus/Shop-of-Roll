import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../../firebase/firebase';

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { cat } = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const itemsCollection = cat ?
        query(collection(db, "items"), where('cat', '==', cat))
        :
        collection(db, 'items');
      try {
        const querySnapshot = await getDocs(itemsCollection);
        setItems(querySnapshot.docs.map((item) => { return { ...item.data(), id: item.id } }))
      }
      catch {
        console.log("Trono como diria el profe")
      }
      setLoading(false);
    }
    fetchData();
  }, [cat]);

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