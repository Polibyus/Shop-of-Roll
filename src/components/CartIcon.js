import { FaShoppingCart } from 'react-icons/fa';
import React from 'react'
import { IconContext } from "react-icons"

const CartIcon = () => {
    return (
        <IconContext.Provider value={{ color: 'grey', size: '30px' }}>
        <div>
            <a href="https://www.w3schools.com/js/js_objects.asp" target="blank"> <FaShoppingCart /></a>
        </div>
        </IconContext.Provider>
    )
}

export default CartIcon
