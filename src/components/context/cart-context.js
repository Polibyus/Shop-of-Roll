import { createContext, useState } from 'react';

export const CartContext = createContext({
    items: []
});

export function CartProvider(props) {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [precioFinal, setPrecioFinal] = useState(0);
    const [couponused, setCouponused] = useState(false);

    // Funcion para agregar item al cart, chequea que este en stock y si no manda un alert
    const addItem = (item, cant) => {
        if (item.item.stock === 0) { alert("No hay stock, lo sentimos") }
        else {
            if (isInCart(item.item.nombre)) { alert("Ya se añadio al carrito") }
            else {
                item.item.venta = cant;
                setTotal(total + cant);
                setPrecioFinal(precioFinal + (item.item.precioUSD * cant));
                setCart((oldCart) => oldCart.concat(item));
            }
        }
    }
    // Eliminar item del cart
    const deleteItem = (item, cant) => {
        setTotal(total - cant);
        setPrecioFinal(precioFinal - (item.item.precioUSD * cant));
        setCart((oldCart) => oldCart.filter(i => i !== item));
    }
    // Limpiar el carrito tanto mediante boton como cuando se envia el pedido
    const cartClean = () => {
        setCart([]);
        setTotal(0);
        setPrecioFinal(0);
    }
    // Devuelve verdadero o falso segun el item ya se encuentre en el carrito
    const isInCart = (nombre) => {
        return cart.some((i) => i.item.nombre === nombre)
    }
    // Aplicar descuento del 30% cuando se aplica cupon
    const handleInput = (e) => {
        e.preventDefault();
        let cupon = e.target.elements.cupon.value;
        if (cupon === "WINADVENTURE09" && couponused === false) {
            setPrecioFinal(precioFinal * 0.7);
            setCouponused(true);
        }
        else alert("Cupon no valido / Ya aplicado")
    }

    const context = {
        carrito: cart,
        ventaTotal: total,
        precioFinal: precioFinal,
        add: addItem,
        del: deleteItem,
        clean: cartClean,
        inCart: isInCart,
        handleInput: handleInput
    }

    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    )
}