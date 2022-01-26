import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cart-context';

const ItemCount = ({ item }) => {
    const [venta, setVenta] = useState(1);
    const [menos, setMenos] = useState(true);
    const [mas, setMas] = useState(false);
    const [confirma, setConfirma] = useState(false);
    const stocked = (item.stock > 0) ? true : false;
    const stock = item.stock;
    const {add} = useContext(CartContext);

    useEffect(() => {
        if (venta === stock) {setMas(true);}
            else setMas(false);
        if (venta > 1) {setMenos(false);}
            else setMenos(true);
    }, [stock, venta]);

    const sumar = () => {
        if (venta < item.stock)
            {setVenta(venta + 1)}
    }
    const restar = () => {
        if (venta > 1)
            {setVenta(venta - 1)}
    }

    const clickHandler = () => {
        add({item}, venta);
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
                        <Link to={"/carrito"} className="btn btn-danger w-100">Al carrito</Link>
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
