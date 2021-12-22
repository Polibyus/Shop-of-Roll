import Button from 'react-bootstrap/Button'
import React from 'react'
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <div className="column">
            <div class="card">
              <img src={item.picURL} alt={item.nombre} />
              <h3>{item.nombre}</h3>
              <h5>${item.precioARS()}</h5>
              <p>{item.desc}</p>
              <ItemCount stock={item.stock}/>
              <div className="d-grid gap-2">
                <Button variant="primary" size="sm">
                  Comprar
                </Button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail
