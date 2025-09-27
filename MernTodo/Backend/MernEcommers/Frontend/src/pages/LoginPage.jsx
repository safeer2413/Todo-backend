import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useLoginUserMutation } from '../slices/userApiSlice';
import { setCredentials } from '../slices/authSlice';

function LoginPage() {
  const { userInfo } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const [loginUser] = useLoginUserMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault()
    try {

      if (userInfo) {
        navigate('/');
      }
      else {
        let response = await loginUser({ email, password }).unwrap();

        // localStorage.setItem('userInfo', JSON.stringify({ name, email }));

        console.log('Login Successful', response);

        dispatch(setCredentials({ ...response }));
        navigate('/');
      }

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, []);


  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(145deg,rgb(156, 140, 66),rgb(215, 194, 156))', display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        {/*         background: 'linear-gradient(145deg,rgb(156, 140, 66),rgb(215, 194, 156))',
 */}
        <Container className="d-flex justify-content-center align-items-center min-vh-100" >
          <Card style={{ width: '25rem', padding: '20px', backgroundColor: '#262626', color: '#fff', borderRadius: '12px' }}>
            <Card.Body>
              <h3 className="text-center" style={{ color: '#ff6600' }}>Login</h3>
              <Form onSubmit={loginHandler}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button type="submit" style={{ backgroundColor: '#ff6600', border: 'none', width: '100%' }}>
                  Login
                </Button>
              </Form>
              <div className="mt-3 text-center">
                <Link to="/register" style={{ color: '#ff6600', textDecoration: 'none' }}>
                  Create an Account
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>


      {/* <form onSubmit={loginHandler}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit'>Login</button>
      </form>
      <Link to={'/register'}>Create Account</Link> */}

    </>
  )
}

export default LoginPage