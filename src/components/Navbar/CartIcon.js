import { FaShoppingCart } from 'react-icons/fa';
import React, { useContext } from 'react'
import { IconContext } from "react-icons"
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { CartContext } from '../context/cart-context';

const CartIcon = () => {

    const { ventaTotal } = useContext(CartContext);
    // Se utiliza React-icons y el context para hacer un link al carrito que cambie segun los items que tenga
    return (
        <IconContext.Provider value={{ color: 'grey', size: '40px' }}>
            <div className='items mx-4'>
                <Link to={"/cart"}><FaShoppingCart /></Link>
                <Nav.Link as={Link} to={"/cart"} className='px-2'>{ventaTotal}</Nav.Link>
            </div>
        </IconContext.Provider>
    )
}

export default CartIcon
