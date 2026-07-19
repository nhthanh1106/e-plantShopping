import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
    };

    const calculateTotalCost = (item) => {
        return (item.quantity * item.price).toFixed(2);
    };

    const handleIncrement = (item) => {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        } else {
            dispatch(removeItem(item));
        }
    };

    const handleRemove = (item) => {
        dispatch(removeItem(item));
    };

    return (
        <div className="shopping-cart">
            <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>

            <div className="cart-items-container">
                {cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>Unit Price: ${item.price}</p>
                        <p>Total Cost: ${calculateTotalCost(item)}</p>
                        
                        <button className="increase-btn" onClick={() => handleIncrement(item)}>+</button>
                        <span>{item.quantity}</span>
                        <button className="decrease-btn" onClick={() => handleDecrement(item)}>-</button>
                        
                        <button className="delete-btn" onClick={() => handleRemove(item)}>Delete</button>
                    </div>
                ))}
            </div>

            <div className="cart-actions">
                <button className="continue-shopping" onClick={onContinueShopping}>Continue Shopping</button>
                <button className="checkout-btn" onClick={() => alert('Coming Soon')}>Checkout</button>
            </div>
        </div>
    );
};

export default CartItem;
