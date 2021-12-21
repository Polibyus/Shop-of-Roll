import React from 'react'
import ItemCount from './ItemCount';

const Item = ({ item }) => {
  return (
    <div>
      <div className="column">
            <div class="card">
            <h3>{item.nombre}</h3>
            <h5>${item.precio}</h5>
            <p>{item.desc}</p>
            <ItemCount stock={item.stock}/>
            </div>
        </div>
    </div>
  )
}

export default Item