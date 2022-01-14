import { createContext, useState } from 'react';

export const CartContext = createContext({});

const init = {
    itemsAdd: [],
    precioFinal: 0,
};

export const CartProvider = (props) => {

    const [cart, setCart] = useState(init);

    const addItem = (item) => {
        if (cart.itemsAdd.some((i) => i === item)) {
            alert("Ese producto ya fue añadido")
        }
        else {
            setCart((cart) => {
                return cart.push(item)
            }) 
        }
    }

    const deleteItem = (item) => {
        setCart(oldCart => {
            return oldCart.filter(i => i !== item);
        });
    }

    const cartClean = () => {
        setCart(init)
    }

    const context = {
        cart: cart.itemsAdd,
        precioFinal: cart.precioFinal,
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