import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { CartContext } from './cart-context';

import db from '../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { data } from '../data/data';
import { fileUpload } from '../firebase/fileUpload';

const Item = ({ item }) => {

  const {add} = useContext(CartContext);

  const clickHandler = () => {
      add({item}, 1)
  }

  const arrayUpload =  () => {
    data.forEach(async (element) => {
      const imgURL = await fileUpload(element.image)

      addDoc(collection(db, 'products'), {...element, image: imgURL })

    })}

  return (
      <div className="column">
          <div className="card">
            <img src={item.picURL} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <Button as={Link} to={`/${item.cat}/${item.id}`}>
            Ver mas
            </Button>
            <button onClick={arrayUpload}>SUBIR COSAS</button>
            <hr />
            <Button variant='success' onClick={clickHandler}>Añadir 1 al carrito</Button>
          </div>
      </div>
  )
}

export default Item