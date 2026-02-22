import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <div className='row justify-content-center pt-5'>
            <div className='col-12 col-md-6 col-lg-5 bg-white p-5 rounded shadow-lg border border-light'>
                <h1 className='text-center fw-bold mb-4 text-primary'>Sign In</h1>
                <p className='text-muted text-center mb-4'>Login to access your personalized recommendations and orders.</p>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='email' className='mb-3'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='py-2'
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password' className='mb-4'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='py-2'
                        ></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary' className='w-100 py-2 fs-5 shadow-sm'>
                        Sign In
                    </Button>
                </Form>

                <Row className='py-4 text-center'>
                    <Col>
                        New Customer?{' '}
                        <Link to='/register' className='text-primary fw-bold text-decoration-none'>
                            Register Here
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default LoginPage;
