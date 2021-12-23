import Button from 'react-bootstrap/Button'
import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'

const Item = ({ item }) => {
  const handleClick = () => {
    <ItemDetailContainer />;
  }
  return (
      <div className="column">
            <div className="card">
              <img src={item.picURL} alt={item.nombre} />
              <h3>{item.nombre}</h3>
              <div className="d-grid gap-2">
                <Button variant="primary" size="sm" onClick={handleClick}>
                  Uff lo quiero!!
                </Button>
              </div>
            </div>
        </div>
  )
}

export default Item