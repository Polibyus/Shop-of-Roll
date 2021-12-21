import React, {useState} from 'react'

const ItemCount = (props) => {
    const [venta, setVenta] = useState(1);
    const sumar = () => {
        if (venta < props.stock) {setVenta(venta + 1)}
        else alert("No hay suficiente stock")
    }
    const restar = () => {
        if (venta > 1) {setVenta(venta - 1)}
        else alert("No puede ser menor que 1")
    }

    return (
        <div className="counter">
            <button onClick={restar}>-</button>
            <h4>{venta}</h4>
            <button onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount
