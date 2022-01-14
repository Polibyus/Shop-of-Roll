import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from './cart-context';

const Item = ({ item }) => {

  const {add} = useContext(CartContext);

  const clickHandler = () => {
      add({item})
  }
  return (
      <div className="column">
          <div className="card">
            <img src={item.picURL} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <Button href={`${item.cat}/${item.id}`} variant='primary'>
            Ver mas
            </Button>
            <hr />
            <Button variant='success' onClick={clickHandler}>Añadir al carrito</Button>
          </div>
      </div>
  )
}

export default Item