import React, { useContext, useState } from 'react';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CartContext } from './context/cart-context';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SendOrder = () => {
    const { carrito, ventaTotal, precioFinal, clean } = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [ID, setID] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();
        const order = {
            buyer: {
                name: event.target.name.value,
                email: event.target.mail.value,
                phone: event.target.phone.value
            },
            items: carrito,
            total: ventaTotal,
            precioFinal: precioFinal,
            suscrito: event.target.subscribe.checked,
            estado: "Enviada"
        }
    const db = getFirestore();
    const {id} = await addDoc(collection(db, "orders"), order);
    setID(id);
    console.log("La compra fue registrada con id:", id);
    setLoading(false);
    clean();
    handleShow();
    }


    
  return (
    <>
    <div className='centered'>
        <h1>Finaliza tu compra!</h1>
        <form onSubmit={handleSubmit} > 
            <div className="mb-3">
                <label className="form-label">Nombre y apellido</label>
                <input type="text" className="form-control" name="name" placeholder="Juan Perez" required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Direccion de correo electronico</label>
                <input type="email" className="form-control" name="mail" placeholder="email@email.com" required/>
                <div className="form-text">No compartiremos tu email con nadie.</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Telefono</label>
                <input type="text" className="form-control" name="phone" placeholder="(+54) 011-123456789" required/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" name="subscribe" defaultChecked />
                <label className="form-check-label">Deseo suscribirme para recibir noticias.</label>
            </div>
            <Button type="submit" variant="primary">Enviar orden</Button>
        </form>
    </div>
    {loading ? (
        <div className="loading">
        </div>
    ) : (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
            <Modal.Title>Orden realizada con exito!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Su orden fue realizada con exito con el ID: {ID} <br />
            Puede ver el estado de su orden en el encabezado de la pagina
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleClose} as={Link} to={"/Shop-of-Roll"} >
            Cerrar
        </Button>
        </Modal.Footer>
    </Modal>)}
    </>
  );
};

export default SendOrder;
