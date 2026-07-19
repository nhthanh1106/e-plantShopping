import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plantsArray = [
    {
        category: "Air Purifying",
        plants: [
            { name: "Snake Plant", price: 15, image: "img1.jpg" },
            { name: "Spider Plant", price: 12, image: "img2.jpg" },
            { name: "Peace Lily", price: 18, image: "img3.jpg" },
            { name: "Boston Fern", price: 14, image: "img4.jpg" },
            { name: "Aloe Vera", price: 10, image: "img5.jpg" },
            { name: "English Ivy", price: 16, image: "img6.jpg" }
        ]
    },
    {
        category: "Low Light",
        plants: [
            { name: "ZZ Plant", price: 20, image: "img7.jpg" },
            { name: "Cast Iron Plant", price: 22, image: "img8.jpg" },
            { name: "Pothos", price: 11, image: "img9.jpg" },
            { name: "Philodendron", price: 13, image: "img10.jpg" },
            { name: "Chinese Evergreen", price: 19, image: "img11.jpg" },
            { name: "Parlor Palm", price: 17, image: "img12.jpg" }
        ]
    },
    {
        category: "Pet Friendly",
        plants: [
            { name: "Money Tree", price: 25, image: "img13.jpg" },
            { name: "Calathea", price: 21, image: "img14.jpg" },
            { name: "Areca Palm", price: 24, image: "img15.jpg" },
            { name: "Ponytail Palm", price: 18, image: "img16.jpg" },
            { name: "Peperomia", price: 12, image: "img17.jpg" },
            { name: "Polka Dot Plant", price: 9, image: "img18.jpg" }
        ]
    }
];

const ProductList = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    
    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    const isAddedToCart = (plantName) => {
        return cartItems.some(item => item.name === plantName);
    };

    return (
        <div>
            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/plants">Plants</a>
                <a href="/cart">Cart <span className="cart-icon-count">{totalItems}</span></a>
            </nav>

            <div className="product-list">
                {plantsArray.map((category, index) => (
                    <div key={index} className="category-section">
                        <h2>{category.category}</h2>
                        <div className="product-grid">
                            {category.plants.map((plant, pIndex) => (
                                <div key={pIndex} className="plant-card">
                                    <img src={plant.image} alt={plant.name} />
                                    <h3>{plant.name}</h3>
                                    <p>Price: ${plant.price}</p>
                                    <button 
                                        className="add-to-cart-btn" 
                                        onClick={() => handleAddToCart(plant)}
                                        disabled={isAddedToCart(plant.name)}
                                    >
                                        {isAddedToCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
