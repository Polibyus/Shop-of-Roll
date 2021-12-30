import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
      <div className="column">
          <div className="card">
            <img src={item.picURL} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <Link className="d-grid gap-2 btn btn-succes" to={`/product/${item.id}`} >
            Ver mas
            </Link>
            <a className="d-grid gap-2 btn btn-succes" href='/carrito'>Añadir al carrito</a>
          </div>
      </div>
  )
}

export default Item