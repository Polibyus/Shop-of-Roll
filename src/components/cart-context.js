import { createContext, useState } from 'react';

export const CartContext = createContext({
    items: []
});

export function CartProvider(props) {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [precioFinal, setPrecioFinal] = useState(0);

    const addItem = (item, cant) => {
            item.venta = cant;
            setTotal(total + cant);
            setPrecioFinal(precioFinal + (item.precioARS * cant));
            setCart((oldCart) => {
                return oldCart.concat(item)
        })
    }
    
    const deleteItem = (item) => {
        setCart(oldCart => {
            return oldCart.filter(i => i !== item);
        });
    }

    const cartClean = () => {
        setCart([]);
        setTotal(0);
        setPrecioFinal(0);
    }

    const context = {
        carrito: cart,
        ventaTotal: total,
        precioFinal: precioFinal,
        add: addItem,
        del: deleteItem,
        clean: cartClean
    }

    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    )
}