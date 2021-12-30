import React from 'react'
import Item from './Item'

const ItemList = ({ items }) => {
    return (
        <>
        <div className='ItemList'>
        <h2>Mostrando {items.length} productos</h2>
        {items.map((item) => (
        <Item item={item} key={item.id} />
        ))}
        </div>
        </>
    )
}

export default ItemList
