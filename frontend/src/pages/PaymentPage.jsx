import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/placeorder');
    };

    return (
        <div className='row justify-content-center pt-5'>
            <div className='col-12 col-md-6 bg-light p-5 rounded shadow-sm border-top border-5 border-success'>
                <h1 className='text-center fw-bold mb-4'>Payment Method</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group className='mb-4'>
                        <Form.Label as='legend'>Select Method</Form.Label>
                        <Col>
                            <Form.Check
                                type='radio'
                                label='PayPal or Credit Card'
                                id='PayPal'
                                name='paymentMethod'
                                value='PayPal'
                                checked
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className='mb-2 fs-5'
                            ></Form.Check>
                            <Form.Check
                                type='radio'
                                label='Stripe'
                                id='Stripe'
                                name='paymentMethod'
                                value='Stripe'
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className='fs-5'
                            ></Form.Check>
                        </Col>
                    </Form.Group>

                    <Button type='submit' variant='success' className='w-100 py-3 shadow'>
                        Continue to Place Order
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default PaymentPage;
