import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
// Import de firebase
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../../firebase/firebase';

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { cat } = useParams();
  // Promise para traer todos los items del firestore y almacenarlos en items con su id
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
  // Spinner mientras carga y despues trae el componente que organiza los items en cards
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