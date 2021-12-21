import React from 'react'

const Item = ({ item }) => {
  return (
    <div>
      <div className="column">
            <div class="card">
            <h3>{item.nombre}</h3>
            <h2>${item.precio}</h2>
            <p>{item.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default Item