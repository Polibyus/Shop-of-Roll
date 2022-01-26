import React, { useContext } from 'react';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CartContext } from './context/cart-context';

const SendOrder = () => {

    const { carrito, ventaTotal, precioFinal } = useContext(CartContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const order = {
            buyer: {
                name: event.target.name.value,
                email: event.target.mail.value,
                phone: event.target.phone.value
            },
            items: carrito,
            total: ventaTotal,
            precioFinal: precioFinal
        }
        console.log(order);

    const db = getFirestore();
    const {id} = await addDoc(collection(db, "orders"), order);
    console.log("La compra fue registrada con id:", id);
    }


    
  return (
    <div className='centered'>
        <h1>Finaliza tu compra!</h1>
        <form onSubmit={handleSubmit}> 
            <div className="mb-3">
                <label className="form-label">Nombre y apellido</label>
                <input type="text" className="form-control" name="name" placeholder="Juan Perez" />
            </div>
            <div className="mb-3">
                <label className="form-label">Direccion de correo electronico</label>
                <input type="email" className="form-control" name="mail" placeholder="email@email.com" />
                <div className="form-text">No compartiremos tu email con nadie.</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Telefono</label>
                <input type="text" className="form-control" name="phone" placeholder="(+54) 011-123456789" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" name="subscribe" defaultChecked />
                <label className="form-check-label">Deseo suscribirme para recibir noticias.</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  );
};

export default SendOrder;
