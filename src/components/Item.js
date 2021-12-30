import React from 'react';
import Button from 'react-bootstrap/Button';

const Item = ({ item }) => {
  return (
      <div className="column">
          <div className="card">
            <img src={item.picURL} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <Button href={`${item.cat}/${item.id}`} variant='primary'>
            Ver mas
            </Button>
            <hr />
            <Button variant='success' href='/carrito'>Añadir al carrito</Button>
          </div>
      </div>
  )
}

export default Item