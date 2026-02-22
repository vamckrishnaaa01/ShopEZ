import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
        } else {
            navigate('/');
        }
    };

    return (
        <div className='row justify-content-center pt-5'>
            <div className='col-12 col-md-6 col-lg-5 bg-white p-5 rounded shadow-lg border border-light'>
                <h1 className='text-center fw-bold mb-4 text-primary'>Register</h1>
                <p className='text-muted text-center mb-4'>Create a ShopEZ account for effortless shopping.</p>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name' className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='py-2'
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email' className='mb-3'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='py-2'
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password' className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='py-2'
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='confirmPassword' className='mb-4'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Confirm password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className='py-2'
                        ></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary' className='w-100 py-2 fs-5 shadow-sm'>
                        Register
                    </Button>
                </Form>

                <Row className='py-4 text-center'>
                    <Col>
                        Have an Account?{' '}
                        <Link to='/login' className='text-primary fw-bold text-decoration-none'>
                            Login Here
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default RegisterPage;
