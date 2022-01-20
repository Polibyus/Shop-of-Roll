import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { data } from '../data/data';
import ItemList from './ItemList';

import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../firebase/firebase';

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState ([]);
  const { cat } = useParams();

  useEffect(() => {
  async function fetchData(){
  setLoading(true);
  const itemsCollection = cat ?
    query(collection(db, "items"), where('cat', '==', cat))
    :  
    collection(db, "items");

    const querySnapshot = await getDocs(itemsCollection);
    console.log(querySnapshot.docs);
    setItems(querySnapshot.docs.maps((item) => {return { ...item.data(), id: item.id }}))

    // try {
    //   const querySnapshot = await getDocs(itemsCollection)
    //   console.log(querySnapshot.docs)
    //   setItems(querySnapshot.docs.maps((item) => {return { ...item.data(), id: item.id }
    // }))
    // }
    // catch {
    //   console.log("Trono como diria el profe")
    // }
    setLoading(false);
  }
    fetchData();
    }, [cat]);

  // const loadItems = async () => {
  //   const promiseItem = await new Promise((res, rej) => {
  //     setLoading(true);
  //     setTimeout(() => {
  //       const Items = cat ? data.filter((item) => item.cat === cat) : data;
  //       res(Items)
  //   }, 2 * 1000);
  // });

  // return promiseItem;
  // };

  //   const getItems = async () => {
  //     const result = await loadItems();
  //     setLoading(false);
  //     setItems(result);
  //   };
  //   getItems();

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