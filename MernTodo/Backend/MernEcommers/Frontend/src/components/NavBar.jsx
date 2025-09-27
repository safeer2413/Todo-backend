import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap"
import { FaShoppingCart, FaUser } from "react-icons/fa"

function NavBar() {
    return (
        <>
            <header >
                <Navbar bg='warning' variant="success"  expand="lg"  collapseOnSelect>
                    <Container>
                        <Navbar.Brand href='/' className="border border-dark rounded px-3 py-2 fw-bold">Quick Cart</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className='ms-auto'>
                                <Nav.Link href='/cart'>
                                    <FaShoppingCart /> Cart
                                </Nav.Link>
                                <Nav.Link href='/login'>
                                    <FaUser /> Sign In
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
            </header>
        </>
    )
}

export default NavBar