import React from 'react'

const Item = ({ item }) => {
  return (
      <div className="column">
            <div className="card">
              <img src={item.picURL} alt={item.nombre} />
              <h3>{item.nombre}</h3>
              <div className="d-grid gap-2">
                <a href="/itemdetail" class="btn btn-success">Ver mas</a>
              </div>
            </div>
        </div>
  )
}

export default Item