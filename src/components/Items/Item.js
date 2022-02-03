import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cart-context';

const Item = ({ item }) => {

  const { add } = useContext(CartContext);
  // Funcion para añadir 1 item desde el listado al carrito
  const clickHandler = () => {
    add({ item }, 1)
  }
  // Tarjeta de cada uno de los items presentados en el item list
  return (
    <div className="column">
      <div className="card">
        <img src={item.picURL} alt={item.nombre} />
        <h3>{item.nombre}</h3>
        <Button as={Link} to={`/${item.cat}/${item.id}`}>
          Ver mas
        </Button>
        <hr />
        <Button variant='success' onClick={clickHandler}>Añadir 1 al carrito</Button>
      </div>
    </div>
  )
}

export default Item