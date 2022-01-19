import { createContext, useState } from 'react';

export const CartContext = createContext({
    items: []
});

export function CartProvider(props) {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [precioFinal, setPrecioFinal] = useState(0);

    const addItem = (item, cant) => {
        if (isInCart(item.item.id)) {alert("Ya se añadio al carrito")}
        else{
            item.item.venta = cant;
            setTotal(total + cant);
            setPrecioFinal(precioFinal + (item.item.precioUSD * cant));
            setCart((oldCart) => oldCart.concat(item));
        } 
    }

    console.log(cart);
    
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

    const isInCart = (id) => {
        return cart.some((i) => i.item.id === id)
    }

    const handleInput = (e) => {
        e.preventDefault();
        let cupon = e.target.elements.cupon.value;
        if (cupon === "WINADVENTURE09") {
            setPrecioFinal(precioFinal * 0.7);
        }
        else alert("Cupon no valido")
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