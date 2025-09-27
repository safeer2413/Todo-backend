import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function HomePage() {

  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate()

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, []);

  return (

    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(145deg,rgb(156, 140, 66),rgb(215, 194, 156))',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}>
      <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-white">
        <Card className="text-center p-4 shadow-lg" style={{ backgroundColor: '#333', borderRadius: '1rem' }}>
          <h3 className="mb-4" style={{ color: '#FF8C00' }}>Welcome to Quick Cart</h3>
          <Button variant="warning" className="mb-3 w-100" as={Link} to="/product">
            Click to Product Page
          </Button>
          <Button variant="outline-warning" className="w-100" as={Link} to="/login">
            Already Have an Account
          </Button>
        </Card>
      </Container>
    </div>

  );
}

export default HomePage;