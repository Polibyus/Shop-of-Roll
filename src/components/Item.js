import Button from 'react-bootstrap/Button'
import React from 'react'

const Item = ({ item }) => {
  const handleClick = () => {
    console.log('Se hizo click');
  }
  return (
    <div>
      <div className="column">
            <div class="card">
              <img src={item.picURL} alt={item.nombre} />
              <h3>{item.nombre}</h3>
              <div className="d-grid gap-2">
                <Button variant="primary" size="sm" onClick={handleClick}>
                  Uff lo quiero!!
                </Button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Item