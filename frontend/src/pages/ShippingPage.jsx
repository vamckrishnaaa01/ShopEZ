import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ShippingPage = () => {
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/payment');
    };

    return (
        <div className='row justify-content-center pt-5'>
            <div className='col-12 col-md-6 bg-light p-5 rounded shadow-sm border-top border-5 border-primary'>
                <h1 className='mb-4 text-center fw-bold'>Shipping Address</h1>
                <p className='text-muted text-center mb-4'>Scenario: entering Emily's address</p>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='address' className='mb-3'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter address'
                            required
                            defaultValue='123 Gift Street'
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='city' className='mb-3'>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter city'
                            required
                            defaultValue='New York'
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='postalCode' className='mb-3'>
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter postal code'
                            required
                            defaultValue='10001'
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='country' className='mb-4'>
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter country'
                            required
                            defaultValue='USA'
                        ></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary' className='w-100 py-3 shadow border-0'>
                        Continue to Payment
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default ShippingPage;
