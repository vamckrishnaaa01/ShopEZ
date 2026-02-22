import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <Card className='my-3 p-3 rounded product-card shadow-sm'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' className='product-image' />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`} className='text-decoration-none'>
                    <Card.Title as='div' className='product-title text-dark'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='h3' className='mt-2'>${product.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
