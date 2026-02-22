import React from 'react';
import { Link } from 'react-router-dom';
import { DefaultContext } from '../context';

const CartPage = () => {
    // Static cart for demonstration purposes before Redux integration
    const cartItems = [
        {
            product: '1',
            name: 'Elegant Gold Bangle',
            image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            price: 120.99,
            qty: 1,
        }
    ];

    return (
        <div className='row'>
            <div className='col-md-8'>
                <h1 className='mb-4'>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <div className='alert alert-info'>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </div>
                ) : (
                    <ul className='list-group list-group-flush'>
                        {cartItems.map((item) => (
                            <li key={item.product} className='list-group-item px-0'>
                                <div className='row align-items-center'>
                                    <div className='col-md-2'>
                                        <img src={item.image} alt={item.name} className='img-fluid rounded' />
                                    </div>
                                    <div className='col-md-3'>
                                        <Link to={`/product/${item.product}`} className='text-decoration-none text-dark fw-bold'>{item.name}</Link>
                                    </div>
                                    <div className='col-md-2'>${item.price}</div>
                                    <div className='col-md-2'>
                                        Qty: {item.qty}
                                    </div>
                                    <div className='col-md-2'>
                                        <button type='button' className='btn btn-light shadow-sm text-danger'>
                                            <i className='fas fa-trash'></i> Remove
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className='col-md-4'>
                <div className='card shadow-sm border-0'>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <h2 className='fs-4'>
                                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                                items
                            </h2>
                            $
                            {cartItems
                                .reduce((acc, item) => acc + item.qty * item.price, 0)
                                .toFixed(2)}
                        </li>
                        <li className='list-group-item'>
                            <Link to="/shipping" className='btn btn-dark w-100 p-3'>
                                Proceed To Checkout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
