import React from 'react';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PlaceOrderPage = () => {
    // Mock Static data for flow display
    const cart = {
        paymentMethod: 'PayPal',
        shippingAddress: {
            address: '123 Gift Street',
            city: 'New York',
            postalCode: '10001',
            country: 'USA'
        },
        itemsPrice: 120.99,
        shippingPrice: 0.00,
        taxPrice: 15.00,
        totalPrice: 135.99,
        cartItems: [
            {
                product: '1',
                name: 'Elegant Gold Bangle',
                image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                price: 120.99,
                qty: 1,
            }
        ]
    };

    const placeOrderHandler = () => {
        // Trigger alert and backend call logic goes here
        alert("Success! Order Confirmation Email sent for Emily's Gift.");
    };

    return (
        <>
            <div className="text-center mt-3 mb-5">
                <h1 className="fw-bold display-4">Review Your Order</h1>
                <p className="text-muted fs-5">almost there...</p>
            </div>
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush' className='shadow-sm rounded'>
                        <ListGroup.Item className='p-4'>
                            <h2 className='h4 border-bottom pb-2'>Shipping</h2>
                            <p>
                                <strong>Address:</strong>
                                {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                                {cart.shippingAddress.postalCode},{' '}
                                {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item className='p-4'>
                            <h2 className='h4 border-bottom pb-2'>Payment Method</h2>
                            <strong>Method: </strong>
                            {cart.paymentMethod}
                        </ListGroup.Item>

                        <ListGroup.Item className='p-4'>
                            <h2 className='h4 border-bottom pb-2'>Order Items</h2>
                            {cart.cartItems.length === 0 ? (
                                <div>Your cart is empty</div>
                            ) : (
                                <ListGroup variant='flush'>
                                    {cart.cartItems.map((item, index) => (
                                        <ListGroup.Item key={index} className='px-0'>
                                            <Row className='align-items-center'>
                                                <Col md={2}>
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fluid
                                                        rounded
                                                    />
                                                </Col>
                                                <Col>
                                                    <Link to={`/product/${item.product}`} className='text-decoration-none text-dark fw-bold'>
                                                        {item.name}
                                                    </Link>
                                                </Col>
                                                <Col md={4}>
                                                    {item.qty} x ${item.price} = ${item.qty * item.price}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card className='shadow-sm border-0 border-top border-4 border-dark mt-4 mt-md-0'>
                        <ListGroup variant='flush'>
                            <ListGroup.Item className='bg-light text-center'>
                                <h2 className='h4 m-0 py-2'>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items</Col>
                                    <Col>${cart.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>${cart.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>${cart.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item className='bg-light'>
                                <Row className='fw-bold text-dark fs-5'>
                                    <Col>Total</Col>
                                    <Col>${cart.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-grid gap-2">
                                <Button
                                    type='button'
                                    className='btn-block btn-dark shadow py-3 fs-5'
                                    disabled={cart.cartItems === 0}
                                    onClick={placeOrderHandler}
                                >
                                    Confirm & Place Order
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default PlaceOrderPage;
