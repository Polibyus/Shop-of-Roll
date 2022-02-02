import React, { useEffect, useState } from 'react';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { Button, Form, FormControl, Modal } from 'react-bootstrap';
import { collection, getDocs, query } from 'firebase/firestore';
import db from '../firebase/firebase';

const SeeOrder = () => {
    const [ID, setID] = useState();
    const [search, setSearch] = useState(false);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [order, setOrder] = useState({
        buyer: { name: '', email: '', phone: '' },
        estado: "",
        items: 0,
        precioFinal: 0,
        total: 0
    })
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (search) {
            async function fetchData() {
                setLoading(true);
                const ordersCollection = query(collection(db, "orders"));
                try {
                    const querySnapshot = await getDocs(ordersCollection);
                    const myOrder = querySnapshot.docs.find((doc) => doc.id === ID);
                    setOrder(myOrder.data());
                }
                catch {
                    alert("No se encuentra la orden")
                    setShow(false);
                }
                setLoading(false);
            }
            fetchData();
        }// eslint-disable-next-line
    }, [ID]);

    const handleSearch = (event) => {
        setID(event.target.ID.value);
        event.preventDefault();
        setSearch(true);
    }

    return (
        <>
            <Form className="d-flex" onSubmit={handleSearch}>
                <FormControl
                    type="search"
                    name="ID"
                    placeholder="Pedido por N° de orden"
                    className="me-2"
                />
                <Button variant="success" type='submit' onClick={handleShow}><GiMagnifyingGlass /></Button>
            </Form>
            {loading ? (
                <div className="loading">
                </div>
            ) : (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Orden de: {order.buyer.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Estado: {order.estado} <br />
                        Cantidad de items: {order.total} <br />
                        Precio Final: ${order.precioFinal} <br />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>)}
        </>
    );
};

export default SeeOrder;
