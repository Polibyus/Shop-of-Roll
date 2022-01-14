import { createContext, useState } from 'react';

const CartContext = createContext({});

const useCont = useContext(CartContext);

const init = {
    itemsAdd: [],
    precioFinal: 0,
};

export const CartProvider = (props) => {
    const [cart, setCart] = useState(init);

    const addItem = (item, venta) => {
        if (cart.itemsAdd.some((itemsAdd) => itemsAdd.id == id)) {
            alert("Ese producto ya fue añadido")
        }
        else {
            const item = 
    }

    const inCart = () => 
}