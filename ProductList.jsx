import React from 'react';

const ProductList = () => {
    return (
        <div>
            {/* Navbar links */}
            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/plants">Plants</a>
                <a href="/cart">Cart <span className="cart-icon-count">3</span></a>
            </nav>

            {/* Group plants into at least three categories */}
            <div className="categories">
                <h2>Category 1: Air Purifying</h2>
                <h2>Category 2: Low Light</h2>
                <h2>Category 3: Pet Friendly</h2>
            </div>

            {/* Display at least six unique houseplants per category */}
            <div className="product-grid">
                <div className="plant-card">
                    <img src="thumbnail1.jpg" alt="thumbnail" />
                    <h3>Snake Plant</h3>
                    <p>Price: $15</p>
                    {/* Add to Cart buttons that disable after click and increment cart icon count */}
                    <button className="add-to-cart-btn" disabled={false}>Add to Cart</button>
                    <button className="add-to-cart-btn" disabled={true}>Added to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
