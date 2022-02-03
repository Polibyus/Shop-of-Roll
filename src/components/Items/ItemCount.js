import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cart-context';

const ItemCount = ({ item }) => {
    // Hooks de estado para el contador y chequear stock y confirmacion de compra
    const [venta, setVenta] = useState(1);
    const [menos, setMenos] = useState(true);
    const [mas, setMas] = useState(false);
    const [confirma, setConfirma] = useState(false);
    // Utilizar datos del prop para saber si permitir comprar o 
    const stocked = (item.stock > 0) ? true : false;
    const { add } = useContext(CartContext);
    // Habilitar o no botones de suma y resta segun numero
    useEffect(() => {
        if (venta === item.stock) { setMas(true); }
        else setMas(false);
        if (venta > 1) { setMenos(false); }
        else setMenos(true);
    }, [item.stock, venta]);
    // Contador de pedido corroborando stock
    const sumar = () => {
        if (venta < item.stock) { setVenta(venta + 1) }
    }
    const restar = () => {
        if (venta > 1) { setVenta(venta - 1) }
    }
    // Añadir item y enviar datos de cantidads
    const clickHandler = () => {
        add({ item }, venta);
        setConfirma(true);
    }

    return (
        <>
            {stocked
                ?
                confirma
                    ?
                    <div className="col-lg-12 mt-3">
                        <div className="row">
                            <div className="col-lg-6 pb-2">
                                <Link to={"/cart"} className="btn btn-danger w-100">Al carrito</Link>
                            </div>
                            <div className="col-lg-6 pb-2">
                                <Link to={"/"} className="btn btn-success w-100">Comprar más</Link>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="counter">
                            <button className="btn btn-danger" disabled={menos} onClick={restar}>-</button>
                            <h4>{venta}</h4>
                            <button className="btn btn-success" disabled={mas} onClick={sumar}>+</button>
                            <button className="btn btn-primary" onClick={clickHandler}>Confirmar</button>
                        </div>
                    </div>
                :
                <h2>AGOTADO</h2>
            }
        </>
    )
}

export default ItemCount
