import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

import { collection, getDocs, query } from "firebase/firestore";
import db from '../../firebase/firebase';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const { itemID } = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const itemsCollection = query(collection(db, "items"));
      try {
        const querySnapshot = await getDocs(itemsCollection);
        const myItem = querySnapshot.docs.find((doc) => doc.id === itemID);
        setItem(myItem.data());
      }
      catch {
        console.log("Trono como diria el profe")
      }
      setLoading(false);
    }
    fetchData();
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