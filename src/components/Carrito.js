import React, { useContext } from 'react'
import BackButton from './BackButton'
import { CartContext } from './cart-context'
import Button from 'react-bootstrap/Button';

const Carrito = () => {

    const {cart, precioFinal, del, clean} = useContext(CartContext)

    return (
        <div>
            <h1>Carrito</h1>
            {cart.map( i =>
            <div className="column">
                <div className="card">
                    <img src={i.picURL} alt={i.nombre} />
                    <h3>{i.nombre}</h3>
                    <Button onClick={()=>{del(i)}} variant='danger'>Eliminar</Button>
                </div>
            </div>
            )}
            <h3>{precioFinal}</h3>
            <Button onClick={()=>{clean()}} variant='danger'>Vaciar Carrito</Button>
            <BackButton />
        </div>
    )
}

export default Carrito
