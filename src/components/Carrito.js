import React, { useContext } from 'react'
import BackButton from './BackButton'
import { CartContext } from './cart-context'
import Button from 'react-bootstrap/Button';

const Carrito = () => {

    const { carrito, del, clean } = useContext(CartContext);
    return (
        <div className='item-list'>
            <h1>Carrito</h1>
            {/* Mapeo de items dentro de carrito */}
            <div className='items'>
            {carrito.map( i =>
            <div key={i.item.id}>
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img className='card-img' src={i.item.picURL} alt={i.item.nombre} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className='card-title'>{i.item.nombre}</h3>
                                <h4 className='card-text'>Cantidad: {i.venta}</h4>
                                <Button onClick={()=>{del(i)}} variant='danger'>Eliminar</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
            </div>
            {/* ---------------------------------- */}
            <h3>Precio Final</h3>
            <Button onClick={()=>{clean()}} variant='danger'>Vaciar Carrito</Button>
            <BackButton />
        </div>
    )
}

export default Carrito
