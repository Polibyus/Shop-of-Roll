import { FaShoppingCart } from 'react-icons/fa';
import React from 'react'
import { IconContext } from "react-icons"

const CartIcon = () => {
    return (
        <IconContext.Provider value={{ color: 'grey', size: '30px' }}>
        <div>
            <a href="#"> <FaShoppingCart /></a>
        </div>
        </IconContext.Provider>
    )
}

export default CartIcon
