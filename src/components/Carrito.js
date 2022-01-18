import React, { useContext } from 'react'
import BackButton from './BackButton'
import { CartContext } from './cart-context'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Carrito = () => {

const { carrito, ventaTotal, precioFinal, del, clean } = useContext(CartContext);

return (
    <div className='container'>
    <h2>Carrito<br/><small>{ventaTotal} productos</small></h2>
    <div className="table-responsive shopping-cart">
    <table className="table">
        <thead>
            <tr>
                <th>Productos</th>
                <th className="text-center">Cantidad</th>
                <th className="text-center">Subtotal</th>
                <th className="text-center">Total</th>
                <th className="text-center"><Button onClick={()=>{clean()}} variant='danger'>Vaciar Carrito</Button></th>
            </tr>
        </thead>
        <tbody>
            {/* Mapeo de items dentro de carrito */}
            {carrito.map( i =>
                <tr key={i.item.id}>
                    <td>
                        <div className="product-item">
                            <span className="product-thumb"><img src={i.item.picURL} alt={i.item.nombre} /></span>
                            <div className="product-info">
                                <h4 className="product-title"><Link to={"/"}>{i.item.nombre}</Link></h4><span><em>Cat.:</em>{i.item.cat}</span><span>{i.item.desc}</span>
                            </div>
                        </div>
                    </td>
                    <td className="text-center">{i.venta}</td>
                    <td className="text-center text-lg text-medium">{i.item.precioUSD}</td>
                    <td className="text-center text-lg text-medium">{(i.item.precioUSD) * (i.venta)}</td>
                    <td className="text-center"><Button className="remove-from-cart" onClick={()=>{del(i, i.venta)}} data-toggle="tooltip" title="Eliminar item">X</Button></td>
                </tr>
            )}
        </tbody>
    </table>
    </div>
    <div className="shopping-cart-footer">
        <div className="row">
            <form className="coupon-form" method="post">
                <input className="form-control form-control-sm" type="text" placeholder="Codigo de cupon" required={true} />
                <button className="btn btn-outline-primary btn-sm" type="submit">Aplicar</button>
            </form>
            <div className="text-lg">Total: <span className="text-medium">${precioFinal}</span></div>
            <div className="column"><button as={Link} to={"/"} className="btn btn-outline-secondary">Comprar más</button></div>
            <div className="column"><button as={Link} to={"/"} className="btn btn-success">Terminar compra</button></div>
        </div>
    </div>
    <BackButton />
    </div>
    )
}

export default Carrito
