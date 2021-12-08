import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import logo from '../img/logo.png';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home">
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
                        <Nav.Link href="#features">Quienes somos?</Nav.Link>
                        <Nav.Link href="#pricing">Figuras recomendadas</Nav.Link>
                        <NavDropdown title="Dungeons and Dragons" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Humanos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Orcos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">NPC's</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Guias y manuales</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://github.com/Polibyus" target="_blank">GitHub</Nav.Link>
                        <Nav.Link eventKey={2} href="https://polibyus.github.io/Roll-Adventure/" target="_blank">Un descuento?</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
