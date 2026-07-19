import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';

const App = () => {
    const [showProductList, setShowProductList] = useState(false);

    const handleGetStartedClick = () => {
        setShowProductList(true);
    };

    return (
        <div className="app-container">
            {!showProductList ? (
                <div className="landing-page">
                    <h1>Paradise Nursery</h1>
                    <p>Welcome to our plant shop!</p>
                    <button className="get-started-btn" onClick={handleGetStartedClick}>
                        Get Started
                    </button>
                </div>
            ) : (
                <ProductList />
            )}
        </div>
    );
};

export default App;
