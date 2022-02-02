import { createContext, useState } from 'react';

export const CartContext = createContext({
    items: []
});

export function CartProvider(props) {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [precioFinal, setPrecioFinal] = useState(0);
    const [couponused, setCouponused] = useState(false);

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

    const deleteItem = (item, cant) => {
        setTotal(total - cant);
        setPrecioFinal(precioFinal - (item.item.precioUSD * cant));
        setCart((oldCart) => oldCart.filter(i => i !== item));
    }

    const cartClean = () => {
        setCart([]);
        setTotal(0);
        setPrecioFinal(0);
    }

    const isInCart = (nombre) => {
        return cart.some((i) => i.item.nombre === nombre)
    }

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