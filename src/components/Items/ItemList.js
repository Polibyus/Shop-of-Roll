import React from 'react'
import Item from './Item'
// Por cada objeto dentro del array items hace un llamado al componente items
const ItemList = ({ items }) => {
    return (
        <>
            <div className='item-list'>
                <h2>Mostrando {items.length} productos</h2>
                <div className='items'>
                    {items.map((item) => (
                        <Item item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ItemList
