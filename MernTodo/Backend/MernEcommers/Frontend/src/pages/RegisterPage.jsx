import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRegisterUserMutation } from '../slices/userApiSlice';
import { Form, Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';

function RegisterPage() {
  const { userInfo } = useSelector((state) => state.auth);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [registerUser] = useRegisterUserMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, []);
// userInfo, navigate

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({
        name,
        email,
        mobileNumber,
        password,
      }).unwrap();

      localStorage.setItem('userInfo', JSON.stringify(response));
      
      console.log('Registration Successful', response);
      navigate('/login');
    } catch (error) {
      setMessage(error?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(145deg,rgb(156, 140, 66),rgb(215, 194, 156))',        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4}>
            <Card className="shadow-lg p-4 rounded-4" style={{ backgroundColor: '#262626', color: '#f8f8f8' }}>
              <Card.Body>
                <h2 className="text-center mb-4" style={{ color: '#ff6700' }}>Create an Account</h2>

                {message && <Alert variant="danger">{message}</Alert>}

                <Form onSubmit={registerHandler}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMobile">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Mobile Number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="w-100 py-2"
                    style={{ backgroundColor: '#ff6700', border: 'none' }}
                  >
                    Register
                  </Button>
                </Form>

                <div className="text-center mt-3">
                  <Link to="/login" style={{ color: '#ff6700', textDecoration: 'none' }}>
                    Already have an account? <strong>Login</strong>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RegisterPage;
