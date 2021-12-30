import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../img/logo.png'
import CartIcon from './CartIcon'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='mb-4'>
            <Container>
                <Navbar.Brand href="/">
                <img
                    alt="logo SoR"
                    src= {logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Shop of Roll
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/Recomendadas">Figuras recomendadas</Nav.Link>
                        <NavDropdown title="Dungeons and Dragons" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/Heroes">Heroes</NavDropdown.Item>
                            <NavDropdown.Item href="/Enemigos">Enemigos</NavDropdown.Item>
                            <NavDropdown.Item href="/NPC">NPC's</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/Manuales">Guias y manuales</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/Conocenos">Quienes somos?</Nav.Link>
                    </Nav>
                    <Nav>
                        <CartIcon />
                        {' '}
                        <Nav.Link className='px-2' eventKey={2} href="https://polibyus.github.io/Roll-Adventure/" target="_blank">Un descuento?</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
