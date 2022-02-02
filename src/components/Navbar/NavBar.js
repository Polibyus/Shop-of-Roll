import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../img/logo.png';
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom';
import SeeOrder from '../SeeOrder';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='mb-4'>
            <Container>
                <Navbar.Brand as={Link} to={"/Shop-of-Roll"}>
                    <img
                        alt="logo SoR"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Shop of Roll
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/Recomendadas"} style={{ textDecoration: 'none' }}>Figuras recomendadas</Nav.Link>
                        <NavDropdown title="Dungeons and Dragons" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to={"/Heroes"}>Heroes</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/Enemigos"}>Enemigos</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/NPC"}>NPC's</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to={"/Manuales"}>Guias y manuales</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to={"/aboutus"}>Quienes somos?</Nav.Link>
                    </Nav>
                    <SeeOrder />
                    <Nav>
                        <CartIcon />
                        {/* <Nav.Link className='px-2' eventKey={2} href="https://polibyus.github.io/Roll-Adventure/" target="_blank">Un descuento?</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
