import { FaShoppingCart } from 'react-icons/fa';
import React from 'react'
import { IconContext } from "react-icons"

const CartIcon = () => {
    return (
        <IconContext.Provider value={{ color: 'grey', size: '40px' }}>
        <div className='px-4'>
            <a href="/carrito"> <FaShoppingCart /></a>
        </div>
        </IconContext.Provider>
    )
}

export default CartIcon
