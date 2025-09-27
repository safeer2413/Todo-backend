import React from 'react'
import AdminNavbar from '../../components/AdminComponents/AdminNavbar'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'

function AdminAddproduct() {
    return (
        <>
            <AdminNavbar />
            <div style={{
                minHeight: '100vh',
                background: 'linear-gradient(145deg,rgb(156, 140, 66),rgb(215, 194, 156))', display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
            }}>

                <Form >

                    <Row className="mb-3">

                        <Form.Group as={Col} md="4" className="position-relative">
                            <Form.Label>Product name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder='Product name'
                            />
                        </Form.Group>


                        <Form.Group as={Col} md="4" className="position-relative">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder='Brand'
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                            <Form.Label>Original Price</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder='Original price'
                            />
                        </Form.Group>

                    </Row>


                    <Row className="mb-3">

                        <Form.Group as={Col} md="4">
                            <Form.Label>Offer Price</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder='Offer Price'
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder='Stock'
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                type="text"
                                placeholder='Description'
                            />
                        </Form.Group>

                    </Row>


                    <Form.Group className="position-relative mb-3">
                        <Form.Label>File</Form.Label>
                        <Form.Control
                            type="file"
                            required
                        />
                    </Form.Group>

                    <Button  type="submit">Submit</Button>
                </Form>
            </div>
        </>
    )
}

export default AdminAddproduct