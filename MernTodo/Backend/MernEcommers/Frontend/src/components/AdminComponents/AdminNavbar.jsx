import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa"
import { RiHome4Fill } from "react-icons/ri";
function AdminNavbar() {
  return (
    <>
      <header >
        <Navbar bg='warning' variant="success" expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand href='/' className="border border-dark rounded px-3 py-2 fw-bold">Quick Cart</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='ms-auto'>
                <Nav.Link href='/cart'>
                  <FaShoppingCart /> Cart
                </Nav.Link>
                <Nav.Link href='/'>
                <RiHome4Fill/> Home
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>

        </Navbar>
      </header>
    </>
  )
}

export default AdminNavbar