import React, { useState, useEffect } from 'react'

const ItemCount = (props) => {
    const [venta, setVenta] = useState(1);
    const [menos, setMenos] = useState(true);
    const [mas, setMas] = useState(false);
    const [confirma, setConfirma] = useState(false);
    const stocked = (props.stock > 0) ? true : false;
    useEffect(() => {
        if (venta === props.stock) {setMas(true);}
            else setMas(false);
        if (venta > 1) {setMenos(false);}
            else setMenos(true);
    }, [venta, setMas, setMenos]);

    const sumar = () => {
        if (venta < props.stock)
            {setVenta(venta + 1)}
    }
    const restar = () => {
        if (venta > 1)
            {setVenta(venta - 1)}
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
                        <a href="/carrito" className="btn btn-danger w-100">Al carrito</a>
                    </div>
                    <div className="col-lg-6 pb-2">
                        <a href="/" className="btn btn-success w-100">Comprar más</a>
                    </div>
                </div>
            </div>
            :
            <div>
                <div className="counter">
                    <button className="btn btn-danger" disabled={menos} onClick={restar}>-</button>
                    <h4>{venta}</h4>
                    <button className="btn btn-success" disabled={mas} onClick={sumar}>+</button>
                    <button className="btn btn-primary" onClick={() => setConfirma(true)}>Confirmar</button>
                </div>
            </div>
            :
            <h2>AGOTADO</h2>
        }
        </>
    )
}

export default ItemCount
