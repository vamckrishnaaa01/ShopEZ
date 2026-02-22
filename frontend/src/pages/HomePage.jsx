import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products'; // Temporary static data

const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    // Simulating the "Effortless Product Discovery" & "Personalized Recommendations"
    const displayedProducts = selectedCategory
        ? products.filter(p => p.category === selectedCategory)
        : products;

    return (
        <>
            <h1 className="my-4 display-5 fw-bold text-primary">Discover Perfect Gifts</h1>

            <div className="mb-4">
                <strong className="me-3">Filter By Style:</strong>
                <button className={`btn ${selectedCategory === '' ? 'btn-primary' : 'btn-outline-primary'} me-2`} onClick={() => setSelectedCategory('')}>All</button>
                <button className={`btn ${selectedCategory === 'bracelets' ? 'btn-primary' : 'btn-outline-primary'} me-2`} onClick={() => setSelectedCategory('bracelets')}>Bracelets</button>
                <button className={`btn ${selectedCategory === 'handbags' ? 'btn-primary' : 'btn-outline-primary'} me-2`} onClick={() => setSelectedCategory('handbags')}>Handbags</button>
            </div>

            <Row>
                {displayedProducts.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>

            {/* Recommended Section (Scenario: Personalized Shopping Experience) */}
            <div className="mt-5 p-4 bg-light rounded shadow-sm border-start border-4 border-warning">
                <h3 className="fw-bold text-dark">✨ Recommended for You</h3>
                <p className="text-muted">Based on Emily's preferred style and your recent searches.</p>
                <Row>
                    {products.filter(p => p.name.includes("Gold Bangle")).map((product) => (
                        <Col key={`rec-${product._id}`} sm={12} md={6} lg={4}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
};

export default HomePage;
